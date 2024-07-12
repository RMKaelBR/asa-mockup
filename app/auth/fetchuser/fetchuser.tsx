'use client'
import { FormEvent } from 'react';
import { useAuth } from '@/app/contexts/UserContext';

export default function FetchUserPage() {
  const {fetchUser} = useAuth();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const id = formData.get('user_id')
    if (typeof(id)==='string') {
      fetchUser(id)
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
