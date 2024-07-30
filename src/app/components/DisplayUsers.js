"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeUser, editUser } from "../redux/slice";

export default function DisplayUsers() {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(null);
  const [newName, setNewName] = useState("");

  const handleEdit = (id, name) => {
    setIsEditing(id);
    setNewName(name);
  };

  const handleSave = (id) => {
    dispatch(editUser({ id, name: newName }));
    setIsEditing(null);
    setNewName("");
  };

  return (
    <div className="display-user">
      <h3>User List</h3>
      {userData.map((item) => (
        <div key={item.id} className="user-item">
          {isEditing === item.id ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={() => handleSave(item.id)}>Save</button>
            </>
          ) : (
            <>
              <span>{item.name}</span>
              <button onClick={() => dispatch(removeUser(item.id))}>
                Remove
              </button>
              <button onClick={() => handleEdit(item.id, item.name)}>
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
