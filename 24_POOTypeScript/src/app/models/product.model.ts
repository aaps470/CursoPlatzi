import { Category } from "./categoty.model";

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
  categoryId:  number;
}

