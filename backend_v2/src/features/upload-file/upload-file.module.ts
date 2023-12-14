import { Module } from '@nestjs/common';
import { UploadFileUseCase } from './upload-file.use-case';
import { UploadFileHttpController } from './upload-file.http.controller';

@Module({
  controllers: [UploadFileHttpController],
  providers: [UploadFileUseCase],
<<<<<<< Updated upstream
  exports: [UploadFileUseCase]
=======
  exports: [UploadFileUseCase],
>>>>>>> Stashed changes
})
export class UploadImageModule {}
