pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                cleanWs()

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