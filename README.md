# Deploy process

1. clone this site.
1. Get appropreate permission to access s3
1. Run following command

    aws s3 sync . s3://kyte.travel --exclude '*.git/*' --exclude 'README.md' --delete

