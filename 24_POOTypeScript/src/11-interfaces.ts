/* Las interfaces son basicamente contratos que no se pueden romper, cuando se implementa una interface dentro de una clase (usando la palabra clave implements) se tiene que cumplir los parametros y metodos utilizados en la interface.*/

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnected(): void;
  isConnected(name: string): boolean;
}

//const driver: Driver = {
//  database: '',
//  password: '',
//  port: 23
//}

class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {

  }

  disconnected(): void {

  }

  isConnected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {

  }

  disconnected(): void {

  }

  isConnected(name: string): boolean {
    return true;
  }
}
