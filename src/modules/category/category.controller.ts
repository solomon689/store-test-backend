import { Request, Response } from "express";
import { CategoryService } from './category.service';
import { HttpStatus } from '../../common/enums/http-status.enum';

export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ) {
        this.getCategories = this.getCategories.bind(this);
    }

    public async getCategories(req: Request, res: Response) {
        const categories: any[] = await this.categoryService.getCategories();

        if (categories.length === 0) {
            return res.status(HttpStatus.NO_CONTENT).json();
        }

        return res.status(HttpStatus.OK).json({
            statusCode: HttpStatus.OK,
            message: 'Categorias encontradas con exito!',
            data: categories,
        });
    }
}