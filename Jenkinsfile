pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Checkout repo') {
      steps {
        git branch: 'develop',  url: 'https://github.com/abejide001/Store-Manager-React'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}
