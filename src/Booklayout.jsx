import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Booklayout() {
  return (
    <div>
        <Link to="/book/1">Book 1</Link>
        <br />
        <Link to="/book/2">Book 2</Link> 
        <br />
        <Link to="/books/new">New Book</Link>
        <Outlet/>
    </div>
  )
}
