export class ApplicationError extends Error {
    errorType: string | undefined;
    statusCode: number;
    constructor(statusCode: number, message: string, errorType?: string) {
      super(message);
      this.statusCode = statusCode;
      this.errorType = errorType
    }
  }