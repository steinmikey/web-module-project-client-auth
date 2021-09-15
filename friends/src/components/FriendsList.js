import axios from "axios";
import React, { useEffect, useState } from "react";

import Friend from "./Friend";

const initialFriend = {
  formIsVisible: false,
  friendInfo: {
    id: "",
    name: "",
    age: "",
    email: ""
  }
};

const FriendsList = () => {
  const [newFriend, setNewFriend] = useState(initialFriend);
  const [friends, setFriends] = useState([]);

  const toggleAddFriend = () => {
    setNewFriend({
      ...newFriend,
      formIsVisible: !newFriend.formIsVisible
    });
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      },
      body: {
        username: "lambda",
        password: "school",
        name: "",
        age: "",
        id: ""
      }
    };
    axios
      .post("http://localhost:5000/api/friends", config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .get("http://localhost:5000/api/friends", config)
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <button onClick={toggleAddFriend}>Add Friend</button>
      {newFriend.formIsVisible && (
        <form onSubmit={handleAddFriend}>
          <label htmlFor="name">
            <input type="text" name="name" />
          </label>
          <label htmlFor="age">
            <input type="number" name="age" />
          </label>
          <label htmlFor="email">
            <input type="email" name="email" />
          </label>
          <button>Add Friend</button>
        </form>
      )}
      {friends.map((friend) => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
