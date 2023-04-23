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
                element: <AboutPage />
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
                        element: <ResultUpdatePage/>
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
                element: <PlayerPage />
            }
        ]
    }
]

export default route