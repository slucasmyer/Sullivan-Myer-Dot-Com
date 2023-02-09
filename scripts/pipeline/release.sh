bucket_name=$1
access_key=$2
secret_access_key=$3
index_file=$4
bundle_file=$5
styles_file=$6

pip3 install boto3

python3 scripts/pipeline/upload_to_s3.py $bucket_name $access_key $secret_access_key $index_file $bundle_file $styles_file