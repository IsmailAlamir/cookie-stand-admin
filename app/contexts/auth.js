'use client';

import { createContext, useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios';

export const AuthContext = createContext();


export function AuthWrapper({children}) {

    const [globalState, setGlobalState] = useState({
        tokens: null,
        login
    })

    async function login(userInfo) {
        const url = "https://cookie-stands-ia.herokuapp.com/api/token/"
        const res = await axios.post(url, userInfo);
        setGlobalState({
            tokens: res.data,
            login
        })
    }
    return (
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}
