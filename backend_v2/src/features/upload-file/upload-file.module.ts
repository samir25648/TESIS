import { Module } from '@nestjs/common';
import { UploadFileUseCase } from './upload-file.use-case';
import { UploadFileHttpController } from './upload-file.http.controller';

@Module({
  controllers: [UploadFileHttpController],
  providers: [UploadFileUseCase],
  exports: [UploadFileUseCase]
})
export class UploadImageModule {}
