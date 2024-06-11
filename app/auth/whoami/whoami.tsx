'use client'
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function WhoAmIPage() {
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    try{
      const response = await fetch('http://localhost:3000/auth/1', {
      method: 'GET'
    })
      if (response.ok) {
        router.push('/profile')
      }
      else {
        console.log(`Response wasn't okay.`)
        console.log(response)
      }
    } catch (error) {
      console.log("what was that?", error)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="m-4 p-2 rounded-lg bg-blue-100 hover:bg-blue-200" type="submit">Fetch</button>
    </form>

  )
}
