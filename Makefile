bootstrap:
	npm install

start:
	./start.sh
stop:
	./stop.sh

dev.server:
	npm start dev

dev.browsersync:
	npm run browserSync

stage:
	npm start stage

build:
	npm run build
