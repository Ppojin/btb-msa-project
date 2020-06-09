//import @material-ui/icons

//import  corecomponent/views for Main layout
import Login from '../components/main/login/Login.js'
import Signup from '../components/main/signup/SignUp.js'
import Mainpage from '../components/utils/Card/OutlinedCard.js'

const mainRoutes = [
    {
        path: "/login",
        name: "login",
        component : Login,
        layout:"/main"
    },
    {
        path: "/signup",
        name: "signup",
        component : Signup,
        layout: "/main"
    },
    {
        path: "/home",
        name: "home",
        component : Mainpage,
        layout: "/main"
    }
];

export default mainRoutes;