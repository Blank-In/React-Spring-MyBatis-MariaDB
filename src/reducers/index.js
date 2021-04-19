import {SET_VALUE} from "../actions";
import {combineReducers} from "redux";

const counterInitialState={
    value:0
};
const counter = (state = counterInitialState, action) => {
    switch(action.type){
        case SET_VALUE:
            return Object.assign({},state,{
                value:action.value
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