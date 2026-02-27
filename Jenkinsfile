pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Clean Workspace') {
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
                bat 'node --version'
                bat 'npm --version'
                bat 'npm ci'
            }
        }

        stage('Build') {
            steps {
                bat 'npx vite build'
            }
        }

        stage('Test') {
            steps {
                bat 'npx vitest run'
            }
        }
    }
}