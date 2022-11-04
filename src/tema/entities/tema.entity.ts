import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: "tb_tema"})
export class Tema {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty()
    id: number

    @IsNotEmpty()
        @MaxLength(100)
        @Column({length: 100, nullable: false})
        @ApiProperty()
        categoria: string

        @IsNotEmpty()
        @MaxLength(100)
        @Column({length: 100, nullable: false})
        @ApiProperty()
        titulo: string

    

    @ApiProperty({type: ()=> Postagem})
    @OneToMany(() => Postagem,(postagem)=> postagem.tema)
    postagem: Postagem[]
    
    
    
}