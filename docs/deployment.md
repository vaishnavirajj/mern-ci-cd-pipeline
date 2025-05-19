# Deployment Guide

This document outlines several methods to deploy the MERN application depending on your environment and requirements.

## Docker Compose (local development)

1. Ensure Docker and Docker Compose are installed on your machine.
2. Navigate to the project root and run `docker-compose up -d` to start MongoDB, the back‑end and the front‑end.
3. Access the API at `http://localhost:5000` and the front‑end at `http://localhost:3000`.

## Kubernetes

1. Build and push Docker images for the back‑end and front‑end to a registry accessible by your cluster.
2. Update the image references in the manifests under `kubernetes/` or in the Helm chart values file.
3. Apply the manifests: `kubectl apply -f kubernetes/` or package and install the Helm chart with `helm install mern-release helm-chart/`.
4. Expose the services via an ingress controller or `kubectl port-forward` for local access.

## Ansible

1. Edit `ansible/inventory.ini` to list your target hosts under the appropriate groups (`app_servers`, `db_servers`).
2. Run `ansible-playbook -i ansible/inventory.ini ansible/site.yml` to provision the servers (install Docker and Docker Compose) and deploy the application.

## Terraform

1. Review and customise variables in `terraform/variables.tf` and `terraform.tfvars.example`.
2. Run `terraform init` to initialise the provider and modules.
3. Run `terraform apply` to provision the infrastructure.  Terraform will output the EC2 instance details and security group ID after provisioning.
4. Use the Ansible playbook to configure the provisioned instance.

## Monitoring Stack

1. In the `monitoring` directory run `docker-compose up -d` to start Prometheus, Grafana, Loki, Promtail and Alertmanager.
2. Access Grafana at `http://localhost:3001` (default credentials `admin/admin`) and import dashboards from `monitoring/grafana-dashboards`.
3. Configure Slack webhooks in `monitoring/alertmanager.yml` to receive alerts.

This guide provides high‑level instructions; see the README files in each step for specifics.