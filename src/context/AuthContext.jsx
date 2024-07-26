import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://api-4-ai9l.onrender.com/api/auth/user',{credentials:'include'}); // Supongamos que tienes un endpoint para obtener los datos del usuario.
                const data = await response.json();
                
                setUser(data.user)
                
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
        
    }, []);

    const logout = async () => {
        try {
            const response = await fetch('https://api-4-ai9l.onrender.com/api/auth/logout', {
                method: 'POST', // Asegúrate de usar el método correcto
                credentials: 'include' // Incluye cookies en la solicitud
            });

            console.log(response)
    
            if (response.status == 200) {
                // Redirige al usuario a la página principal
                window.location.href = "/";
            } else {
                console.error('Logout failed:', await response.json());
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };


    const login = async (datos) => {
        
        try {

            const res = await axios.post('https://api-4-ai9l.onrender.com/api/auth/login', datos, { withCredentials: true })


            if (res.status !== 200) return { error: true, msg: res.data.msg };

            setUser(res.data.user);
            return { error: false, msg: res.data.msg, user: res.data.user };

        } catch (error) {


            return { error: true, msg: "Error on login " }

        }

    }



    return (
        <AuthContext.Provider value={{ user, loading , login , logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
