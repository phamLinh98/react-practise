import { useEffect, useState } from "react";

export default function FeatchApi() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const fetchingData = await fetch("http://localhost:4000/folder");
        const data = await fetchingData.json();
        setState(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFunction();
    return () => {
      console.log("Cleanup function called");
    };
  }, []);

  const addNewElement = () => {
    // return setState(
    //   [...state].push({
    //     id: ++state[state.length - 1]["id"],
    //     element: "Linh",
    //   })
    // );
  };

  return (
    <>
      {state.map((item) => {
        return (
          <li key={item.id}>
            {item.id}
            {item.element}
          </li>
        );
      })}
      <button onClick={addNewElement}>Demo123</button>
    </>
  );
}
