version: '3'
services:
  nginx_vrpjob:
    container_name: mynginx_vrpjob
    image: nikhomdoc/sugar_nginx2
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ../client:/usr/share/nginx/html
      - ../config:/etc/nginx/conf.d
      - ../letsencrypt:/etc/letsencrypt

networks: 
    default: 
        external: 
            name: external-network-vrpjob


