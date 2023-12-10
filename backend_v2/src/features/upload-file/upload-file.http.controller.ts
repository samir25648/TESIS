import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadFileUseCase } from './upload-file.use-case';

@Controller('upload')
export class UploadFileHttpController {
  constructor(private readonly uploadImageUseCase: UploadFileUseCase) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async execute(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ url: string }> {
    console.log(file);
    return await this.uploadImageUseCase.execute(file);
  }
}
