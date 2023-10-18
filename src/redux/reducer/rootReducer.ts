import {userReducer} from "./userReducer";

const rootReducer = () => {
    return {
        user: userReducer,
    }
}

export default rootReducer;