'use client'
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try{
      const response = await fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      if (response.ok) {
        router.push('/profile')
      }
      else {
        console.log(`Response wasn't okay. ;`)
        console.log(`${email} ${password}`)
        console.log(response)
      }
    } catch (error) {
      console.log("what was that?", error)
    }

    // if (response.ok) {
    //   router.push('/profile')
    // } else {
    //   // Handle errors here? I don't know what to yet.
    // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="m-4 p-2 border-2 border-gray-300" type="email" name="email" placeholder="Email here" required />
      <input className="m-4 p-2 border-2 border-gray-300" type="password" name="password" placeholder="Password here" autoComplete='true'required />
      <button className="m-4 p-2 rounded-lg bg-blue-100 hover:bg-blue-200" type="submit">Login</button>
    </form>
  )
}
