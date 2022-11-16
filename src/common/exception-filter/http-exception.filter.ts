import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(responses: any, host: ArgumentsHost) {
    // console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = responses instanceof HttpException
    ? responses.getStatus()
    : HttpStatus.INTERNAL_SERVER_ERROR;

    response
      .status(status)
      .json({
        // message: exception.message,
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        responses
      });
  }
}
