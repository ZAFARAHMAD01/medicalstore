import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            const {id,quantity,name,img,price}=action.payload;
            const indexid=(state).findIndex(item=>item.id==id)
            if(indexid>=0){
                state[indexid].quantity+=quantity;
                state[indexid].price+=price;
                
            }
            else{

                state.push(action.payload);
            }
        },
        remove(state,action){
            console.log(action.payload);
            
            return state.filter((item)=>item.id != action.payload.id)
        },
        addOne(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            console.log(action.payload.id);
            console.log(existingItem.price);
            const co=existingItem.price;
            let co1=existingItem.price;
            console.log(co,'co');
            
            if (existingItem) {
                co1 +=parseInt(co)/ existingItem.quantity;    
                existingItem.price=co1;   
                existingItem.quantity += 1;             
                console.log( existingItem.price,'myprice2');
                console.log( action.payload.price,'myprice2');
                
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        addOne(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            console.log(action.payload.price);
            console.log(existingItem.price);
            const co=existingItem.price;
            let co1=existingItem.price;
            console.log(co,'co');
            
            if (existingItem) {
                co1 +=parseInt(co)/ existingItem.quantity;    
                existingItem.price=co1;   
                existingItem.quantity += 1;             
                console.log( existingItem.price,'myprice2');
                console.log( action.payload.price,'myprice2');
                
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
            
        },
        
        
        removeOne(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            const co=existingItem.price;
            let co1=existingItem.price;
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    co1 -=parseInt(co)/ existingItem.quantity;    
                    existingItem.price=co1;   
                    existingItem.quantity -= 1;   
                    console.log( existingItem.price,'myprice3');
                } else {
                    return state.filter(item => item.id !== action.payload.id);
                }
            }
        }
    }
})
export const {add, remove, addOne, removeOne } = cartSlice.actions;

export default cartSlice.reducer