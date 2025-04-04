import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full min-h-screen items-center justify-center">{children}</div>;
};


export default layout;