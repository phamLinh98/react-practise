import { useState } from "react";
export const NewComponent = () => {
  console.log("Ham Cha bi Render");
  return (
    <>
      <p>Hello New Component</p>
      <ChildComponent>
        <ChauComponent />
      </ChildComponent>
    </>
  );
};
export const ChildComponent = ({ children }) => {
  console.log("Ham Con Bi render");
  return <>{children}</>;
};
export const ChauComponent = () => {
  const [state, setState] = useState(0);
  console.log("Ham Chau Bi Render");
  return (
    <>
      <p>{state}</p>
      <button onClick={() => setState((pre) => pre + 1)}>Click</button>
    </>
  );
};
