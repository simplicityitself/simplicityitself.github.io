---
title: INtroducing Muon, Microservices Communication Done Right
layout: article
author: David Dawson
date: 2016-11-03 11:00
image: images/vis/clouds1.jpg
categories:
 - muon
tags:
 - cloudnative
 - continuousdelivery
 - microservices
 - muon

---

## Overview

https://docs.cloudfoundry.org/services/api.html

## Setting up

Follow the instructions at https://github.com/swagger-api/swagger-node

Install swagger

`npm install -g swagger`

create the applicaiton

swagger project create muon-cf-service-broker

I chose express for the project runtime.

we need cors support to use the swagger editor.

`npm install --save cors`


Then start up your app

`swagger project start`

get the service yaml file https://github.com/cloudfoundry-incubator/cf-swagger/tree/master/descriptions/cloudfoundry/service_broker

Update the port

Go to the swagger editor, and paste in the yaml

http://editor.swagger.io/#/

Start implementing the various pieces of the API

### Create the Muon based repository

`npm install --save muon-core`

### Catalog

Create a new controller in /api/controllers/catalog.js

This is a normal node module. The return is a reference of
`operationId` to function.

```$javascript
'use strict';
module.exports = {
  catalog: hello
};

function hello(req, res) {
  res.json({
      "services": [{
          "name": "muon-service",
          "id": "acb56d7c-1111-1111-1111-feb140a59a66",
          "description": "Muon Integration",
          "tags": ["muon"],
          "max_db_per_node": 5,
          "bindable": true,
          "metadata": {
              "provider": {
                  "name": "Muon Core Ltd"
              },
              "listing": {
                  "imageUrl": "http://muoncore.io/images/muonlogo.png",
                  "blurb": "Muon Integration",
                  "longDescription": "Muon is cool"
              },
              "displayName": "Muon"
          },
          "dashboard_client": {
              "id": "398e2f8e-XXXX-XXXX-XXXX-19a71ecbcf64",
              "secret": "277cabb0-XXXX-XXXX-XXXX-7822c0a90e5d",
              "redirect_uri": "http://localhost:1234"
          },
          "plan_updateable": false,
          "plans": [{
              "name": "fake-plan",
              "id": "d3031751-XXXX-XXXX-XXXX-a42377d3320e",
              "description": "Shared fake Server, 5tb persistent disk, 40 max concurrent connections",
              "max_storage_tb": 5,
              "metadata": {
                  "cost": 0,
                  "bullets": [{
                      "content": "Shared fake server"
                  }, {
                      "content": "5 TB storage"
                  }, {
                      "content": "40 concurrent connections"
                  }]
              }
          }]
      }]
  });
}
```

Update swagger.yaml to include a reference to the new controller

```$json
paths:
  /catalog:
    x-swagger-router-controller: catalog
```

Now test the endpoint

```
curl http://localhost:10010/v2/catalog
```

## Service Instance

add new controller - service-instance.js

update the yaml to refernece this in the 

Note the `operationId` field is set to `createServiceInstance`

We will implement that first.

## Testing Integration

Get hold of a cloud foundry that supports space scoped services

Use PCF Dev to test locally using a full cloud foundry in a box.

