"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavArticle = () => {
  const { id } = useParams();
  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      <h1>I am Id inside page {id}</h1>
    </article>
  );
};

export default NavArticle;
