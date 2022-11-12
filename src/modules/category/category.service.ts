import { DataSource } from '../../config/datasource';
export class CategoryService {
    private static instance: CategoryService;

    private constructor(
        private readonly dataSource: DataSource,
    ) {

    }

    public static getInstance(): CategoryService {
        if (!CategoryService.instance) {
            return new CategoryService(DataSource.getInstance());
        }

        return CategoryService.instance;
    }

    public getCategories(): Promise<any[]> {
        return this.dataSource.query(`SELECT * FROM category`);
    }
}