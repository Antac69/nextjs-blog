import Layout from "@/components/Layout";
import React from "react";

const primerPost = ({ data }) => {
  return<Layout title={data.title}>
    <h1>{data.title}</h1>
    <p>{data.body}</p>
  </Layout>;
};

// haciendo rutas dinamicas
export async function getStaticPaths() {
  console.log("hola");
  const uri = "https://jsonplaceholder.typicode.com/posts";
  try {
    const res = await fetch(uri);
    const data = await res.json();
    const paths = data.map(({id}) => ({params: {id:`${id}`}}));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

// extrayendo datos
export async function getStaticProps({ params }) {
  const uri = "https://jsonplaceholder.typicode.com/posts/" + params.id;
  console.log(params);
  try {
    const res = await fetch(uri);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}
export default primerPost;
