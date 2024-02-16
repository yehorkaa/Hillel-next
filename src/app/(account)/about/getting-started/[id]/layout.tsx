import React, { FC, ReactNode } from "react";

const Layout: FC<{ idtitle: ReactNode; children: ReactNode }> = ({
  idtitle,
  children,
}) => {
  return (
    <>
      <h1 style={{ whiteSpace: "nowrap" }}>{idtitle} Best Language</h1>
      {children}
    </>
  );
};

export default Layout;
