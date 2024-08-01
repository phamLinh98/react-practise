// import { forwardRef, useImperativeHandle, useState } from "react";
// import ButtonCheck from "../SideComponent/Button";

// export const ChildComponent = forwardRef(function ChildComponent(ref) {
//   const [stateChidlren, setStateChidlren] = useState(1);
//   useImperativeHandle(ref, () => {
//     return () => {};
//   });
//   return (
//     <>
//       <h1>{stateChidlren}</h1>
//       <ButtonCheck
//         onClickHandle={() => setStateChidlren((pre) => pre + 1)}
//         name={"Click"}
//       />
//     </>
//   );
// });
