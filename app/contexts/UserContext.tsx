'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/types'

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('http://localhost:3000/auth/whoami', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          console.log('User fetched: ', userData);
        }
      } catch (error) {
        console.error('Error fetching user information: ', error);
      }
    }

    fetchUser();
  }, []);

  const login = async ( email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (response.ok) {
        const userData: User = await response.json();
        setUser(userData);
        console.log('User logged in with userData: ', userData);
        return null;
      } else {
        const errorData = await response.json();
        console.log('Login failed. ', errorData.message);
        return errorData.message;
      }
    } catch (error) {
      console.error('Error during login with error: ', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/signout', {
        method: 'POST',
        credentials: 'include',
      })

      if (response.ok) {
        setUser(null);
        console.log('User logged out');
      } else {
        console.log('Logout failed');
      } 
    } catch (error) {
      console.error('Error during logout with error: ', error);
    }
  } 

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context.user;
}

export function useAuth() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a UserProvider');
  }
  return { login: context.login, logout: context.logout }
}