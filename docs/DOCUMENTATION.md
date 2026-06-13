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
