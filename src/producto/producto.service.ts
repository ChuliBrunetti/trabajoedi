import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    
    obtenerproducto():string {
        return "Producto 1"
    }

   crearProducto(): string {
        return "Tenemos nuevo producto 2" ;
   } 
}
