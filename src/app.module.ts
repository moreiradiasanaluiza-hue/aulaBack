import { Module } from "@nestjs/common";
import { TypeOrmModule } from 
"@nestjs/typeorm";
import { Aluno } from "./alunos/aluno.entity.js";

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'escola_db2',
      entities: [Aluno],
      synchronize:true,
      logging:true,
    }),
  ],
})
export class AppModule{}