import React from 'react'
import Login from './Login'
import BrowsePage from './BrowsePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browser",
            element: <BrowsePage/>,
        },
    ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body