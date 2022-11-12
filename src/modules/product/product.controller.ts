import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { Product } from '../../common/interfaces/product.interface';
import { HttpStatus } from '../../common/enums/http-status.enum';
import { BadRequest, InternalServerError } from '../../common/errors/custom-errors';

export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ) {
        this.getProducts = this.getProducts.bind(this);
        this.getProductsByCategory = this.getProductsByCategory.bind(this);
        this.searchProducts = this.searchProducts.bind(this);
    }

    public async getProducts(req: Request, res: Response) {
        try {
            const page: number = parseInt(req.query.page as string) || 1;
            const products: Product[] = await this.productService.getProducts(page);
            
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                message: 'Productos encontrados con exito!',
                totalItems: products[0]?.totalItems,
                data: products,
            });
        } catch (error) {
            console.error(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                new InternalServerError('Ha ocurrido un error inesperado').createResponse(),
            );
        }
    }

    public async getProductsByCategory(req: Request, res: Response) {
        try {
            const page: number = parseInt(req.query.page as string) || 1;
            const category: number = parseInt(req.params.category);
            const products: Product[] = await this.productService.getProductsByCategory(page, category);

            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                message: 'Productos encontrados con exito!',
                totalItems: products[0]?.totalItems,
                data: products,
            });
        } catch (error) {
            console.error(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                new InternalServerError('Ha ocurrido un error inesperado').createResponse(),
            );
        }
    }

    public async searchProducts(req: Request, res: Response) {
        try {
            const page: number = parseInt(req.query.page as string) || 1;
            const search: string = req.query.q as string;
            const products: Product[] = await this.productService.searchProducts(page, search);

            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                message: 'Productos encontrados con exito!',
                totalItems: products[0]?.totalItems,
                data: products,
            });
        } catch (error) {
            console.error(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                new InternalServerError('Ha ocurrido un error inesperado').createResponse(),
            );
        }
    }
}