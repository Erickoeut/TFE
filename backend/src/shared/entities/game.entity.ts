import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.entity";
import { Season } from "./season.entity";
import { Player } from "./player.entity";

@Entity("game")
export class Game{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    round:number

    @Column()
    location:string

    @Column({default:"championship"})
    type:string

    @Column()
    date:Date

    @Column({name:'home_score',nullable:true})
    homeScore:number

    @Column({name:'away_score',nullable:true})
    awayScore:number

    @Column({default:false})
    finish:boolean
    
    @ManyToOne(()=>Team,awayTeam=>awayTeam.id)
    @JoinColumn({name:'away_team_id'})
    awayTeam: Team

    @ManyToOne(()=>Team,homeTeam=>homeTeam.id)
    @JoinColumn({name:'home_team_id'})
    homeTeam: Team
    
    @ManyToOne(()=>Season,season=>season.id)
    @JoinColumn({name:'season_id'})
    season:Season

    @ManyToMany(()=>Player,player=>player.homeGames)
    @JoinTable()
    homePlayers:Player[]

    @ManyToMany(()=>Player,player=>player.awayGames)
    @JoinTable()
    awayPlayers:Player[]
}