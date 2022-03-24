import React from "react";
import ButtonsDisplay from "./ButtonsDisplay";
import OutputDisplay from "./OutputDisplay";

export default function Calculator() {
  // const [cal, setCal] = useState({
  //   prevVal: "",
  //   currVal: "",
  //   outputVal: ""
  // });
  return (
    <div className="calculator">
      <OutputDisplay />
      <ButtonsDisplay />
    </div>
  );
}
