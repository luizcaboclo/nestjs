import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem} from "../entities/postagem.entity";

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository : Repository<Postagem>
    ) {}
    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find({
            relations:{
                tema:true,
                usuario: true
            }
        })
    } 
    async findById(id: number): Promise<Postagem>{
        let postagem = await this.postagemRepository.findOne({
            where:{
            id
            },
            relations:{
                tema:true,
                usuario: true
            }
        })
        if (!Postagem)
        throw new HttpException('postagem não existe', HttpStatus.NOT_FOUND)
        return postagem
    }
    async findByDescricao(descricao: string): Promise<Postagem[]>{
        return this.postagemRepository.find({
            where: {
              descricao  : ILike(`%${descricao}%`)
            },
            relations:{
                tema:true,
                usuario: true
            }
        })
    }
    async create(postagem: Postagem): Promise<Postagem>{
        return await this.postagemRepository.save(postagem)
    }

    async update(postagem: Postagem): Promise<Postagem>{
       let buscarPostagem = this.findById(postagem.id)
       if(!buscarPostagem || !postagem.id)
       throw new HttpException('postagem não existe', HttpStatus.NOT_FOUND)
       return await this.postagemRepository.save(postagem)
    }
    async delete(id: number): Promise<DeleteResult>{

        let buscarPostagem = await this.findById(id)
        if(!buscarPostagem) 
        throw new HttpException('postagem não encontrada', HttpStatus.NO_CONTENT)
         return await this.postagemRepository.delete(id)
    }
    }
    


function findByid(id: number) {
    throw new Error("Function not implemented.");
}
