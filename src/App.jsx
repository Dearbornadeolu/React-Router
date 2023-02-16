import { useState } from 'react'
import './App.css'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Pages/Home'
import Booklist from './Booklist'
import Book from './Pages/Book'
import Newbook from './Pages/Newbook'
import NotFound from './Pages/NotFound'
import Booklayout from './Booklayout'

function App() {

  let element = useRoutes([
        {
          path: "/",
          element: <Home/>
        },{
          path: "*",
          element: <NotFound/>
        },{
          path: "/booklist",
          element: <Booklist/>
        },{
          path: "/books",
          element: <Book/>
        }
      ])

  return (
    
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {element}
      {/* <Routes className="App">
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Booklayout/>}>
          <Route index element={<Booklist/>}/>
          <Route path=':id' element={<Book/>}/>
          <Route path='new' element={<Newbook/>}/>
        </Route>
        {/* <Route path='/books' element={<Booklist />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<Newbook/>}/> */}
        {/* <Route path='*' element={<NotFound/>}/>
      </Routes> */} 
    </>
  )
}

export default App
