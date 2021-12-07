install:
	docker-compose build node
	docker-compose run --rm node yarn install

run:
	docker-compose up node

run-prod:
	docker-compose up nginx

test:
	docker-compose run --rm node yarn run test --watchAll=false


build:
	docker-compose run --rm node yarn run build
	docker build -t hangman-typescript ./.circleci/nginx
	tar -czvf hangman-typescript.tar.gz build