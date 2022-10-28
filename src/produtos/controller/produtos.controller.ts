import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produtos } from "../entities/produtos.entity";
import { ProdutosService } from "../service/produtos.service";



@Controller("/produtos")
export class ProdutosController {
    constructor (private readonly produtoService: ProdutosService){

    }
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produtos[]>{
        return this.produtoService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe)id: number): Promise<Produtos>{
        return this.produtoService.findById(id)
    }
   
    @Get('/consoleplaystation/:consoleplaystation')
    @HttpCode(HttpStatus.OK)
    findByConsolePlaystation(@Param('consoleplaystation',)consoleplaystation: string): Promise<Produtos[]>{
        return this.produtoService.findByConsolePlaystation(consoleplaystation)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    Create(@Body()produtos: Produtos): Promise<Produtos>{
        return this.produtoService.create(produtos)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    Update(@Body()produtos: Produtos): Promise<Produtos>{
        return this.produtoService.update(produtos)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
        delete(@Param('id',ParseIntPipe)id: number){
        return this.produtoService.delete(id)
    }
        
    
}