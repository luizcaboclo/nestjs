import { IsNotEmpty, MaxLength } from "class-validator"
import { Produtos } from "src/produtos/entities/produtos.entity"
import { Column, Entity, UpdateDateColumn, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm"



@Entity({name: "tb_categoria"})
    export class Categoria{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 100, nullable: false})
    name: string


    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length:1000, nullable: false})
    lancamento: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length: 1000, nullable: false})
    genero: string

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable: false})
    plataforma: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length:1000, nullable: false})
    idiomas: string


    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 100, nullable: false})
    desenvolvedor: string

    @UpdateDateColumn()
    data: Date

    @ManyToOne(() => Produtos, (Produtos) => Produtos.id,{
      onDelete: "CASCADE"  
    
    })
    
    produtos: Produtos

}




