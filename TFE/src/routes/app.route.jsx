import App from "../App"
import WelcomePage from "../pages/welcome-page/welcome-page"
const route = [
    {
        path:'',
        element:<App/>,
        children:[
            {
                index:true,
                element:<WelcomePage/>
            }
        ]
    }
]

export default route