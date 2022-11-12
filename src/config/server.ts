import { Application } from "express";
import express from "express";
import cors from "cors";
import { DataSource } from './datasource';
import productRoutes from "../routes/product.routes";
import categoryRoutes from "../routes/category.routes";

export class Server {
    private app: Application;
    private path = {
        product: '/api/product',
        category: '/api/category',
    }

    constructor() {
        this.app = express();    

        this.middlewares();
        this.databaseConnection();
        this.routes();
    }

    public listen(port: number | string): void {
        this.app.listen(port, () => {
            console.log('Servidor escuchando desde puerto', port);
        });
    }

    private middlewares(): void {
        this.app.use(express.json())
        this.app.use(cors());
    }

    private routes(): void {
        this.app.use(this.path.product, productRoutes);
        this.app.use(this.path.category, categoryRoutes);
    }

    private databaseConnection(): void {
        DataSource.getInstance();
    }
}