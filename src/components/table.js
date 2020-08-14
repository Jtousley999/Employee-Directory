import React from "react";

function Table(props) {
  return (
    <table className="table" id="tableStyle">
      {props.children}
    </table>
  );
}

export default Table;
