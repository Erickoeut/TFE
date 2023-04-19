import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";

@Entity("season")
export class Season{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nbOfRound:number

    @Column()
    year:number

    @OneToMany(()=>Game,(game)=>game.season)
    games : Game[]
}
