import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.entity";

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
}