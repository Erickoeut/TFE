import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    username:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    role:string

    @Column({name:"team_id"})
    teamId:number
}