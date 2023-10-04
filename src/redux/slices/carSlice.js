import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    currentPage: 1,
    searchItem: "",
    category: ""
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setCars(state, action) {
            state.cars = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setSearchItem(state, action) {
            state.searchItem = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload
        },
    }
})

export default carSlice.reducer
export const { setCars, setCurrentPage, setSearchItem, setCategory } = carSlice.actions