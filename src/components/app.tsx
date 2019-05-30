import React, { CSSProperties } from "react";
// user-packgaes
import Div3 from './Div3'
// @ts-ignore todo: define type for span2.
import Div4 from '../componets-js/Div4'

const style1 = { flex: 1, flexDirection: "column" }

// div-1: ok, for in-place JSON object, it is implicit type of CSSProperties;
const Div1 = () => {
  return (
    <div className="div1" style={{ display: "flex", flexDirection: "column" }}>
      Div1: in-place JSON is implicit type of CSSProperties
    </div>
  );
};

// div-2: type-error, JSON variable needs to be explicit type of CSSProperties

// const Div2 = () => {
//   return (
//     <div className="div2" style={style1}>
//       Div2: JSON variable needs to be explicit type of CSSProperties
//     </div>
//   );
// };


export const App: React.FC = () => {
  return (
    <div id="appContainer">
      <h3>React-TypeScript App</h3>
      {Div1()}
      {/* {Div2()} */} 
      <div>Div2 will report error, uncomment to see it.</div>
      <br/>
      <Div3 />
      <br/>
      <Div4 />
    </div>
  );
};

export default App;
