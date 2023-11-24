import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/sing'>Singers</Link>
        <Link to='/alb'>Albums</Link>
      </nav>
    </div>
  )
}