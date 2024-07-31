"use client";
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import "./AddUsers.scss";
import AddIcon from "@mui/icons-material/Add";

export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    if (name) {
      dispatch(addUser(name));
    }
  };
  return (
    <div className="addUser">
      <h3>Daily Tasker</h3>
      <div className="newTask">
        <h2>Manage your daily tasks here</h2>
      </div>
      <div className="add">
        <input
          type="text"
          className="add-user-input"
          onChange={(e) => setName(e.target.value)}
          placeholder="Add New Task"
        />
        <button onClick={userDispatch} className="add-user-btn">
          <AddIcon />
        </button>
      </div>
    </div>
  );
}
