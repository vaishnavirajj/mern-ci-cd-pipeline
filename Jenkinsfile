pipeline {
    agent any

    stages {
        stage('Install Back‑end Dependencies') {
            steps {
                // Install dependencies in the back‑end directory
                sh 'npm install --prefix back-end'
            }
        }
        stage('Run Back‑end Tests') {
            steps {
                // Execute the Jest test suite
                sh 'npm test --prefix back-end'
            }
        }
    }

    post {
        failure {
            echo 'CI pipeline failed.'
        }
        success {
            echo 'CI pipeline succeeded.'
        }
    }
}