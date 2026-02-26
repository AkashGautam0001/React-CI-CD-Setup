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
    }
}