import { HttpStatus, ParseIntPipe } from "@nestjs/common";
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../service/categoria.service";


@Controller("/categoria")
export class Categoriacontroller {
    constructor(private readonly CategoriaService: CategoriaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.CategoriaService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id: number): Promise<Categoria>{
        return this.CategoriaService.findByid(id)
    }
    @Get('/name/:name')
    @HttpCode(HttpStatus.OK)
    findByname(@Param('name')name: string): Promise<Categoria[]>{
        return this.CategoriaService.findByname(name)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()categoria: Categoria): Promise<Categoria>{
        return this.CategoriaService.Create(categoria)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    Update(@Body()categoria: Categoria): Promise<Categoria>{
        return this.CategoriaService.Update(categoria)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id',ParseIntPipe)id: number){
        return this.CategoriaService.Delete(id)
    }
    
    
    
}

