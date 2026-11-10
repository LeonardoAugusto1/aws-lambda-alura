
import { log } from './log.mjs';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3({ region: 'us-east-2' });

export const handler = async (event) => {
  const record = event.Records[0];
  const bucket = record.s3.bucket.name;
  const key = record.s3.object.key;
  const megaByte = 1024 * 1024;

  try {
   const getObjectResult = await s3Client.send(
     new GetObjectCommand({
       Bucket: bucket,
       Key: key,
     })
);

    if (getObjectResult.ContentLength > megaByte) {
      log('Objeto muito grande');
      return 'Objeto muito grande';
    }

    log('Objeto de tamanho OK');
    return 'Objeto de tamanho OK';

  } catch (error) {
    log(error.message);
    throw error;
  }
};
