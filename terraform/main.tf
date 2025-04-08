resource "aws_instance" "devops_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type

  tags = {
    Name = "DevOpsMERN"
  }
}