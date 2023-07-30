import React from "react";
import Header from "./Header";
import NewComponents from "./NewComponents";

function User(props) {
  console.log(props);
  return (
    <div>
      <Header data={props} />
      <NewComponents />
    </div>
  );
}

export default User;
