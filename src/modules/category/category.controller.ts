import { Request, Response } from "express";
import { CategoryService } from './category.service';
import { HttpStatus } from '../../common/enums/http-status.enum';
import { InternalServerError } from '../../common/errors/custom-errors';

export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ) {
        this.getCategories = this.getCategories.bind(this);
    }

    public async getCategories(req: Request, res: Response) {
        try {
            const categories: any[] = await this.categoryService.getCategories();

            if (categories.length === 0) {
                return res.status(HttpStatus.NO_CONTENT).json();
            }

            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                message: 'Categorias encontradas con exito!',
                data: categories,
            });
        } catch (error) {
            console.error(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                new InternalServerError('Ha ocurrido un error inesperado').createResponse(),
            )
        }
    }
}