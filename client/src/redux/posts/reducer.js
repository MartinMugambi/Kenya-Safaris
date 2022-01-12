import { FETCH_DATA, ERROR } from "./types";

//Our Redux Store
const initialState = {
    loading: true,
    data: [],
    error: false,
}


//reducer to dispathc aour actions
const dataReducer = (state =initialState, action)=>{
     switch(action.type){
        case FETCH_DATA:
         return {
          ...state,
           laoding: state.loading= false,
            data: state.data = action.payload,
            error: state.error = false,
         } 
         case ERROR:
         return {
          ...state,
           laoding: state.loading= false,
            data: state.data = [],
            error: state.error = action.payload,
         }

         default: return state;
     }
}

export default  dataReducer;