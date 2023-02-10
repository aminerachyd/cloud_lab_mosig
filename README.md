# Microservices lab - M2 MoSIG

## Authors

Amine RACHYD (@aminerachyd) - amine.rachyd@grenoble-inp.org  
Alla HINDIR (@AllaHINDIR) - alla.hindir@grenoble-inp.org

## Introduction

This is our report for microservices lab, we deployed a microservices architecture application using JHipster on Kubernetes. Some instructions did not work as expected, so we had to adapt them to make it work.

## Deployment of Microservices with JHipster on GCP

We generate the Kubernetes manifests:

![Kubernetes manifests](/images/1.png)

And we tag and push the images on Dockerhub:

![Dockerhub images](/images/2.png)

We create the GKE cluster, then we deploy the services using the script kubectl-apply.sh:

![Services deploy](/images/3.png)

We can also see the services deployed on the GCP dashboard

![Services deploy - GCP dashboard](/images/4.png)

## Enabling scalability on GCP for one microservice

We can choose to manually scale some services, for instance the gateway service and its database, we'll scale them to 4 replicas instead of 1:  
![Services scaling](/images/5.png)

## Monitoring dashboard

The prometheus/grafana dashboard that is generated with the ode doesn't seem to be working. It requires a bit of setup (installing some CRDs, modifying some RBAC rules) and it doesn't provide any data after the installation:

![JHipster metrics](/images/6.png)

There is probably a problem with prometheus, but we couldn't debug it properly.  
Instead, we will be using the prometheus/grafana provided here:
[https://github.com/prometheus-operator/kube-prometheus#quickstart](https://github.com/prometheus-operator/kube-prometheus#quickstart)

After installing, we get many dashboards available, this one for example presents resource usage per namespace on the cluster:

![Resources namespaces](/images/7.png)

But we can also use the GKE monitoring dashboard

![GKE monitoring](/images/8.png)

## Load injection with Gatling for demonstrating scalability

For this part we will test load injection on the Gateway, we create an autoscaler (HPA) for the gateway service that ranges from 1 to 10 replicas, and an autoscaler for the gateway's database taht ranges from 1 to 3 replicas

![HPA gateway](/images/9.png)

We had issues running Gatling the way it is described in previous parts of the lab (must use java 8, but isn't able to run simulation scripts generated by JHipster)

We proceeded another way: Using a Docker container image that runs Gatling and sends GET requests to the gateway  
We used the following command to launch the load injection using Gatling:

```bash
docker run -v $(pwd)/app:/app/results -it -e JAVA_OPTS="-DbaseUrl=http://35.233.96.81:8080/ -DdurationMin=0.25 -DrequestPerSecond=100" -e SIMULATION_NAME="gatling.test.example.simulation.ExampleGetSimulation" --ulimit nofile=122880:122880 -m 3G aminerachyd/gatling-loadtest
```

A few notes on the command:

- 35.233.96.81 is the public IP of the gateway, we used a Kubernetes loadbalancer service to expose it
- The Docker image we used is based on a Docker image ([https://github.com/jecklgamis/gatling-test-example](https://github.com/jecklgamis/gatling-test-example)) that runs Gatling and keeps the container alive after, while the container is alive we mount the Gatling results folder to the host machine so we can retrieve the Gatling report after the load injection is done

Using the previously deployed Grafana dashboard, we can see the stats for the load test, we can see that the number of the gateway replicas increases over time:

![CPU usage gateway](/images/10.png)  
![Memory usage gateway](/images/11.png)

The gateway deployment scales to the max number of replicas we allowed

After the Gatling test terminates, we get the following report (files availavble on the Github repository):

![Gatling report](/images/12.png)

### Load injection with another tool (k6)

Initially we struggled with setting up Gatling, so we decided to use another tool to inject load on the gateway, we used [https://k6.io/docs/](k6)

Same as the previous configuration, we can configure an autoscaler for the gateway service for it to scale when the CPU usage exceeds a certain threshold

When the system is idle, it operates with 4 replicas, we can see that in the Grafana dashboard:

![Idle system](/images/13.png)

To simulate a load test with k6, we will perform a simple GET request to the gateway, we can write our test in JavaScript file as follows:

```javascript
import http from "k6/http";

export default function () {
  http.get("http://35.233.96.81:8080/");
}
```

We first run it with 100 parallel executions for 20sec, the system managed to answer to 10435 requests without having to scale

![k6 100 parallel executions](/images/14.png)

We run another scenario, this time with 1000 parallel executions for 1min, the system was able to answer 38440 requests while scaling up:

![k6 1000 parallel executions](/images/15.png)

The current configuration couldn't handle it correctly so it had to scale up automatically

![Services scaling](/images/16.png)

We can see the newly created pods in grafana:

![Grafana dashboard scaling](/images/17.png)

After the system idles again, it goes back to 4 replicas

![System idles again](/images/18.png)

We can see the whole graph of CPU usage in grafana here:

![Grafana dashboard scaling 2](/images/19.png)
