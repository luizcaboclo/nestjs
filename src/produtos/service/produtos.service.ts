import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produtos } from "../entities/produtos.entity";

@Injectable()
export class ProdutosService {
    Repository: any;
    
    constructor(
        @InjectRepository(Produtos)
            @InjectRepository(Produtos)
            private produtosrepository: Repository<Produtos>
    ) {}
    

    async findAll(): Promise<Produtos[]> {
        return await this.produtosrepository.find();
    }

    async findById(id: number):Promise<Produtos> {

            let produtos = await this.produtosrepository.findOne({
                where: { 
                    id
                }
            })

        if (!Produtos)
            throw new HttpException('produto não existe', HttpStatus.NOT_FOUND)

        return produtos
    }
    async findByConsolePlaystation(consolesplaystation: string): Promise<Produtos[]> {
        return await this.produtosrepository.find({
            where: {
                consolesplaystation: ILike(`%${consolesplaystation}%`)
            }
        })
    }

    async create(produtos: Produtos): Promise<Produtos>{
        return await this.produtosrepository.save(produtos)
    }

    async update(produtos: Produtos): Promise<Produtos>{
        let buscarProdutos = await this.findById(produtos.id)
    
        if(!buscarProdutos || !produtos.id)
            throw new HttpException('O produto não existe', HttpStatus.NOT_FOUND)

            return await this.produtosrepository.save(produtos)
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscarProdutos = await this.findById(id)

        if(!buscarProdutos)
            throw new HttpException('produto não encontrado', HttpStatus.NOT_FOUND)

            return await this.produtosrepository.delete(id)
    }

}