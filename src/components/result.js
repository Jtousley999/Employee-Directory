import React from "react";

function Result(props) {
  return (
    <tr>
      <th scope="col">
        <img src={props.image} alt="image"></img>
      </th>
      <th scope="col">{props.name}</th>
      <th scope="col">{props.phone}</th>
      <th scope="col">{props.email}</th>
      <th scope="col">{props.birthday}</th>
    </tr>
  );
}

export default Result;
