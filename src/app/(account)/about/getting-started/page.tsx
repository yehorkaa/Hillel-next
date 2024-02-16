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
  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      <h1>Getting Started!</h1>
      <h2>Wanna know something new? Choose your language</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
        quaerat? Ab sint doloribus ipsa voluptatibus nam saepe, adipisci, quis
        doloremque dolorem sequi officiis quidem esse mollitia quibusdam
        praesentium minima natus.
      </p>
    </article>
  );
};

export default NavArticle;
