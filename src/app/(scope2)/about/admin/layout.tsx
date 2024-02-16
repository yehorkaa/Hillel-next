import React, { ReactNode, FC } from "react";
import LinkButton from "@/components/LinkButton/LinkButton";


const Layout: FC<Readonly<{ children: ReactNode }>> = ({ children }) => {
  return (
    <div className="container">
      <nav>
        <ul>
          <LinkButton
            href={`/about/admin/${'tre'}`}
            isActive={false}
            id={'tre'}
          >
            {'Make a request'}
          </LinkButton>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
