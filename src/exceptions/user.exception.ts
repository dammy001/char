import { HttpException, HttpStatus } from '@nestjs/common';

export class UserException extends HttpException {
  public message: string;

  constructor(message: string) {
    super(message, HttpStatus.PRECONDITION_FAILED);
  }
}
