import Home from "./component/home/home"
import Login from "./component/login"

const publicRoutes=[
  {
    path:'/login',
    component:<Login/>
  }
]

const privateRoute=[
    {
        path:'/',
        component:<Home/>
    }
]

export {
    publicRoutes,
    privateRoute
}
