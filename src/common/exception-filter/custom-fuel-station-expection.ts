import { HttpException } from "@nestjs/common";

export class CustomFuelStationException extends HttpException{
  constructor(message: any, data: any, statusCode: number) {
      super(
        {"message": message, "results": data},
        statusCode
      );
  }
}
