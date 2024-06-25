import React from "react";

interface PageSquareLeftProps {
  children?: React.ReactNode;
}

const PageSquareLeft: React.FC<PageSquareLeftProps> = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2 bg-lime-300">
        <p>oi esquerda</p>
      </div>
      <div className="w-1/2 bg-lightgreen">
        <p>oi direita</p>
      </div>
      {children}
    </div>
  );
};

export default PageSquareLeft;
