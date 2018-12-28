#!/bin/bash

echo "Deploying to PRD"
DEPLOY_URL=s3://kyte.travel
s3cmd sync --exclude-from .s3ignore _site/ $DEPLOY_URL --delete-removed $@
