import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  console.log("thang con bi render lai");
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}
export default function ParentComponent() {
  console.log("Thang cha bi render lai");
  return (
    <>
      <p>Linh</p>
      {/* Tach biet logic here */}
      <Counter />
    </>
  );
}
