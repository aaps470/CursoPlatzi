//La forma en la que yo entiendo el lexical scope es de adentro hacia afuera. Es decir que JS siempre busca las variables en el bloque más interno desde donde haya sido llamada. Por ejemplo:

const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      const scope = "I'm local 3";
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();

//En el código anterior la salida será

//    I'm local 3

//Debido a que el console.log(scope) busca la variable dentro de func3() (desde donde fué llamado) y al encontrar la variable scope = “I’m local 3” entonces la imprime. Pero si eliminamos esa linea y dejamos esto:

const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();

//La salida es:

//   I'm local 2

//Si observamos dentro de fun3() ya no existe ninguna definición de la variable scope, por lo que JS buscará por fuera de este bloque pasando a al bloque func2(), en donde encuentra const scope = “I’m local 2”. Y asi sucesivamente podriamos ir eliminando definiciones de scope de adentro hacia afuera:

const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const func3 = () => {
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();

//Cuya salida es:

//  I'm local 1

//Finalmente tenemos:

const scope = "I'm global";
const func1 = () => {
  const func2 = () => {
    const func3 = () => {
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();

//Cuya salida es:

//  I'm global

//Pero este coportamiento siempre es exclusivamente de adentro hacia afuera, y por tanto si intentamos algo como esto:

const func1 = () => {
    const func2 = () => {
      const func3 = () => {
        const scope = "I'm local 3";
      }
      console.log(scope);
      func3();
    }
    func2();
  }
  func1();

//JS devuelve un ReferenceError ya que console.log(scope) fue llamado desde func2(); por fuera de func3() en donde se encuentra definido const scope = “I’m local 3”. Por lo que JS no puede encontrarlo y devuelve el error.