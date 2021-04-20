import {SET_VALUE, FLG_SWAP, SET_ID} from "../actions";
import {combineReducers} from "redux";

const counterInitialState={
    value:0,
    id:"",
    logFlg:false
};
const counter = (state = counterInitialState, action) => {
    switch(action.type){
        case SET_VALUE:
            return Object.assign({},state,{
                value:action.value
            });
        case FLG_SWAP:
            return Object.assign({},state,{
                logFlg: action.flg
            });
        case SET_ID:
            return Object.assign({},state,{
               id:action.id
            });
        default:
            return state;
    }
};
const extra=(state={value:'this_is_extra_reducer'},action)=>{
    switch (action.type){
        default:
            return state;
    }
}
const counterApp=combineReducers({
    counter,
    extra
});
export default counterApp;