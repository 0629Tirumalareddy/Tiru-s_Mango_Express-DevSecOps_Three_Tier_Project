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
