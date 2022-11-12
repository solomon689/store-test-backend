import { HttpStatus } from '../enums/http-status.enum';
abstract class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class BadRequest extends CustomError {
    public statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = HttpStatus.BAD_REQUEST;
    }

    public createResponse(): any {
        return {
            statusCode: this.statusCode,
            message: this.message,
        }
    }
}

export class InternalServerError extends CustomError {
    public statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public createResponse(): any {
        return {
            statusCode: this.statusCode,
            message: this.message,
        }
    }
}