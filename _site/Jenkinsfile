pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                sh '''#!/bin/bash
                    COMMIT_ID=$(git rev-parse HEAD)
            
                    aws deploy create-deployment \
                      --region ap-northeast-1 \
                      --application-name dev.kyte.travel \
                      --deployment-config-name CodeDeployDefault.OneAtATime \
                      --deployment-group-name dev \
                      --github-location repository=squarelab-kyte/squarelab-kyte.github.io,commitId=$COMMIT_ID
                '''
            }
        }
    }
}
