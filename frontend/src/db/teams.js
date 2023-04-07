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
    },
    {
        id:9,
        name:"RC Luxembourg",
        logo:"https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/245063994_336190174896226_953551128149855540_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Okb0st_lMqQAX8SDgHr&_nc_ht=scontent-bru2-1.xx&oh=00_AfAhQzreptzwQh3egaOZbFuHSepRQfNZcUXp0LNL7xQkSA&oe=6432BFCE"
    },
    {
        id:10,
        name:"RFC Liège",
        logo:"https://admin.touch-belgium.be/media/team_logos/liege.jpg"
    }
]

export const getAllTeams = ()=>{
    return structuredClone(teams)
}

export const getOneteam = (id)=>{
    const allteams = structuredClone(teams)
    return allteams.find(team => team.id == id)
}