pipeline {
    agent any

    environment {
        PROJECT_ID = "souravgke"
        REGION = "us-central1"
        REPO = "ecommerce-repo"
        IMAGE = "product-service"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                sh '''
                  docker build -t $IMAGE:${BUILD_NUMBER} .
                '''
            }
        }

        stage('Tag Image') {
            steps {
                sh '''
                  docker tag $IMAGE:${BUILD_NUMBER} \
                  $REGION-docker.pkg.dev/$PROJECT_ID/$REPO/$IMAGE:${BUILD_NUMBER}
                '''
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                  docker push \
                  $REGION-docker.pkg.dev/$PROJECT_ID/$REPO/$IMAGE:${BUILD_NUMBER}
                '''
            }
        }
    }
}

