import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { HttpException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

const AWS_ACCESSKEYID = 'AKIA3V5BGF7RHDVUGHEZ';
const AWS_SECRETACCESSKEY = '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';
const AWS_BUCKET_NAME = 'profileimagesdraporg';
const AWS_REGION = 'us-east-1';

@Injectable()
export class UploadFileUseCase {
  AWS_S3_BUCKET = AWS_BUCKET_NAME;
  s3 = new S3({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESSKEYID as string,
      secretAccessKey: AWS_SECRETACCESSKEY as string,
    },
  });
  constructor() {}

  async execute(file: Express.Multer.File): Promise<{ url: string }> {
    const key = randomUUID();
    try {
      const commnad = new PutObjectCommand({
        Bucket: this.AWS_S3_BUCKET,
        Key: key,
        Body: file.buffer,
      });

      await this.s3.send(commnad);

      return {
        url: `https://${this.AWS_S3_BUCKET}.s3.amazonaws.com/${key}`,
      };
    } catch (e) {
<<<<<<< Updated upstream
      console.log(e);
=======
>>>>>>> Stashed changes
      throw new HttpException('No se pudo subi la image', 403);
    }
  }
}
