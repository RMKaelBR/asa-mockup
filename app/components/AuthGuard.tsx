'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../contexts/UserContext';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {{
    if (!user) {
      router.push('/auth/login'); // to login page
    }
  }}, [user, router]);

  if (!user) {
    return null; // chat recommends a loading spinner or a "restricted access" message
  }

  return <>{children}</>
}

export default AuthGuard