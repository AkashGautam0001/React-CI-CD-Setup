pipeline {
    agent any

    stages {
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