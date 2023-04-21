import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";

@Entity("season")
export class Season{
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:"nb_of_round",default:0})
    nbOfRound:number

    @Column()
    year:number

    @OneToMany(()=>Game,(game)=>game.season)
    @JoinColumn()
    games : Game[]
}
