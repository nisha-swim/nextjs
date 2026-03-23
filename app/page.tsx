"use client";
import { useState } from "react";
import styles from "./Home.module.css";
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
    <div className={styles.container}>
    
      
      <h1 className={styles.title}>Counter App 🔢</h1>

      <h2 className={styles.count}>{count}</h2>

      <div className={styles.buttonGroup}>
        <button className={`${styles.btn} ${styles.increment}`} onClick={increment}>➕ Increment</button>
        <button className={`${styles.btn} ${styles.decrement}`} onClick={decrement}>➖ Decrement</button>
        <button className={`${styles.btn} ${styles.reset}`} onClick={reset}>🔄 Reset</button>
      </div>

    </div>
  );
}