import React from "react";
import PageSquareLeft from "src/layouts/PageSquareLeft";
import Counter from "src/components/Counter";

const HomePage: React.FC = () => {
  return (
    <main>
      <PageSquareLeft/>
      <Counter/>
    </main>
  );
};

export default HomePage;
