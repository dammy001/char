import {
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginDto, UserDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Res() res: Response, @Body() request: LoginDto): Promise<any> {
    res.status(HttpStatus.OK).json({
      message: 'how are you',
      data: request.email,
    });
  }

  @Post('register')
  async register(@Body() request: UserDto, @Res() res: Response): Promise<any> {
    res.status(HttpStatus.CREATED).json({
      message: 'how are you',
      data: this.authService.create(request),
    });
  }

  @Get('session')
  async session(@Res() res: Response): Promise<void> {
    res.status(HttpStatus.OK).json({
      data: 'user session',
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res): Promise<any> {
    console.log(id);
    res.status(HttpStatus.OK).send({ message: `${id} is okay` });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
