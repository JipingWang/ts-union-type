import React, { CSSProperties } from "react";

const style1 = { flex: 1, flexDirection: "wrong-value" }

// both the designer and browser will not report error of wrong value for [flexDirection]
// this is a minor issue, but what if it is mission-critical bussiness logic issue?

export const Div4 = () => {
  return (
    <div className="Div4" style={style1}>Div4 JavaScript React Element. Wrong value is ignore by designer and browser.
    </div>
  );
};

export default Div4;
