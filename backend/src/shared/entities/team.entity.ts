import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("team")
export class TeamEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    team_name:string

    @Column()
    team_logo:string
}