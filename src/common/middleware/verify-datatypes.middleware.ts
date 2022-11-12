import { NextFunction, Request, Response } from "express";
import { HttpStatus } from '../enums/http-status.enum';
import { BadRequest } from "../errors/custom-errors";

export const verifyPageDataTypeMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const verifyIsNumber: RegExp = /^[0-9]{0,2}$/;
    const page: string = req.query.page as string;

    if (!page.match(verifyIsNumber)) {
        return res.status(HttpStatus.BAD_REQUEST).json(
            new BadRequest('Parámetro page acepta únicamente números').createResponse(),
        );
    }

    return next();
}