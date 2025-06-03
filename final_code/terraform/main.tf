terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "devops_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type

  tags = {
    Name = "devops-server"
  }
}
