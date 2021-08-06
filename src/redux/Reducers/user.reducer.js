import { GET_ALL_USER } from "../type/user.type";

export default function (state={all:[]},action){
    switch (action.type) {
        case GET_ALL_USER:
            return {...state,all:action.payload}
        default:
            return state;
    }
}