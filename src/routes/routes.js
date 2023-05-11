
import Home from "../pages/Home/Home"
import Quiz from "../pages/Home/Quiz"
import Test from "../pages/Home/Test"
import Three from "../pages/Home/Three"
import LogIn from "../pages/Login/LogIn"

const routes = [
    {path: '/home', element: <Home />},
    {path: '/', element: <LogIn />},
    {path: '/quiz', element: <Quiz />},
    {path: '/test', element: <Test />},
    {path: '/three', element: <Three />},
    ]

export default routes