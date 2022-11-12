import { Router } from "express";
import { CategoryController } from '../modules/category/category.controller';
import { CategoryService } from '../modules/category/category.service';

const router: Router = Router();
const categoryController: CategoryController = new CategoryController(
    CategoryService.getInstance(),
);

router.get('/', categoryController.getCategories);

export default router;