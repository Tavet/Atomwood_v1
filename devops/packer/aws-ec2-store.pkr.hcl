packer {
  required_plugins {
    amazon = {
      version = ">= 0.0.2"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

variable "aws_region" {
  type = string
  default = env("AWS_DEFAULT_REGION")
}

variable "aws_access_key_id" {
  type = string
  default = env("AWS_ACCESS_KEY_ID")
}

variable "aws_secret_access_key" {
  type = string
  default = env("AWS_SECRET_ACCESS_KEY")
}

variable "github_token" {
  type = string
  default = env("REPO_TOKEN")
}

source "amazon-ebs" "atomwood-store" {
  ami_name        = "atomwood-store-linux-image"
  ami_description = "Atomwood Wordpress Deployment AMI v1.0.0 - No scaling"
  instance_type   = "t2.micro"
  region          = "us-east-1"
  source_ami_filter {
    filters = {
      name                = "amzn2-ami-hvm-2*-x86_64-gp2"
      root-device-type    = "ebs"
      virtualization-type = "hvm"
    }
    most_recent = true
    owners      = ["amazon"]
  }
  ssh_username = "ec2-user"
}

build {
  name    = "atomwood-store"
  sources = [
    "source.amazon-ebs.atomwood-store"
  ]

  provisioner "shell" {
    execute_command  = "echo 'packer' | sudo -S sh -c '{{ .Vars }} {{ .Path }}'"
    environment_vars = ["GITHUB_TOKEN=${var.github_token}"]
    script           = "ec2instance.sh"
    timeout          = "30s"
  }
}
