node {
    checkout scm
    stage('Build') {
        sh 'yarn install'
        dir('client') {
          echo 'install yarn in client folder'
          sh 'yarn install'
        }

    }
    stage('Test') {
        sh 'npm run testJenkins'
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
