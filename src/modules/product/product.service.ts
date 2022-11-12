import { Product } from '../../common/interfaces/product.interface';
import { DataSource } from '../../config/datasource';
export class ProductService {
    private static instance: ProductService;

    constructor(
        private readonly dataSource: DataSource,
    ) { }

    public static getInstace(): ProductService {
        if (!ProductService.instance) {
            return new ProductService(DataSource.getInstance());
        }

        return ProductService.instance;
    }

    public getProducts(page: number = 1): Promise<Product[]> {
        const limit: number = 9;
        const offset: number = (page === 1) ? 0 : (page * limit) - limit;
        
        return this.dataSource.query(`
            SELECT *, 
                COUNT(p.id) OVER() as "totalItems" 
            FROM product p LIMIT ? offset ?`
                , [limit,offset]);
    }

    public getProductsByCategory(page: number = 1, category: number): Promise<Product[]> {
        const limit: number = 9;
        const offset: number = (page === 1) ? 0 : (page * limit) - limit;

        return this.dataSource.query(`
            SELECT *, COUNT(p.id) OVER() as "totalItems" FROM product p
                WHERE p.category = ?
                LIMIT ?
                OFFSET ?
        `, [category, limit, offset]);
    }

    public searchProducts(page: number = 1, productName: string): Promise<Product[]> {
        const limit: number = 9;
        const offset: number = (page === 1) ? 0 : (page * limit) - limit;
        productName = '%' + productName + '%';
        
        return this.dataSource.query(`
            SELECT *, COUNT(p.id) OVER() as "totalItems" FROM product p
                WHERE p.name LIKE ?
                ORDER BY p.id 
                LIMIT ?
                OFFSET ?
        `, [productName, limit, offset]);
    }
}