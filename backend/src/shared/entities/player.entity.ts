import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.entity";
import { Game } from "./game.entity";

@Entity("player")
export class Player{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'first_name'})
    firstName:string;

    @Column({name:'last_name'})
    lastName:string;
    
    @Column()
    age:number;
    
    @Column()
    gender:string;
    
    @Column()
    position:string;

    @ManyToOne(()=>Team,team=>team.id)
    team: Team

    @ManyToMany(()=>Game,game=>game.players)
    games:Game[]
}