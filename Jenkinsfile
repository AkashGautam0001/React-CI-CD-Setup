pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }

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

        stage('Take Approval'){
            steps {
                timeout(time:1, unit:'MINUTES') {
                    input message: 'Do you want to deploy?', ok: 'Proceed'
                }
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

        stage('Deploy') {
            steps {
                bat 'npx vercel --prod --token %VERCEL_TOKEN% --confirm --name react-ci-cd-setup'
            }
        }
    }
}