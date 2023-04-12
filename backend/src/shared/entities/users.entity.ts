import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:"username"})
    username:string

    @Column()
    password:string

    @Column()
    role:string
}