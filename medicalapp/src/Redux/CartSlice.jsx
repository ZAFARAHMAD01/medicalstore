import {createSlice} from "@reduxjs/toolkit"

// const cartSlice = createSlice({
//     name:"Cart",
//     initialState:[],
//     reducers:{
//         add(state,action){
//             // state.Cart=action.payload;
//             state.push(action.payload);
            
//             console.log(action.payload);
            
//             // state.Cart.push(action.payload)
//         },
//         remove(state){
//             state.Cart = null;
//         }
//     }
// })

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            console.log(action.payload);
            
            return state.filter((item)=>item.id != action.payload.id)
        },
        addOne(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeOne(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    return state.filter(item => item.id !== action.payload.id);
                }
            }
        }
    }
})
export const {add, remove } = cartSlice.actions;
export default cartSlice.reducer