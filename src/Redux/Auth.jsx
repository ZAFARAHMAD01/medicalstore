import {createSlice} from "@reduxjs/toolkit"
const auth = createSlice({
    name:'user',
    
    
    // initialState:[],
    
    initialState:{
        user:{
            header:false,
        },
        path:false,
    
        
        
    },

    reducers:{
        adddatasignup(state,action){
            const {Fname,Lname,Emid,paswd}=action.payload;
            state.user.push(action.payload)
            
            // const indexid=(state).find(item=>item)

            // console.log(action.payload,'yespayload');
            // console.log(indexid);
            
            
            // const indexid=(state).findIndex(item=>item.id==id)
            // if(indexid>=0){
            //     state[indexid].quantity+=quantity;
            //     state[indexid].price+=price;
                
            // }
            // else{

            //     state.push(action.payload);
            // }
        },
        paths(state,action){
            const {id}=action.payload;
        },
      
      
    }
})
export const {hide,adddatasignup,paths} = auth.actions;

export default auth.reducer
