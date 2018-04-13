#  Create a new image from the base nginx image.
FROM nginx

COPY /dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
# RUN rm /etc/nginx/nginx.conf

# # Overwrite nginx's default configuration file with our own.
ARG config

# COPY prod/referral-spam.conf /etc/nginx/conf.d/
# COPY prod/nginx.conf /etc/nginx/
COPY $config /etc/nginx/conf.d/