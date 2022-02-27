// AUTH CONTEXT
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";


const INTIAL_STATE = {
    user: {
        _id: "6216109851f568608dd6d761",
        username: "nabil",
        email: "nk@nk.com",
        profilePicture: "drake_pf.jpeg",
        coverPicture: "post/8.jpeg",
        isAdmin: false,
        followers: [],
        followings: [],
    },
    isFetching: false,
    error: false,
}

export const AuthContext = createContext(INTIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE)

    return (
        <AuthContext.Provider 
        value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
            }}>
                {children}
            </AuthContext.Provider>
    )
}