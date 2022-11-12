import { Router } from "express";
import { ProductController } from '../modules/product/product.controller';
import { ProductService } from '../modules/product/product.service';
import { verifyPageDataTypeMiddleware } from '../common/middleware/verify-datatypes.middleware';

const router: Router = Router();
const productController: ProductController = new ProductController(
    ProductService.getInstace(),
);

router.get('/', verifyPageDataTypeMiddleware , productController.getProducts);
router.get('/search', verifyPageDataTypeMiddleware , productController.searchProducts);
router.get('/:category', verifyPageDataTypeMiddleware ,productController.getProductsByCategory);

export default router;