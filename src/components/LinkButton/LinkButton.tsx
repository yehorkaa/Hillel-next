import React, { ReactNode, FC, useState } from "react";
import Link from "next/link";



const LinkButton: FC<{
  children: ReactNode;
  href: string;
  isActive: boolean;
  id: string;
}> = ({ children, href, isActive }) => {
  return (
    <Link href={href} style={{ color: isActive ? " white" : "black" }}>
      {children}
    </Link>
  );
};

export default LinkButton;
