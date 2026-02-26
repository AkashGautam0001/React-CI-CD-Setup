pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                step{
                    cleanWs()
                }

                step {
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
}