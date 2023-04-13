import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.entity";

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
    @Column({name:'home_score'})
    homeScore:number
    @Column({name:'away_score'})
    awayScore:number
    @Column()
    finish:boolean
    
    @ManyToOne(()=>Team,awayTeam=>awayTeam.id)
    awayTeam: Team
    @ManyToOne(()=>Team,homeTeam=>homeTeam.id)
    homeTeam: Team
}