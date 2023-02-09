import boto3
import sys

def main():
    if (len(sys.argv) < 7):
        print ('Error: Requires 6 arguments.')
        sys.exit(1)

    bucket_name=sys.argv[1]
    access_key=sys.argv[2]
    secret_access_key=sys.argv[3]

    session = boto3.Session(
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_access_key,
    )

    client = session.client('s3')

    for file in sys.argv[4:]:
        print ('Uploading ' + file)
        response = client.upload_file(
            Filename=file,
            Bucket=bucket_name,
            Key=file,
            ExtraArgs={'ContentType': 'text/html'}
        )
        print(response)
    print ('Done uploading')


main()