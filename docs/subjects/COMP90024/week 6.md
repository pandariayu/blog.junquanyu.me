# Lecture 11 & 12 - Kubernetes & ReST

## Part 1: Container Orchestration and Kubernetes

- The development of Docker containers brought the need to manage the lifecycle of containers, handle communications between them, discover services offered by containers, and distribute them across different compute nodes. In other words: container orchestration 
   Docker 容器的开发带来了管理容器生命周期、处理容器之间的通信、发现容器提供的服务以及将它们分布在不同计算节点之间的需求。换句话说：容器编排 
- Just as operating systems (MacOS, Linux, etc) manage resources on a single computer (memory, files, network sockets), container orchestration tools manage resources on multiple compute nodes (services, containers, volumes, nodes, etc)  
  正如作系统（MacOS、Linux 等）管理单台计算机上的资源（内存、文件、网络套接字）一样，容器编排工具管理多个计算节点（服务、容器、卷、节点等）上的资源
-  You can think of container orchestration tool as: operating systems for the  cloud
   您可以将容器编排工具视为：云作系统
- Some examples of container orchestration platforms are Apache Mesos, Docker Compose (covered in another lecture), Docker Swarm, and  Kubernetes (covered in this lecture)  
  容器编排平台的一些示例包括 Apache Mesos、Docker Compose（在另一场讲座中介绍）、Docker Swarm 和 Kubernetes（在本讲座中介绍）
- Container Orchestration tools tend to follow two principles: Declarative Application Management, and Infrastructure as Code
  容器编排工具往往遵循两个原则：声明式应用程序管理和基础设施即代码
## Part 2: Kubernetes at MRC

## Part 3: Hands-on Kubernetes

