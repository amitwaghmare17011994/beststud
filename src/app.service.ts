// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require('aws-sdk');
import { Request } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(req: Request, file): Promise<string> {
    console.log('Uploading.....');
    const res = await this.uploadImage(file);
    console.log('Done');
    return 'Hello World!';
  }
  uploadImage(file) {
    const s3bucket = new AWS.S3({
      accessKeyId: process.env.S3_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    });
    const params = {
      Key: new Date().getTime().toString() + file.originalname,
      Body: file.buffer,
      Bucket: 'beststud-bucket',
      type: 'image/png',
    };

    return s3bucket.upload(params).promise();
  }
}
