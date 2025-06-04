"use client";
import { useState } from "react";

export default function ClientComponent() {
  console.log("rendering ClientComponent client component");
  const [count, setCount] = useState(0);

  return (
    <fieldset>
      <legend>Client Component</legend>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </fieldset>
  );
}
