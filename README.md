# AtomWood webpage

AtomWood shop made with WordPress.

## PHP Config
To add new PHP extensions go to config/php/Dockerfile and add the command with
```docker-php-ext-install``` and ```docker-php-ext-enable```

## Generate SSL certificate
Add domains and email addresses to init-letsencrypt.sh
Replace all occurrences of example.org with primary domain (the first one you added to init-letsencrypt.sh) in data/nginx/app.conf

Run first
```chmod +x init-letsencrypt.sh```

Then run the script
```./init-letsencrypt.sh```

## Project initialization
From the beginning
```mkdir -p logs/nginx/ mysql/ wordpress/```

Start
```docker-compose up -d```

Stop
```docker-compose down --volumes```