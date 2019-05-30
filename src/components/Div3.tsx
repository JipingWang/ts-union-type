import React, { CSSProperties } from "react";

// assign Type for your style variable
const style1: CSSProperties = { flex: 1, flexDirection: "column" }


export const Div3: React.FC = () => (
    <div className="Div3" style = {style1}>Div3(styled) TypeScript React Element.
    Try to put a wrong value to 'flexDirection'. The browser will ignore, but TypeScript will report error in design time.
    </div>
  )

export default Div3;
