import { Controller, Get } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService){}

    @Get()
    getproducto(): string {
        return this.productoService.obtenerproducto()
    } 
}  