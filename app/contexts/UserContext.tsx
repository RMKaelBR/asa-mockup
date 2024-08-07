'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/types'

const urlAddress = process.env.NEXT_PUBLIC_API_URL;
// const urlAddress = "https://asa-mockup-auth.onrender.com/";
// const urlAddress = "http://localhost:3000/";
console.log(urlAddress)

interface UserContextType {
  user: User | null;
  signup: (email: string, password: string) => Promise<string | null>;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
  whoami: () => void;
  fetchUser: (id: string) => void;
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
        const response = await fetch(urlAddress + 'auth/whoami', {
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

  const signup = async ( email: string, password: string ) => {
    try{
      const response = await fetch(urlAddress + 'auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      if (response.ok) {
        console.log(`yo, response was good.`);
        console.log(response);
        return null;
      }
      else {
        console.log(response);
        const errorData = await response.json();
        console.log('Login failed. ', errorData.message);
        return errorData.message;
        
      }
    } catch (error) {
      console.log("what was that?", error)
    }
  }

  const login = async ( email: string, password: string) => {
    try {
      const response = await fetch(urlAddress + 'auth/signin', {
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
      const response = await fetch(urlAddress + 'auth/signout', {
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

  const whoami = async () => {
    try{
      const response = await fetch(urlAddress + 'auth/whoami', {
      method: 'GET',
      credentials: 'include'
    })
      if (response.ok) {
        console.log(response);
        console.log(response.body);
        const userData = await response.json();
        console.log('User data:', userData);
      }
      else {
        console.log(`Response wasn't okay.`)
        console.log(response)
      }
    } catch (error) {
      console.log("what was that?", error)
    }
  }

  const fetchUser = async (id: string) => {
    try {
      const response = await fetch(urlAddress + `auth/${id}`, {
        method: 'GET',
        credentials: 'include'
      })
      if (response.ok) {
        console.log(response);
        const userData = await response.json();
        console.log('User data:', userData);
      }
      else {
        console.log(response)
        const jsonResponse = await response.json();
        console.log(jsonResponse)
      }
    }
    catch (error) {
      console.log ("Error fetching user: ", error);
    }
  }

  return (
    <UserContext.Provider value={{user, signup, login, logout, whoami, fetchUser}}>
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
  return { 
    signup: context.signup, 
    login: context.login, 
    logout: context.logout, 
    whoami: context.whoami,
    fetchUser: context.fetchUser
  }
}