import App from "../App"
import WelcomePage from "../pages/welcome-page/welcome-page"
import TeamsPage from "../pages/team-page/teams-page"
import TeamsIndexPage from "../pages/team-page/pages/teams-index/teams-index-page"
import TeamDetailsPage from "../pages/team-page/pages/team-details/team-details-page"
import RankingPage from "../pages/ranking-page/ranking-page"
import AboutPage from "../pages/about-page/about-page"
import ResultsPage from "../pages/results-page/results-page"
import ResultIndexPage from "../pages/results-page/pages/results-index-page/results-index-page"
import ResultDetailsPage from "../pages/results-page/pages/results-details-page/results-details-page"
import LoginPage from "../pages/login-page/login-page"
import GameSheetIndexPage from "../pages/admin-pages/game-sheet-page/pages/game-sheet-index-page/game-sheet-index-page"
import GameSheetPage from "../pages/admin-pages/game-sheet-page/game-sheet-page"
import CreateGamePage from "../pages/admin-pages/create-game-page/create-game-page"
import PlayerPage from "../pages/players/players-page"
import GameSheetUpdatePage from "../pages/admin-pages/game-sheet-page/pages/game-sheet-update-page/game-sheet-update-page"
import AdminPage from "../pages/admin-pages/admin-page"
import ResultUpdatePage from "../pages/admin-pages/result-update-page/result-update-page"
import ResultUpdateIndexPage from "../pages/admin-pages/result-update-page/pages/result-update-index-page/result-update-index-page"
import ResultUpdateDetailsPage from "../pages/admin-pages/result-update-page/pages/result-update-details-page/result-update-details-page"
import PlayerIndexPage from "../pages/players/pages/players-index-page/players-index-page"
import PlayerDetailPage from "../pages/players/pages/players-details-page/players-details-page"
import About0Page from "../pages/about-page/pages/about-0-page/about-0-page"
import About1Page from "../pages/about-page/pages/about-1-page/about-1-page"
import About3Page from "../pages/about-page/pages/about-3-page/about-3-page"
import About2Page from "../pages/about-page/pages/about-2-page/about-2-page"
import About4Page from "../pages/about-page/pages/about-4-page/about-4-page"
import About5Page from "../pages/about-page/pages/about-5-page/about-5-page"
import About6Page from "../pages/about-page/pages/about-6-page/about-6-page"
import About7Page from "../pages/about-page/pages/about-7-page/about-7-page"
import About8Page from "../pages/about-page/pages/about-8-page/about-8-page"





const route = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <WelcomePage />
            },
            {
                path: "/ranking",
                element: <RankingPage />
            },
            {
                path: "/results",
                element: <ResultsPage />,
                children: [
                    {
                        index: true,
                        element: <ResultIndexPage />
                    },
                    {
                        path: ":gameId",
                        element: <ResultDetailsPage />
                    }
                ]
            },
            {
                path: "/teams",
                element: <TeamsPage />,
                children: [
                    {
                        index: true,
                        element: <TeamsIndexPage />
                    },
                    {
                        path: ":id",
                        element: <TeamDetailsPage />
                    }
                ]
            },
            {
                path: "about",
                element: <AboutPage />,
                children:[
                    {
                        index:true,
                        element:<About0Page/>
                    },
                    {
                        path:'1',
                        element:<About1Page/>
                    },
                    {
                        path:'2',
                        element:<About2Page/>
                        
                    },
                    {
                        path:'3',
                        element:<About3Page/>
                    },
                    {
                        path:'4',
                        element:<About4Page/>
                    },
                    {
                        path:'5',
                        element:<About5Page/>
                    },
                    {
                        path:'6',
                        element:<About6Page/>
                    },
                    {
                        path:'7',
                        element:<About7Page/>
                    },
                    {
                        path:'8',
                        element:<About8Page/>
                    }
                ]
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: 'admin',
                element: <AdminPage />,
                children: [
                    {
                        path: "create-game",
                        element: <CreateGamePage />
                    },
                    {
                        path: "update-result",
                        element: <ResultUpdatePage/>,
                        children:[
                            {
                                index:true,
                                element:<ResultUpdateIndexPage/>
                            },
                            {
                                path:':id',
                                element:<ResultUpdateDetailsPage/>
                            }
                        ]
                    },
                    {
                        path: "game-sheet",
                        element: <GameSheetPage />,
                        children: [
                            {
                                index: true,
                                element: <GameSheetIndexPage />
                            },
                            {
                                path: ":id",
                                element: <GameSheetUpdatePage />,
                                
                            }
                        ]
                    },
                ]
            },

            {
                path: "players",
                element: <PlayerPage />,
                children:[
                    {
                        index:true,
                        element:<PlayerIndexPage/>
                    },
                    {
                        path:":id",
                        element:<PlayerDetailPage/>
                    }
                ]
            }
        ]
    }
]

export default route