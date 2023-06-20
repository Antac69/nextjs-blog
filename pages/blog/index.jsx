import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const index = ({ data }) => {
  return (
    <Layout title="blog">
      <h1>Lista de blog</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              {id} - {title}
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
};

// extrayendo datos
export async function getStaticProps() {
  const uri = "https://jsonplaceholder.typicode.com/posts";
  try {
    const res = await fetch(uri);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}

export default index;
