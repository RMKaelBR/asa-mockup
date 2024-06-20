'use client'
import { FormEvent } from 'react';

export default function WhoAmIPage() {

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try{
      const response = await fetch('http://localhost:3000/auth/whoami', {
      method: 'GET',
      credentials: 'include'
    })
      if (response.ok) {
        console.log(`yo, response was good.`);
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

  return (
    <form onSubmit={handleSubmit}>
      <button className="m-4 p-2 rounded-lg bg-blue-100 hover:bg-blue-200" type="submit">
        Who!?</button>
    </form>

  )
}
