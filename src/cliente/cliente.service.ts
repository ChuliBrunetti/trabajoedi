import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {

    obtenercliente() : string {
        return "Cliente 1";
    }
}