import boto3
import sys
import time

def main():
    if (len(sys.argv) < 5):
        print ('Error: Requires 4 arguments.')
        sys.exit(1)

    bucket_name = sys.argv[1]
    distribution_id = sys.argv[2]
    access_key = sys.argv[3]
    secret_access_key = sys.argv[4]
    
    files_to_upload = [
        ('index.html', 'text/html'),
        ('bundle.js', 'text/javascript'),
        ('styles.css', 'text/css')
    ]

    session = boto3.Session(
        aws_access_key_id = access_key,
        aws_secret_access_key = secret_access_key,
    )

    s3_client = session.client('s3')
    cf_client = session.client('cloudfront')

    for file, ContentType in files_to_upload:
        print ('Uploading ' + file)
        response = s3_client.upload_file(
            Filename = file,
            Bucket = bucket_name,
            Key = file,
            ExtraArgs = {'ContentType': ContentType }
        )
        print(response)
    print ('Done uploading')

    print ('Invalidating CloudFront cache')
    response = cf_client.create_invalidation(
        DistributionId=distribution_id,
        InvalidationBatch={
            'Paths': {
                'Quantity': 1,
                'Items': [
                    '/*',
                ]
            },
            'CallerReference': str(time.time()).replace(".", "")
        }
    )
    print(response)
    print ('Done invalidating CloudFront cache')



main()