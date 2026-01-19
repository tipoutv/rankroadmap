'use client'

import { useState } from 'react'
import { supabase } from '../../src/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const login = async () => {
    setMsg('')
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) setMsg(error.message)
    else setMsg('Vérifie tes emails 📩')
  }

  return (
    <>
      <h1>Connexion</h1>

      <input
        type="email"
        placeholder="email@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 8, marginRight: 8 }}
      />

      <button onClick={login}>Se connecter</button>

      {msg && <p>{msg}</p>}
    </>
  )
}
