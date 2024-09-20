import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const state = {
        user: {
            user,
            setUser
        },
        products: {
            items: [],
            item: []
        }
    }
    
    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}