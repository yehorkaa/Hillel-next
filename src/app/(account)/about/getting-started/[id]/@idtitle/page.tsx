'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const IdTitle = () => {
  return (
    <span style={{ whiteSpace: 'nowrap' }}>{useParams().id}</span>
  )
}

export default IdTitle;