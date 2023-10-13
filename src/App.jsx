import React from 'react'
import {RouterProvider, createHashRouter} from 'react-router-dom'
import Layout from '../src/components/Layout/Layout'
import Home from '../src/components/Home/Home'
import Portfolio from '../src/components/Portfolio/Portfolio'
import About from '../src/components/About/About'
import Skills from '../src/components/Skills/Skills'
import Education from '../src/components/Education/Education'
import Contact from '../src/components/Contact/Contact'
import List from '../src/components/List/List'
import Notfound from '../src/components/Notfound/Notfound'

const router = createHashRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'about',element:<About/>},
    {path:'skills',element:<Skills/>},
    {path:'education',element:<Education/>},
    {path:'contact',element:<Contact/>},
    {path:'list',element:<List/>},
    {path:'*',element:<Notfound/>},
  ]}
])

export default function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
