import React from 'react'
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const id = params.id;
    console.log(searchParams);
    const product = await fetch(
      `https://649e96f5245f077f3e9c9c19.mockapi.io/api/linkedin/learn/`
    ).then((res) => res.json());
  
    console.log(product)
    const previousImages = await parent;
    console.log(previousImages)
    return {
      title: product[0].title,
      openGraph: {
        title: 'biba',
        images: ['../../../favicon.ico']
      }
    };
  }

const Admin = () => {
  return (
    <div>Admin</div>
  )
}

export default Admin