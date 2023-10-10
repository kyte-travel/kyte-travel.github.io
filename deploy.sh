#!/bin/bash
echo "Deploying to PRD"
aws s3 sync _site s3://about.kyte.travel --delete --region ap-northeast-1 --cache-control max-age=300 --no-progress