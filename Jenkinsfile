node {
    checkout scm
    stage('Build') {
        sh 'yarn install'
        dir('client') {
          echo 'install npm in client folder'
          sh 'npm install'
          sh 'cd ..'
        }

    }
    stage('Test') {
        sh 'npm run testJenkins'
        dir('client') {
          sh 'npm run testAll'
          sh 'cd ..'
        }
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
