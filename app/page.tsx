"use client";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1); 
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      gap: "20px"
    }}>
      
      <h1>Counter App 🔢</h1>

      <h2>{count}</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={increment}>➕ Increment</button>
        <button onClick={decrement}>➖ Decrement</button>
        <button onClick={reset}>🔄 Reset</button>
      </div>

    </div>
  );
}