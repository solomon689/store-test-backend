export interface Product {
    id?: string;
    name: string; 
    price: number;
    urlImage: string;
    discount: number;
    category: number;
    totalItems?: number;
}