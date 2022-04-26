console.log('Math.PI ', Math.PI);
console.log('Math.max ', Math.max(1,2,3,5,3,2,7,0,3,1,5,7,10,8));


class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max: item, numbers[0]
    )
  }
}

//const math = new MyMath();
//math.PI;

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(1,2,4,1,45,12));
const numbers = [12,2,1,1112,9]
console.log
console.log('MyMath.max', MyMath.max(...numbers));

const numbers2 = [-1, -10, -12, -5];
console.log('MyMath.max', MyMath.max(...numbers2));

