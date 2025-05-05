.PHONY: install build test seed docker-up helm-package

# Install dependencies for both services
install:
	npm install --prefix back-end
	npm install --prefix front-end

# Build the front‑end and prepare the back‑end
build:
	./scripts/build.sh

# Run back‑end tests
test:
	npm test --prefix back-end

# Seed the database with sample data
seed:
	npm run seed --prefix back-end

# Start the application stack using Docker Compose
docker-up:
	docker-compose up -d

# Package the Helm chart into a tarball in the current directory
helm-package:
	helm package helm-chart