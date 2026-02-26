pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Clean up code'){
            steps {
                cleanWs()
            }
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage
        stage('Build') {
            steps {
                bat '''
                    node --version
                    npm --version
                    npm install
                    npm run build
                '''
            }
         
        }

        stage('Test'){
            steps {
                bat '''
                    npm run test
                '''
            }
        }

        stage('Deploy'){
            sh '''
                npm install -g vercel
            '''
        }
    }
}