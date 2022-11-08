import { Controller, Get, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('api/edi')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService){}

    @Get()
    getcliente(): string {
        return this.clienteService.obtenercliente();
    }    
}
