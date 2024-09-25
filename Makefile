build:
	docker build -t bloggers-landing .

run:
	docker run -d --name bloggers-landing -p 3000:3000 bloggers-landing

stop:
	docker stop bloggers-landing
	docker rm bloggers-landing