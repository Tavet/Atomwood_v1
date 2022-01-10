FROM wordpress:${WORDPRESS_VERSION:-php7.3-fpm}

RUN apt-get update && apt-get install -y \
        libicu-dev \
    && docker-php-ext-install \
        pdo pdo_mysql \
    && docker-php-ext-enable \
        pdo pdo_mysql
        