"use client";

import React, { Suspense, useEffect, useState } from "react";
import styles from "./getting-started.module.scss";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import type { Metadata } from "next";
import LinkButton from "@/components/LinkButton/LinkButton";
import { useParams } from "next/navigation";

interface IList {
  title: string;
  id: string;
  subtitle: string;
  body: string;
}

// export const metadata: Metadata = {
//   title: "About",
//   description: "this is team route!",
// };

const GettingStarted: FC<Readonly<{ children: ReactNode, title: ReactNode }>> = ({
  children,
  title
}) => {
  const data = [
    {
      title: "Java",
      id: "java",
      subtitle: "Learn Java! Why?",
      body: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      title: "C#",
      id: "c-sharp",
      subtitle: "Learn C#! Why?",
      body: "C# is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      title: "TypeScript",
      id: "typescript",
      subtitle: "Learn TypeScript! Why?",
      body: "TypeScript is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      title: "Swift",
      id: "swift",
      subtitle: "Learn Swift! Why?",
      body: "Swift is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      title: "Python",
      id: "python",
      subtitle: "Learn Python! Why?",
      body: "Pythonis a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      title: "JavaScript",
      id: "js",
      subtitle: "Learn JavaScript! Why?",
      body: "JavaScript is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
  ];
  const { id: routeId } = useParams()
  return (
    <>
      <main>
        <div className="nav-container container">
          <nav>
            <ul>
              <li>{ title }</li>
              <ul className="nav-items-list">
                {data.map(({ title, id }) => (
                  <li key={id + Math.random()} style={{ background: routeId === id ? " #2e3192" : "none" }}>
                    <LinkButton
                      href={`/about/getting-started/${id}`}
                      isActive={routeId === id}
                      id={id}
                    >
                      {title}
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </ul>
          </nav>
          {children}
        </div>
      </main>
    </>
  );
};

export default GettingStarted;
