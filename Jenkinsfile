node {
    checkout scm
    stage('Build') {
        sh 'npm install'
        dir('client') {
          echo 'install npm in client folder'
          sh 'npm install'
          sh 'cd ..'
        }

    }
    stage('Test') {
        sh 'npm run testJenkins'
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
