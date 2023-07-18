import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { EstoqueModule } from './estoque/estoque.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [FuncionarioModule, EstoqueModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
