import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
    @Column()
    home_team_id:number
    @Column()
    away_team_id:number
    @Column()
    home_score:number
    @Column()
    away_score:number
    @Column()
    finish:boolean
}