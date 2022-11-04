import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaController } from "./controlle/Tema.controlle";
import { Tema } from "./entities/tema.entity";
import { TemaService } from "./service/tema.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule],
})

export class TemaModule { }