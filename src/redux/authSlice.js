import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { username: "admin", password: "admin123" }, // Default user
        { username: "user", password: "user123" },   // Another test user
    ],
    isAuthenticated: false,
    currentUser: null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            const user = state.users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                state.isAuthenticated = true;
                state.currentUser = username;
                state.error = null;
            } else {
                state.error = "Invalid username or password";
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.currentUser = null;
            state.error = null;
        },
        register: (state, action) => {
            const { username, password } = action.payload;
            const userExists = state.users.some((u) => u.username === username);

            if (!userExists) {
                state.users.push({ username, password });
                state.error = null;
            } else {
                state.error = "Username already exists";
            }
        },
    },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
