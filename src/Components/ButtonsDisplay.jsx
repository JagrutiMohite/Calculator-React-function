import React from "react";

export default function ButtonsDisplay(props) {
  return (
    <>
      <div className="buttons">
        <button
          className="orange Large"
          value={"C"}
          onClick={() => props.ButtonVal("")}
        >
          C
        </button>
        <button
          className="orange"
          value={"%"}
          onClick={(e) => props.ButtonVal(e.target.value)}
        >
          %
        </button>
        <button
          className="orange"
          value={"/"}
          onClick={(e) => props.ButtonVal(e.target.value)}
        >
          /
        </button>
        <button value={"1"} onClick={(e) => props.ButtonVal(e.target.value)}>
          1
        </button>
        <button value={"2"} onClick={(e) => props.ButtonVal(e.target.value)}>
          2
        </button>
        <button value={"3"} onClick={(e) => props.ButtonVal(e.target.value)}>
          3
        </button>
        <button
          className="orange"
          value={"*"}
          onClick={(e) => props.ButtonVal(e.target.value)}
        >
          *
        </button>
        <button value={"4"} onClick={(e) => props.ButtonVal(e.target.value)}>
          4
        </button>
        <button value={"5"} onClick={(e) => props.ButtonVal(e.target.value)}>
          5
        </button>
        <button value={"6"} onClick={(e) => props.ButtonVal(e.target.value)}>
          6
        </button>
        <button
          value={"-"}
          onClick={(e) => props.ButtonVal(e.target.value)}
          className="orange"
        >
          -
        </button>
        <button value={"7"} onClick={(e) => props.ButtonVal(e.target.value)}>
          7
        </button>
        <button value={"8"} onClick={(e) => props.ButtonVal(e.target.value)}>
          8
        </button>
        <button value={"9"} onClick={(e) => props.ButtonVal(e.target.value)}>
          9
        </button>
        <button
          value={"+"}
          onClick={(e) => props.ButtonVal(e.target.value)}
          className="orange"
        >
          +
        </button>
        <button
          value={"0"}
          onClick={(e) => props.ButtonVal(e.target.value)}
          className="Large"
        >
          0
        </button>
        <button value={"."} onClick={(e) => props.ButtonVal(e.target.value)}>
          .
        </button>
        <button
          value={"="}
          onClick={(e) => props.ButtonVal(e.target.value)}
          className="orange"
        >
          =
        </button>
      </div>
    </>
  );
}
