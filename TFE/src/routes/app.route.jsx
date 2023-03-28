import App from "../App"
import TeamDetails from "../pages/team-page/pages/team-details/team-details"
import TeamsIndex from "../pages/team-page/pages/teams-index/teams-index"
import TeamsPage from "../pages/team-page/teams-page"

import WelcomePage from "../pages/welcome-page/welcome-page"
const route = [
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<WelcomePage/>
            },
            {
                path:"/teams",
                element:<TeamsPage/>,
                children:[
                    {
                        index:true,
                        element:<TeamsIndex/>
                    },
                    {
                        path:":id",
                        element:<TeamDetails/>
                    }
                ]
            }
        ]
    }
]

export default route