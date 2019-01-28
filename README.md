# Launch Local server

    gem install jekyll bundler
    bundle exec jekyll serve

# DEV Deploy process

Use Jenkins for DEV deployment.
The jenkins job uses AWS Code Deploy Service to deploy site to EC2 instance.

### DEV uses nginx server 

- not to cache ongoing dev resources
- apply different robots.txt to restrict search engine accesses


# PRD Deploy process

PRD site is deployed to S3 for static web hosting + Cloudfront.

1. clone this site.
1. Get appropreate permission to access s3.
1. Get [s3cmd](http://s3tools.org/download). Using brew is recommended: `brew install s3cmd`. pip installation is available: `pip install s3cmd`
1. Run following command in *the cloned directory*.

    ./deploy.sh

