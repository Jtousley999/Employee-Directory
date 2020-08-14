import React from "react";

function Header(props) {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Picture</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
  );
}

export default Header;
