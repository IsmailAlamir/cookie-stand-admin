"use client";
import { Inter } from '@next/font/google'
import { useContext } from 'react';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import { AuthContext } from './contexts/auth';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens}=useContext(AuthContext)
  return (
    <>
    {tokens? <Main/> : <LoginForm/> }
    </>
  )
}
