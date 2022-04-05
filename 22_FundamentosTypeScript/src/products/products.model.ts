export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
    name: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };
