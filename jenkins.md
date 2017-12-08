# Jenkins setup manual
These steps are from the manual Jenkins setup manual
### First step
To setup Jenkins on your aws instance you have to ssh to the instances

```
ssh -i \  
    ~/.ssh/SSH\_KEY\_NAME \
	      ec2-user@PUBLIC\_DNS\_NAME
```
### Update Java
Then you have to update Java to Java 8

```
sudo yum install java-1.8.0
sudo yum remove java-1.7.0-openjdk
```
And then verify you are running Java 8 version

### Install Jenkins
Use these steps to install Jenkins
```
sudo yum update
sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo
sudo rpm --import http://pkg.jenkins-ci.org/redhat-stable/jenkins-ci.org.key
sudo yum install jenkins
sudo service jenkins start
sudo chkconfig jenkins on
```

### Install Docker and Git
```
sudo yum install -y ecs-init
sudo gpasswd -a jenkins docker
sudo service docker start
sudo chkconfig docker on
sudo yum install git
```
### Github plugin
To use the GitHub plugin, create a key to log into GitHub
```
sudo su -s /bin/bash jenkins
cd /var/lib/jenkins/
ssh-keygen
cat .ssh/id_rsa.pub
```
Copy the public key that was concatenated onto the screen, and add it to your GitHub keys

### Reboot
When all the steps above are completed run:
'sudo reboot'
