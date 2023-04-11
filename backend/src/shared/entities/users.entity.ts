import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:"user_name"})
    userName
}