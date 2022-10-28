import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm"
import { Categoria } from "../entities/categoria.entity";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private CategoriaRepository : Repository<Categoria>
    ) {}
    async findAll(): Promise<Categoria[]> {
        return await this.CategoriaRepository.find();
    }
    async findByid(id: number): Promise<Categoria> {
        
        let Categoria = await this.CategoriaRepository.findOne({
            where: {
                id
            }
        })
        if(!Categoria)
        throw new HttpException('categoria não existe',HttpStatus.NOT_FOUND)
        return Categoria
    }
    async findByname(name: string): Promise<Categoria[]>{
        return await this.CategoriaRepository.find({
            where: {
                name: Ilike(`%${name}%`)
            }
        })
    }
    async Create (Categoria: Categoria): Promise<Categoria>{
        return await this.CategoriaRepository.save(Categoria)
    }
    async Update(Categoria : Categoria): Promise<Categoria>{
        let buscarCategoria = await this.findByid(Categoria.id)
        if(!buscarCategoria || !Categoria.id)
        throw new HttpException('categoria não existe',HttpStatus.NOT_FOUND)
        return await this.CategoriaRepository.save(Categoria)

    }
    async Delete(id: number): Promise<DeleteResult> {
        let buscarCategoria = await this.findByid(id)
        if(!buscarCategoria) throw new HttpException('categoria não encontrada',HttpStatus.NOT_FOUND)
        return await this.CategoriaRepository.delete(id)

    }

}



function Ilike(arg0: string): string | import("typeorm").FindOperator<string> {
    throw new Error("Function not implemented.");
}

