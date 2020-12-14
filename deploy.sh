#!/bin/bash
echo "Deploying to PRD"
DEPLOY_URL=s3://about.kyte.travel

# --guess-mime-type --no-mime-magic is required. If not specified, css files that are uploaded to S3 will have "text/plain" MIME type.
s3cmd sync --exclude-from .s3ignore _site/ $DEPLOY_URL --delete-removed --guess-mime-type --no-mime-magic $@
