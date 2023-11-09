"use client"
import React from 'react'
import {  signIn } from 'next-auth/react'
import { useRef } from 'react'

export default function Page() {

  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleLogin = () => {
    signIn("credentials" , {
      username: username.current?.value,
      password: password.current?.value,
      redirect: true,
      callbackUrl: '/',
    })
  }

  return (
    <>
      <h1>Login</h1>
      <label>
        Username
        <input type="text" name='username' ref={username}/>
      </label>
      <label>
        Password
        <input type="password"  name='password' ref={password}/>
        <button type='button' onClick={handleLogin}>Login</button>
      </label>
    </>
  )
}
