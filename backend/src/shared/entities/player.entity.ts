import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("team")
export class TeamEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    first_name:string

    @Column()
    last_name:string
    
    @Column()
    age:number
    
    @Column()
    gender:string
    
    @Column()
    team_id:number
    
    @Column()
    position:string
}