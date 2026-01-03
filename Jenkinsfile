pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t product-service:v${BUILD_NUMBER} .
                '''
            }
        }
    }
}

