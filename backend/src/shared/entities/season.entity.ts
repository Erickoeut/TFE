import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";

@Entity()
export class Season{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nbOfRound:number

    @Column()
    year:number

}