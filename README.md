# Deploy process

1. clone this site.
1. Get appropreate permission to access s3.
1. Get [s3cmd](http://s3tools.org/download).
1. Run following command in *the cloned directory*.

    s3cmd sync --exclude-from .s3ignore ./ s3://kyte.travel --delete-removed

