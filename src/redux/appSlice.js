import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice"
    initialState:{
        firstName: "",
        lastName: "",
        email: "",
        friends: []
    }
})