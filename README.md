# Performance Testing of Cloud Service Providers

## Preparation

Install the Serverless Framework and provider dependencies
```
npm install -g serverless serverless-openwhisk serverless-google-cloudfunctions serverless-azure-functions
npm install
```

Due to known bugs, some serverless plugins need to installed also locally. Use `npm link` for it.

### Authentication
It is assumed that the accounts at the Cloud Service Providers were created and that the serverless framework is aware (by configuration) of the login credentials. During the deployment step, warnings are shown or authentication is done, which simplifies it. Also, the documentation of the Serverless Framework covers these topics.

Installing the Cloud Service Providers tool can assist in resolving errors as well (`aws-cli`, `az`, `bx`, `gcloud`).

## Deployment
Run `./switchPlatfrom.sh` to choose the Cloud Service Provider to deploy to.

Run `sls deploy` to deploy the functions.

Last, adjust the deployments urls in the `./getRequest.sh` script.

## Execution of performance test
Run the `./getRequest.sh` script. Due to the long execution time, you might want to run it in the background and keep the output. Then use i.e. `nohup ./getRequest.sh >> getRequest.log &`.

Be sure that logging on the Cloud Service Provider is enabled and you know how to get the logs from there.
