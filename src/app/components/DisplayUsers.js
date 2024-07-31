"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeUser, editUser } from "../redux/slice";
import "./Display.scss";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

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
      {userData.map((item) => (
        <div key={item.id} className="user-item">
          {isEditing === item.id ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="edit"
              />
              <button className="save" onClick={() => handleSave(item.id)}>
                <CheckIcon />
              </button>
            </>
          ) : (
            <>
              <span>{item.name}</span>
              <div className="buttons">
                <button onClick={() => dispatch(removeUser(item.id))}>
                  <CloseIcon />
                </button>
                <button onClick={() => handleEdit(item.id, item.name)}>
                  <EditIcon />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
