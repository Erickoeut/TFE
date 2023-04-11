import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { TeamEntity } from "./team.entity";

@Entity("game")
export class GameEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    round:number
    @Column()
    localisation:string
    @Column()
    type:string
    @Column()
    date:string
    @Column({name:'home_score'})
    homeScore:number
    @Column({name:'away_score'})
    awayScore:number
    @Column()
    finish:boolean
    
    @ManyToOne(()=>TeamEntity,awayTeam=>awayTeam.id)
    awayTeam: TeamEntity
    @ManyToOne(()=>TeamEntity,homeTeam=>homeTeam.id)
    homeTeam: TeamEntity
}