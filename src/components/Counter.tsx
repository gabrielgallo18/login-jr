// src/components/Counter.tsx
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-2">Contador</h2>
          <p className="text-gray-600">Valor: {count}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
            onClick={increment}>
            Incrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
