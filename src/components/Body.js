import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const Body = () => {
    
    const appRouter = createBrowserRouter([
        {path:'/', element:<Login/>},
        {path:'/browse', element:<Browse/>}
    ])
    
    
    
    return (
        <div>
            {/* <Login/>
            <Browse/> */}
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body
