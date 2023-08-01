import React from "react";
type TDDProps = { name?: string };

function TDD(props:TDDProps) {
  const {name} = props;
  return <div>Hello {name}</div>;
}

export default TDD;
