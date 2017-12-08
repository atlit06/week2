node {
    checkout scm
    stage('Build') {
        sh 'yarn install'
        dir('client') {
          sh 'yarn install'
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
        dir('provisioning') {
          sh './provision-new-environment.sh'
        }
    }
}
