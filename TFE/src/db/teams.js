const teams = [
    {
        id:1,
        name:"BBRFC Celtics",
        logo:"https://admin.touch-belgium.be/media/team_logos/bbrfcceltic_logo.png"
    },
    {
        id:2,
        name:"Boitsfort RC",
        logo:"https://admin.touch-belgium.be/media/team_logos/boitsfort_logo.jpg"
    },
    {
        id:3,
        name:"Brussels citizens",
        logo:"https://admin.touch-belgium.be/media/team_logos/citizens_logo.jpg"
    },
    {
        id:4,
        name:"BUC St Josse",
        logo:"https://admin.touch-belgium.be/media/team_logos/buc_logo.png"
    },
    {
        id:5,
        name:"Gent Rugby",
        logo:"https://admin.touch-belgium.be/media/team_logos/gent_logo.png"
    },
    {
        id:6,
        name:"Kituro Rugby",
        logo:"https://admin.touch-belgium.be/media/team_logos/kituro_logo.jpg"
    },
    {
        id:7,
        name:"RC La Hulpe",
        logo:"https://admin.touch-belgium.be/media/team_logos/rclhlogo.jpg"
    },
    {
        id:8,
        name:"Oudenaarde Rhinos",
        logo:"https://admin.touch-belgium.be/media/team_logos/rhinos_logo.jpeg"
    }
]

export const getAllTeams = ()=>{
    return structuredClone(teams)
}

export const getOneteam = (id)=>{
    const allteams = structuredClone(teams)
    return allteams.filter(team => team.id == id)
}