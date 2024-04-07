# USE "SDK MAN" to manage Libraries
### JDK | INSTALLATION
<br/>
<br/>
<br/>

# Use "HOMEBREW" to manage Libraries<br/>
> $ brew update && brew outdated
### DOCKER ENGINE / DOCKER-COMPOSE | INSTALLATION
[NOTE: (alternative if required) https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository]

### PYTHON 3 | INSTALLATION
```sh
$ echo 'alias python="python3"' >> ~/.bashrc
$ source ~/.bashrc
```

### AWS CLI | INSTALLATION
```sh
$ python3.12 -m venv awscli-venv
$ source awscli-venv/bin/activate
$ pip install awscli
```

### JQ | INSTALLATION
### ANSIBLE | INSTALLATION
### TERRAFORM | INSTALLATION
<br/>
<br/>
<br/>

# Manual Installation
### GRADLE | INSTALLATION
```bash
/mnt/ebs_volume/Downloads/gradle-8.8
-- ~/.bashrc --
export GRADLE_HOME="/mnt/ebs_volume/Downloads/gradle-8.6"
export GRADLE_USER_HOME="$GRADLE_HOME/_repos"
PATH="$GRADLE_HOME/bin":$PATH
PATH="$PATH:/home/ubuntu/.local/bin"
```
<br/>

### RPM Package Manager (.rpm) > Debian Package (.deb) converter | INSTALLATION
```sh
$ sudo apt install alien -y

usage:
$ alien -d <package-name>.rpm
$ sudo dpkg -i <package-name>.deb
```
