import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";


@Entity({name: "tb_postagens"})
export class Postagem {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false})
    @ApiProperty()
    descricao: string

    @ApiProperty({type: ()=> Tema})
    @ManyToOne(() => Tema,(tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema:Tema

    @ApiProperty({type: ()=> Usuario})
    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem,{
        onDelete: 'CASCADE'
    })
    usuario: Usuario
    
    
}