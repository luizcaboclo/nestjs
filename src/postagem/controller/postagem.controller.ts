import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { get } from "http";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Postagem } from "../entities/postagem.entity";

import { PostagemService } from "../service/postagem.service";
@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller("/postagem")
@ApiBearerAuth()
export class PostagemController {


    constructor(private readonly postagemService: PostagemService) {

    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll();
    }
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe)id: number): Promise<Postagem>{
        return this.postagemService.findById(id)
    }
    
    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao')descricao: string): Promise<Postagem[]>{
        return this.postagemService.findByDescricao(descricao)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    Create(@Body() postagem: Postagem): Promise<Postagem>{
        return this.postagemService.create(postagem)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    Update(@Body() postagem: Postagem): Promise<Postagem>{
        return this.postagemService.update(postagem)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    Delete(@Param('id', ParseIntPipe)id: number){
        return this.postagemService.delete(id)
    }
}
    
