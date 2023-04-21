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
    localisation:string
    @Column()
    type:string
    @Column()
    date:Date
    @Column({name:'home_score',nullable:true})
    homeScore:number
    @Column({name:'away_score',nullable:true})
    awayScore:number
    @Column()
    finish:boolean
    
    @ManyToOne(()=>Team,awayTeam=>awayTeam.id)
    @JoinColumn()
    awayTeam: Team
    @ManyToOne(()=>Team,homeTeam=>homeTeam.id)
    @JoinColumn()
    homeTeam: Team
    
    @ManyToOne(()=>Season,season=>season.id)
    @JoinColumn()
    season:Season

    @ManyToMany(()=>Player,player=>player.games)
    @JoinTable()
    players:Player[]
}