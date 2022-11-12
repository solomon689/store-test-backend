import mysql from "mysql2/promise";
import { connectionConfig } from './constant';

export class DataSource {
    private static instance: DataSource;
    private pool!: mysql.Pool;

    private constructor() {
        try {
            this.pool = mysql.createPool(connectionConfig);

            console.log('Base de datos conectada');
        } catch (error) {
            console.error('No se ha podido conectar la base de datos =>', error);
        }
    }

    public static getInstance(): DataSource {
        if (!DataSource.instance) {
            DataSource.instance = new DataSource();
        }

        return DataSource.instance;
    }

    public async query(query: string, params?: any[]): Promise<any> {
        try {
            const [test] = await this.pool.query(query, params);
            
            return test;
        } catch (error) {
            console.error('ERROR =>', error);
        }
    }
}