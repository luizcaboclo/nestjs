import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getbsms(): string{
    return 'orientação ao futuro, <br>responsabilidade pessoal, <br>mentalidade de crescimento, <br>persistência, <br>trabalho em equipe, <br>atenção aos detalhes, <br>proatividade, <br>comunicação'
}
getobjetivos(): string{
  return 'backend, <br>frontend'
}
}
