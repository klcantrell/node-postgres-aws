# node-postgres-aws

### Contains a simple setup for deploying a Node app to Lambda that talks to a Postgres database on RDS.

#### To create an SSH tunnel into RDS instance

1. Create a "bastion host" by spinning up an EC2 instance and putting it in the same VPC as the RDS instance
2. Use `ssh` command to enable port forwarding
    * e.g. `ssh -i [auth certificate] -L [local port]:[database host]:[remote port] [username]@[remote host]`
    * this essentially lets you look at a port on your local machine with something like pgadmin to send/receive data over to the database host (RDS instance) via the SSH tunnel established by the remote host (EC2 instance)

#### To setup the EC2 bastion host for running migrations with sequelize-cli

1. Use `ssh` command to connect to EC2 instance
    * `ssh -i [auth certificate] [username]@[remote host]`
2. Install nvm then node onto EC2 instance
3. npm install sequelize-cli, sequelize, and pg.
4. Quit `ssh` and `scp` the .sequelizerc file as well as any migration files
    * `scp -i [auth certificate] [file-path] [username]@[remote host]:[remote-path]`
5. Make sure the DB config file allows for an SSL connection (see this repo for example)
6. Run the sequelize command and pass in the db connection string
    * `./node_modules/.bin/sequelize db:migrate --url [connection string]`