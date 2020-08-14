import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid" id="jumboStyle">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">
        Click on carrots to filter by heading or use the search box to narrow
        your results.
      </p>
      <div>{props.children}</div>
    </div>
  );
}

export default Jumbotron;
