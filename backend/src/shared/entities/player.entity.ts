import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeamEntity } from "./team.entity";

@Entity("player")
export class PlayerEntity{
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

    @ManyToOne(()=>TeamEntity,team=>team.id)
    team: TeamEntity
}