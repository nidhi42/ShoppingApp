export interface Productlist {
  id: number,
  name: string,
  description: string,
  quantity: number,
  price: number,
  category: productCategory,
  photoPath: string,
  totalPrice: number,

}

export enum productCategory {
  all = 0,
  men = 1,
  women = 2,
  kids = 3,
  
}
