bucket_name=$1
distribution_id=$2
access_key=$3
secret_access_key=$4

pip3 install boto3

python3 scripts/pipeline/upload_to_s3.py $bucket_name $distribution_id $access_key $secret_access_key