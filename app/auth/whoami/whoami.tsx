'use client'
import { FormEvent } from 'react';
import { useAuth } from '@/app/contexts/UserContext';

export default function WhoAmIPage() {
  const {whoami} = useAuth();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    whoami();
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="m-4 p-2 rounded-lg bg-blue-100 hover:bg-blue-200" type="submit">
        Who!?</button>
    </form>

  )
}
