node {
    checkout scm
    stage('Build') {
        sh 'npm install'
        dir('client') {
          sh 'npm install'
        }

    }
    stage('Test') {
        sh 'npm run testJenkins'
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
