#!/bin/bash

DEPLOY_URL=s3://dev.kyte.travel

echo "deploying to $DEPLOY_URL"

s3cmd sync --exclude-from .s3ignore _site/ $DEPLOY_URL --delete-removed
