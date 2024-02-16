"use client";
import React, { Suspense, useEffect, useState } from "react";



const AdminId = () => {
  return (
    <div>
      <Albums />
    </div>
  );
};

export default AdminId;

function Albums() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://649e96f5245f077f3e9c9c19.mockapi.io/api/linkedin/learn/`,
        {
          method: "GET",
        }
      );
      const lo = await res.json();
      setData(lo);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      {data.map(({ title, subtitle, id }) => (
        <div key={id + subtitle}>
          <div>{title}</div>
          <div>{subtitle}</div>
          <div>{id}</div>
        </div>
      ))}
    </div>
  );
}
