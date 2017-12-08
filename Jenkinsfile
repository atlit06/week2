node {
    checkout scm
    stage('Build') {
        stage('Install dependencies') {
            sh 'yarn install'
            dir('client') {
              sh 'yarn install'
              sh 'cd ..'
            }
        }
        stage('Dockerbuild') {
          sh './dockerbuild.sh'
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
