import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Season{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nbOfGame:number
}