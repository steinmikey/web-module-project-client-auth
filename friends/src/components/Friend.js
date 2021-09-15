import React from "react";

const Friend = (props) => {
  const { friend } = props;

  return (
    <div>
      <div>{friend.name}</div>
      <div>age: {friend.age}</div>
      <div>email: {friend.email}</div>
    </div>
  );
};

export default Friend;
