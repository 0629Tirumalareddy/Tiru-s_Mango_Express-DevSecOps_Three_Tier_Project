# Tiru's Mango Express — DevSecOps Three-Tier Project

## Overview
Tiru's Mango Express is a mini e-commerce web application that connects 
mango farmers directly to customers. Built as a three-tier application 
(React frontend, Node/Express backend, MongoDB database), deployed on 
Kubernetes with full DevSecOps practices including security scanning, 
CI/CD pipelines, ingress-based load balancing, and Prometheus/Grafana 
monitoring.

## Tech Stack
- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Containerization**: Docker
- **Orchestration**: Kubernetes (Minikube/Kind)
- **Load Balancing**: NGINX Ingress Controller
- **Monitoring**: Prometheus + Grafana
- **Security**: Trivy, SonarQube, npm audit
- **CI/CD**: GitHub Actions

## Project Structure
tirus-mango-express/

├── backend/      # Express API + MongoDB models

├── frontend/     # React application

├── k8s/          # Kubernetes manifests

└── docs/         # Documentation & diagrams
tirus-mango-express/

├── backend/      # Express API + MongoDB models

├── frontend/     # React application

├── k8s/          # Kubernetes manifests

└── docs/         # Documentation & diagrams

## Phase 2 — Backend Development
- Initialized Node.js project with Express, Mongoose, CORS, dotenv, prom-client
- Created Mango and Order Mongoose models
- Built REST API endpoints:
  - GET /api/mangoes — list all mango varieties
  - GET /api/mangoes/:id — single mango details
  - POST /api/orders — place new order
  - GET /api/orders — list all orders
- Added /health endpoint for Kubernetes liveness/readiness probes
- Added /metrics endpoint exposing Prometheus metrics (request counts, default Node.js metrics)
- Created seed.js to populate database with 8 mango varieties
- Tested locally with MongoDB running in Docker container

## Phase 3 — Frontend Development
- Created React app using Vite
- Built components:
  - Hero — banner section
  - MangoCard — displays individual mango variety with add-to-cart
  - Cart — shows selected items, quantities, total price
  - CheckoutForm — captures customer name, phone, address
  - OrderConfirmation — order success screen
- Connected frontend to backend via Axios (api.js), using VITE_API_URL env variable
- Implemented full user flow: browse mangoes → add to cart → checkout → place order → confirmation
- Tested locally against backend running on localhost:5000
## Phase 4 — Docker Compose (Local Testing)
- Created multi-stage Dockerfiles for backend (Node/Alpine) and frontend (Nginx/Alpine)
- Added nginx.conf to serve React app and proxy /api calls to backend container
- Created docker-compose.yml to orchestrate all 3 services (frontend, backend, mongo)
  on a shared Docker network (mango-network)
- Updated frontend .env to use /api as base URL (nginx handles proxying)
- Verified full app flow works inside containers end-to-end
- Key Docker concepts used:
  - Multi-stage builds to keep images small and secure
  - Non-root user in backend container (security best practice)
  - Named volumes for MongoDB data persistence
  - Bridge networking for inter-container communication
## Phase 5 — Kubernetes Deployment
- Started Minikube with Docker driver (4GB RAM, 2 CPUs)
- Enabled NGINX Ingress Controller addon
- Created dedicated namespace: mango-express
- MongoDB: StatefulSet + PVC (1Gi persistent storage) + headless Service
- Backend: Deployment (2 replicas) + ClusterIP Service
  - Liveness & readiness probes on /health endpoint
  - Resource limits set for CPU and memory
  - MONGO_URI injected securely from Secret
  - PORT injected from ConfigMap
- Frontend: Deployment (2 replicas) + ClusterIP Service
- Ingress: Routes mango.local/ to frontend, mango.local/api to backend
- Added mango.local to /etc/hosts pointing to Minikube IP
- Key Kubernetes concepts used:
  - Namespace: resource isolation
  - Secret: secure credential storage
  - ConfigMap: non-sensitive config injection
  - PVC: persistent database storage
  - StatefulSet: stable identity for MongoDB
  - Deployment: manages stateless app replicas
  - Service (ClusterIP): internal DNS-based routing
  - Ingress: external traffic routing + load balancing
