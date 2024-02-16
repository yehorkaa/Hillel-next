"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


interface IList {
  title: string;
  id: string;
  subtitle: string;
  body: string;
}


const NavArticle = () => {
  const { id } = useParams();
  const [{ title, subtitle, body }, setData] = useState<IList>({
    title: "",
    id: "",
    subtitle: "",
    body: "",
  });
  useEffect(() => {
    const getData = () => {
      fetch(`https://649e96f5245f077f3e9c9c19.mockapi.io/api/linkedin/learn/${id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    getData();
  }, [id]);

  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{body}</p>
    </article>
  );
};

export default NavArticle;
