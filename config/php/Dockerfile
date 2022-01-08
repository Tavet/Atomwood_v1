FROM '$image'

RUN apt-get update && apt-get install -y \
        libicu-dev \
    && docker-php-ext-install \
        pdo pdo_mysql \
    && docker-php-ext-enable \
        pdo pdo_mysql
        