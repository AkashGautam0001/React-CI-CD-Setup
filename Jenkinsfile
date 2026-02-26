pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Clean up code') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    node --version
                    npm --version
                    npm install
                '''
            }
        }

        stage('Build') {
            steps {
                bat '''
                    npm run build
                '''
            }
        }

        stage('Test') {
            steps {
                bat '''
                    npx vitest run
                '''
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                    npm install -g vercel
                '''
            }
        }
    }
}