import React from "react";

const Section = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return <section id={id}>{children}</section>;
};

export default Section;
