import { MaxLength, IsNotEmpty} from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Categoria } from "src/categoria/entities/categoria.entity";


@Entity({name: "tb_produtos"})
export class Produtos{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length: 1000, nullable: false})
    jogosplaystation: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length: 1000, nullable: false})
    jogosexbox: string


    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length:1000, nullable: false})
    consolesplaystation: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length:1000, nullable: false})
    consolesexbox: string


    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length:1000, nullable: false})
    acessoriosplaystation: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({length:1000, nullable: false})
    acessoriosexbox: string

    @OneToMany(() => Categoria,(Categoria) => Categoria.produtos)
    produtos:Produtos[]
    static id: any;
    
}
