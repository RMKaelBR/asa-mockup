'use client'
import { FormEvent } from 'react';

export default function FetchUserPage() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const id = formData.get('user_id')

    try{
      const response = await fetch(`http://localhost:3000/auth/${id}`, {
      method: 'GET',
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
    } catch (error) {
      console.log("what was that?", error)
    }
  }

  return (
    <div className="w-min">
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <input className="m-4 p-2 max-w-min border-2 border-gray-300" type="user_id" name="user_id" placeholder="user id" required />
        <button className="m-4 p-2 rounded-lg bg-blue-100 hover:bg-blue-200" type="submit">Fetch</button>
      </form>
    </div>
  )
}
