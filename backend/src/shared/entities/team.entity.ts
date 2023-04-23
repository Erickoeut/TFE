import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { Player } from "./player.entity";

@Entity("team")
export class Team{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'team_name'})
    teamName:string

    @Column({name:'team_logo'})
    teamLogo:string

    @Column()
    base:string

    @Column({name:'main_color'})
    mainColor:string
    
    @Column({name:'second_color'})
    secondColor:string

    @OneToMany(()=>Game,games=>games.homeTeam)
    homeGames: Game[]

    @OneToMany(()=>Game,games=>games.awayTeam)
    awayGames: Game[]

    @OneToMany(()=>Player,players=>players.team)
    players:Player[]
}