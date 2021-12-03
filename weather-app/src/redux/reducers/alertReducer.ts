import { AlertState } from "../store/types";

const initialState: AlertState = {
    message: "",
    // type: "",
    // show: false
}


export const alertReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_ALERT":
            return {
                ...state,
                message: action.payload
            }
        case "CLEAR_ALERT":
            return {
                ...state,
                message: ""
            }
        default:
            return state;
    }
}