'use client'
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/UserContext';

export default function SignUpPage() {
  const router = useRouter()
  const { signup } = useAuth();
  const [signupError, setSignupError] = useState<string | null>(null);


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try{
      const errorMessage = await signup(email, password)
      
      if (errorMessage === null) {
        router.push('/auth/whoami')
      }
      else {
        console.log('Signup failed with message:', errorMessage);
        setSignupError(errorMessage);
      }
    } catch (error) {
      console.error('Signup error: ', error);
      setSignupError('An error occurred during signup. Please try again.');
    }
  }

  return (
    <div className="w-min">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input className="m-4 p-2 border-2 border-gray-300" type="email" name="email" placeholder="Email here" required />
        <input className="m-4 p-2 border-2 border-gray-300" type="password" name="password" placeholder="Password here" autoComplete='true'required />
        <button className="m-4 p-2 rounded-lg bg-blue-100 hover:bg-blue-200" type="submit">
          Sign Up</button>
        {signupError && <p className="text-red-500">{signupError}</p>}
      </form>
    </div>
    
  )
}
