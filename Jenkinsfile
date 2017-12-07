node {
    checkout scm
    stage('Build') {
        sh 'npm install'
        sh 'cd client'
        sh 'npm install'
        sh 'cd'

    }
    stage('Test') {
        sh 'export NODE_PATH=. && ./node_modules/.bin/jasmine JASMINE_CONFIG_PATH=./jasmine.json'
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
