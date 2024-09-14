import React from "react";

interface PropsTypes {
  content: string;
}

const PageTitle = ({ content }: PropsTypes) => {
  return <h1 className="mb-2 text-xl font-bold capitalize">{content}</h1>;
};

export default PageTitle;
