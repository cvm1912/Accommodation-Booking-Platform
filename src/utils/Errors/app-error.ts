interface IAppError {
    message: string;
    statusCode: number;
}

interface INotFoundError extends IAppError {
    resource: string;
}

interface IValidationError extends IAppError {
    fields: string[];
}

interface IUnauthorizedError extends IAppError {
    reason: string;
}

class AppError extends Error implements IAppError {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

class NotFoundError extends AppError implements INotFoundError {
    resource: string;

    constructor(resource: string) {
        super(`${resource} not found`, 404);
        this.resource = resource;
    }
}

class ValidationError extends AppError implements IValidationError {
    fields: string[];

    constructor(fields: string[]) {
        super('Validation failed', 400);
        this.fields = fields;
    }
}

class UnauthorizedError extends AppError implements IUnauthorizedError {
    reason: string;

    constructor(reason: string) {
        super('Unauthorized', 401);
        this.reason = reason;
    }
}

export { AppError, NotFoundError, ValidationError, UnauthorizedError };
export type { IAppError, INotFoundError, IValidationError, IUnauthorizedError };
