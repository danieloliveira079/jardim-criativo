FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y apache2 supervisor
ADD . /var/www/html/
RUN service apache2 restart
RUN mkdir -p /var/lock/apache2 /var/run/apache2 /var/run/sshd /var/log/supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN chown -R www-data:www-data /var/www/html/
##RUN chmod 755 -R /var/www/html/helpdesk/files
EXPOSE  80
CMD ["/usr/bin/supervisord"]
