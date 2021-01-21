import React from "react";

export const Body = (props) => {
  return <p className="App-intro">{props.text}</p>;
};

export const Body2 = (props) => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myfunc(2, 2)}</p>
  </div>
);
