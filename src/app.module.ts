import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoService } from './producto/producto.service';
import { ProductoController } from './producto/producto.controller';
import { ClienteService } from './cliente/cliente.service';
import { ClienteController } from './cliente/cliente.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductoController, ClienteController],
  providers: [AppService, ProductoService, ClienteService],
})
export class AppModule {}
