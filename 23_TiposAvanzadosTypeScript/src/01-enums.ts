/*Los enums funcionan como listas en las que podemos agregar llaves y valores. Esto lo que nos permite es tener un set de opciones predefinidas, evitando pasar un argumento invalido, ya que solo vamos a tener las opciones dentro del enum. Estos se usan de la siguiente manera */

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES;
}

const nicoUser: User = {
  username: 'nicobytes',
  role: ROLES.ADMIN
}


