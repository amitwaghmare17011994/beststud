import { diskStorage } from 'multer';
import {
  Body,
  Controller,
  Get,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(FileInterceptor('file'))
  getHello(
    @UploadedFile() file,
    @Body() body,
    @Req() request: Request,
  ): Promise<string> {
    return this.appService.getHello(request, file);
  }
}
