import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GameEntity } from "./game.entity";
import { PlayerEntity } from "./player.entity";

@Entity("team")
export class TeamEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'team_name'})
    teamName:string

    @Column({name:'team_logo'})
    teamLogo:string

    @OneToMany(()=>GameEntity,games=>games.homeTeam)
    homeGames: GameEntity[]

    @OneToMany(()=>GameEntity,games=>games.awayTeam)
    awayGames: GameEntity[]

    @OneToMany(()=>PlayerEntity,players=>players.team)
    players:PlayerEntity[]
}