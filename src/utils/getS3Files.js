import AWS from 'aws-sdk';
import {awsConfig} from './awsConfig';

AWS.config.update({
    region: awsConfig.region,
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
    bucketName: awsConfig.bucketName,
});

const s3 = new AWS.S3();

export const getS3Files = async (prefix) => {

    const params = {
        Bucket: 'bluecaraweb',
        Prefix: prefix,
    };

    try {
        const response = await s3.listObjectsV2(params).promise();
        const files = response.Contents
            .filter(item => item.Key !== prefix+'/')  // Skipping the root file
            .map(item => item.Key);
        return files;
    } catch (error) {
        console.error('Error fetching S3 files:', error);
        return [];
    }
};
