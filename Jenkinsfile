node {
    checkout scm
    stage('Build') {
        sh 'yarn install'

    }
    stage('Test') {
        sh 'npm run testJenkins'
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
