import App from "../App"
import WelcomePage from "../pages/welcome-page/welcome-page"
import TeamsPage from "../pages/team-page/teams-page"
import TeamsIndexPage from "../pages/team-page/pages/teams-index/teams-index-page"
import TeamDetailsPage from "../pages/team-page/pages/team-details/team-details-page"

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
                        element:<TeamsIndexPage/>
                    },
                    {
                        path:":id",
                        element:<TeamDetailsPage/>
                    }
                ]
            }
        ]
    }
]

export default route