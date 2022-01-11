# Atomwood webpage

Atomwood shop made in Wordpress by Breyner Rojas.

This project was built based on [Wordpress Ngnx Docker](https://github.com/mjstealey/wordpress-nginx-docker) project by mjstealey.

## Project setup
### PHP Config
To add new PHP extensions go to config/php/Dockerfile and add the command with
```docker-php-ext-install``` and ```docker-php-ext-enable```

### Generate SSL certificate
Add domains and email addresses to init-letsencrypt.sh
Replace all occurrences of example.org with primary domain (the first one you added to init-letsencrypt.sh) in data/nginx/app.conf

Run first
```chmod +x init-letsencrypt.sh```

Then run the script
```./init-letsencrypt.sh```

### Project initialization
From the beginning
```mkdir -p logs/nginx/ mysql/ wordpress/```

Start
```docker-compose up -d```

Stop
```docker-compose down --volumes```

## Devops

**Deploy to AWS EC2**
- Run cloudformation
/devops/cloudformation
```aws cloudformation create-stack --stack-name atomwood-store --template-body file:///Users/breyner.rojas/Documents/AtomSeed/devops/cloudformation/store-template.yaml --capabilities CAPABILITY_IAM```

**Build AMI**
- Export GitHub Token to pull the repository in the EC2 machine
```export REPO_TOKEN=my-token```

- Run packer
/deovps/packer
```packer build .```
