import { Module } from "@nestjs/common";
import { Categoriacontroller } from "./controller/categoria.controller";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./service/categoria.service";
import { TypeOrmModule } from "@nestjs/typeorm"
@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers: [Categoriacontroller],
    exports: [TypeOrmModule],
})

export class CategoriaModule {}