import { ReactNode } from 'react';
// import './authLayout.css'

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex w-full h-screen bg-gray-200 justify-center">
      <div className="flex justify-center h-min w-1/2 mt-20 p-10 shadow-2xl bg-white">
        {children}
      </div>
    </div>
  )
}