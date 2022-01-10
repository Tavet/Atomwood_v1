#/bin/sh
yum update -y
yum install firewalld -y
sudo yum install git -y

systemctl start firewalld
systemctl enable firewalld

## -----------------------------------------------------------------------------------------------------------------------
# Step 2: Install DOCKER-CE on Machine & Docker-Compose

amazon-linux-extras install docker
# Add the ec2-user to the docker group so you can execute Docker commands without using sudo.
usermod -a -G docker ec2-user
systemctl enable docker && systemctl start docker

curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Clone repository
cd /home/ec2-user
git clone https://Tavet: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@github.com/Tavet/AtomWood.git --branch=master Atomwood

# Enable HTTPS 
cd /home/ec2-user/Atomwood/nginx
rm -rf ./default.conf || true
mv default_https.conf.template default.conf

# Run
cd /home/ec2-user/Atomwood
docker-compose up -d
