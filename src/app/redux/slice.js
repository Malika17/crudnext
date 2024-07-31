const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };

      state.users.push(data);
      let userData = JSON.stringify(current(state.users));
      if (typeof window !== "undefined") {
        localStorage.setItem("users", userData);
      }
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
      let userData = JSON.stringify(data);
      if (typeof window !== "undefined") {
        localStorage.setItem("users", userData);
      }
    },
    editUser: (state, action) => {
      const { id, name } = action.payload; // Destructure id and name from action payload
      const userIndex = state.users.findIndex((user) => user.id === id); // Find the index of the user with the given id
      if (userIndex !== -1) {
        // Check if the user exists
        state.users[userIndex].name = name; // Update the user's name
        let userData = JSON.stringify(current(state.users)); // Convert the updated state to a JSON string
        if (typeof window !== "undefined") {
          localStorage.setItem("users", userData); // Save the updated users list to localStorage
        }
      }
    },
  },
});

export const { addUser, removeUser, editUser } = Slice.actions;
export default Slice.reducer;
