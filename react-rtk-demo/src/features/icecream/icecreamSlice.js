import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberOfIceCreams: 10,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numberOfIceCreams --
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload
        }
    },
})

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions 