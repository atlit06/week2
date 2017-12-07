node {
    checkout scm
    stage('Build') {
        sh 'npm install'
        sh 'cd client && npm install && cd ..'

    }
    stage('Test') {
        sh 'npm run testJenkins'
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
