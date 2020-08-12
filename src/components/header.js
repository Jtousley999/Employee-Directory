import React from "react";

function Header(props) {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
  );
}

export default Header;
