import {GET_ALL_USER_URL}from '../../constant/contant'
import { GET_ALL_USER } from '../type/user.type';
export function getAllUsers() {
    return async (dispatch) => {
        try {
            const response = await fetch(GET_ALL_USER_URL);
            const actualUser = await response.json();
            dispatch(loadUserData(actualUser));
        } catch (error) {
            console.error(error)
        }        
    };
}
function loadUserData (users){
    return{type:GET_ALL_USER,payload:users}

}
