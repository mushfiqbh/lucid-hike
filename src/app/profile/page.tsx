"use client"

import { useAuthContext } from '@/context/AuthContext'
import React from 'react'

const Page = () => {
    const {authUser } = useAuthContext();

  return (
    <div>
      {authUser.name}
    </div>
  )
}

export default Page
