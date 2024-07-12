'use client'
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/auth/verify', {
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(response => setUser(response.data.user))
      .catch(() => {
        localStorage.removeItem('token');
        setUser(null)
      });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/signin', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      router.push('/')
    } catch (error) {
      console.error("Login failed, ", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
