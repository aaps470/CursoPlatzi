/*Parametros rest: Flexibilidad en los parametros */
import { User, ROLES } from "./01-enums"

const currentUser: User = {
  username: 'Anktor',
  role: ROLES.CUSTOMER
}
//Primera Prueba------------------------------------------------------------
export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false
}

const rta = checkAdminRole();
console.log('checkAdminRole', rta);
//----------------------------------------------------------------------------

//Segunda Prueba -------------------------------------------------------------
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2){
    return true;
  }
  return false
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);
//---------------------------------------------------------------------------

//Tercera Prueba ------------------------------------------------------------
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);
//----------------------------------------------------------------------------

//Cuarta Prueba -------------------------------------------------------------
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true + ` Nuestro User es ${currentUser.role}`;
  }
  return false + ` Nuestro User es ${currentUser.role}`
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
console.log('checkRoleV3', rta4);


/*Aqui al final dejo la explicacion de las diferentes pruebas:

  Prueba 1:
  Es una funcion que verifica si nuestro const creado es admin, la respuesta es false

  Prueba 2:
  Una funcion que pregunta por mas roles, pero lo hace en mas de un if, volvemos a preguntar si es admin o seller, la respuesta es false.

  Prueba 3:
  Una funcion que recibe como parametro un array de roles, que hace esto de especial, que podemos usar el .includes y preguntar si el role que tenemos coincide los que mandemos en respuesta, esto tiene un pero que es que las respuestas tenemos que mandarlas dentro de un array.

  Prueba 4:
  Mismo que la Prueba 3, pero con la inclusion del parametro rest(...) dentro del parametro que se recibe, esto lo que hace es que crea el string como parametro interno y podemos reguir usando el .includes (que es unico de arrays) y en repuesta no tenemos que mandar un Array en la respuesta, simplemente los roles que querramos verificar.
*/
