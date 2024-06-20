'use client'
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/UserContext';

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const success = await login(email, password);
      success ? router.push('/auth/whoami') : console.log('Login failed, staying on the login page.');
    } 
    catch (error) {
      console.error('Login error: ', error);
    }
  }

  return (
    <div className="w-min">
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <input className="m-4 p-2 border-2 border-gray-300" type="email" name="email" placeholder="Email here" required />
        <input className="m-4 p-2 border-2 border-gray-300" type="password" name="password" placeholder="Password here" autoComplete='true'required />
        <button className="m-4 p-2 rounded-lg bg-blue-100 hover:bg-blue-200" type="submit">Login</button>
      </form>
    </div>
  )
}


// try{
    //   const response = await fetch('http://localhost:3000/auth/signin', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    //   credentials: 'include',
    //   })
    //   if (response.ok) {
    //     console.log(`yo, response was good.`);
    //     console.log(response);
    //   }
    //   else {
    //     console.log(`Response wasn't okay. ;`)
    //     console.log(`${email} ${password}`)
    //     console.log(response)
    //   }
    // } catch (error) {
    //   console.log("what was that?", error)
    // }