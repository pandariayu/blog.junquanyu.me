# Containerization and Docker & CI/CD

## Containerization

### Limitations of Virtual Machines

- Many advantages of virtualization, such as application containment and horizontal scalability, come at a cost: resources. The guest OS and binaries can give rise to duplications between VMs wasting server resources, memory and disk space and limiting the number of VMs each server can support.  
  虚拟化的许多优势（例如应用程序控制和水平可扩展性）都是==以资源为代价的==。single host OS和二进制文件可能会导致 VM 之间的重复，从而浪费服务器资源、内存和磁盘空间，并限制每个服务器可以支持的 VM 数量。 
- Containerization allows instances (i.e. containers) to share a single host OS (and associated drivers, binaries, and libraries) to reduce wasted resources since each container only holds the  application and its related binaries
  容器化允许instances (i.e. containers)共享单个single host OS（以及相关的驱动程序、二进制文件和库），以减少资源浪费，因为每个容器只保存应用程序及其相关二进制文件

### Virtual Machines vs Containers
![](./images/Pasted%20image%2020250620212653.png)


| Feature          | Docker Engine                       | VM                                        |
| ---------------- | ----------------------------------- | ----------------------------------------- |
| Boot time        | Seconds                             | Minutes                                   |
| Startup overhaed | Very low (share host OS Kernel)     | High (Boots a full OS per VM)             |
| Disk usage       | Small (MBs to a few hundred MBs)    | Large (GBs per VM image)                  |
| Memory usage     | Low (shared libraries, no full OS)  | ==High== (each VM needs its own OS RAM)   |
| Performance      | ==Near-native==                     | Slightly slower due to hardware emulation |
| Isolation level  | Process-level (namespaces, cgroups) | Full OS isolation ==(stronger, heavier)== |

When deploying applications on the cloud, the base computation unit is a Virtual Machine. Usually, containers are deployed on top of VMs.
在云上部署应用程序时，基本计算单元是虚拟机。**通常，容器部署在 VM 之上**。

> [!question] Are Containers Better than VMs?
> - The size of the task at hand (A simple python script)
> - The life span of the application (A short-lived test application)
> - Security concerns (What packages are allowed? Images can be a black box)
> - Host operating system (Run native windows application on Linux)

> [!note] Container
> - **Lightweight**, **portable** box that wraps up your app and everything it needs to run in it
>   轻巧便携的盒子，用于包装您的应用程序及其运行所需的一切
> - *Lightweight*: Similar concept of resource isolation and allocation as a virtual machine without bundling the entire environment and full OS.  
>   与虚拟机的资源隔离和分配概念类似，无需捆绑整个环境和完整作系统。
> - *Portable*: If it works on your laptop, it SHOULD work on a server, a VM, or on the cloud
>   如果它可以在您的笔记本电脑上运行，那么它应该可以在服务器、VM 或云上运行

### Container Orchestration Tools

Container orchestration technologies provide a framework for integrating and managing containers at **scale** 容器编排技术提供了一个框架，用于大规模集成和管理容器

Container orchestration technologies feature  
- Networking  
- Scaling  
- Service discovery and load balancing  
- Health check and self-healing  
- Security  
- Rolling updates  
- 
Goals:  
- Simplify container management processes  简化容器管理流程
- Help to manage availability and scaling of containers 帮助管理容器的可用性和扩展
## Introduction to Docker

### Docker Nomenclature 命名法

- Container: a process that behaves like an independent machine, it is a runtime instance of a docker image.  
-  Image: a blueprint for a container.  
- layer: modification to the image, represented by an instruction in the Dockerfile.  
- Dockerfile: the recipe to create an image.  
- Build: the process of building Docker images.  
- Registry: a hosted service containing repositories of images, e.g., Docker Hub
- Docker Hub: a centralized resource for working with Docker and its components  
- Repository: a set of Docker images.  
- Tag: a label applied to a Docker image in a repository.  
- Compose: Compose is a tool for defining and running multi-container Docker applications.

### Manage Data in Docker

- By default, data inside a Docker container won’t be persisted when a container no longer exists. 
- You can copy data in and out of a container.  
- Docker has two options for containers to store files on the host machine, so that the files are persisted even after the container stops.  
	- Docker volumes (Managed by Docker, /var/lib/docker/volume/)  
	- Bind mounts (Managed by user, anywhere on the file system)

### Docker Networking

Docker has different networking options:  
- **host**: every container uses the host network stack; which means all containers share the same IP address, hence ports cannot be reused in different containers 每个容器都使用主机网络堆栈;这意味着所有容器共享相同的 IP 地址，因此端口不能在不同的容器中重复使用
- **bridge**: containers can re-use the same port, as they have different IP addresses, and expose a port of their own that belongs to the hosts, allowing containers to be somewhat visible from the outside.  容器可以重用相同的端口，因为它们具有不同的 IP 地址，并公开属于主机的自己的端口，从而允许容器从外部可见。
- **none**: no network, completely isolated. i.e. No access from outside, no access to the outside. 无网络，完全隔离。即不能从外部出来，不能从外部进入。
- **overlay**: used in Docker SWARM for multi-host communications.  在 Docker SWARM 中用于多主机通信。
- **macvlan**: containers gets its own IP on the physical network (like a real machine)
  containers 在物理网络上获取自己的 IP（就像一台真正的机器一样）。
### Security & Dockers Hardening

- Use official or trusted images  
	- Prefer official repos, avoid unknow images  
- Run the containers as a ==Non-Root user==  
	- Use a non-root user to run your application  
- Minimize the container size  
	- Smaller size == ==smaller attack surfaces==  
- Scan images for vulnerabilities  漏洞
	- Fix known CVEs (Common Vulnerabilities and Exposures) and bugs  
	- docker scan etc.  
- Limit network and volume access  
	- Don’t expose unnecessary ports  
	- Mount only required volumes with strict permissions  
	- Read-only FS if possible  
- Keep Docker engine up-to-date

## CI/CD Pipeline: From Commit to Deployment

> [!quote] Heart of the modern software engineering practices: **Continuous Integration and Continuous Delivery**
Enables developers to integrate code changes more frequently and reliably  
Ensures that software products are delivered with quality, speed and efficiency

### Continuous Integration (CI)  

- Developers frequently push code changes  
- Automatically verified by building the code and running the automated tests  
- Aiming to detect fix errors quickly  

**Benefits**  

- Automated building and testing 自动化构建和测试
- Early Error Detection 早期错误检测
- Increased Transparency  提高透明度
- Faster Release Cycles 更快的发布周期

### Continuous Delivery (CD)  

- Code changes are automatically deployed after passing the CI 
   通过 CI 后，会自动部署代码更改
- Automate the release of new features or bug fixes without human intervention
  自动发布新功能或错误修复，无需人工干预

**Benefits**

- Automated Deployment Process  自动化部署流程
- Frequent and Smaller Releases  频繁和较小的发布
- Efficiency and Productivity 效率和生产力

### CI/CD Pipeline

CI/CD Pipeline - Integrates the CI/CD practices, the tools, and stages that software changes undergo from development to deployment  
CI/CD 管道 - 集成 CI/CD 实践、工具和软件更改从开发到部署所经历的阶段

**CI/CD Pipeline Tools**

- Jenkins – open source, plugin-based. Leader in CI/CD space  
- GitHub Actions – GitHub’s integrated CI/CD tool  
- GitLab CI/CD – GitLab’s integrated CI/CD tool  
- Azure Pipelines – Azure DevOps’ CI/CD tool  

### The Pipeline Stages

#### Lint Check

Running a tool (commonly known as a linter) on source code to analyze it for potential errors, styling issues, and deviations from coding standards  
在源代码上运行工具linter，以分析其是否存在潜在错误、样式问题和与编码标准的偏差

**Benefits**

- Improving Code Quality  提高代码质量
- Ensure Consistency  确保一致性
- Early Detection of Errors  及早发现错误

#### Dependency Check

Ensures your code is not only functional but safe from threats. Automatically audit every change,  
ensuring the application is secure by design.  确保您的代码不仅功能强大，而且免受威胁。自动审核每个更改,确保应用程序在设计上是安全的。 

**Benefits**

- Vulnerability Detection  漏洞检测
- Reputable Database of Known Vulnerabilities  信誉良好的已知漏洞数据库
- Reporting and Tracing 报告和跟踪

#### Code Quality Analysis

Systematic examination of source code to identify bugs, errors, vulnerabilities, and any aspects of  
the code that do not adhere to predefined coding standards and best practices  
系统地检查源代码以识别错误、错误、漏洞和不符合预定义编码标准和最佳实践的代码 

**Benefits** 

- Improve Code Maintainability 提高代码可维护性
- Increase Code Reliability  提高代码可靠性
- Enhance Security  增强安全性
- Code Smells Identification

#### Unit Tests

Unit tests - a type of software testing where individual components or units (e.g. functions) of a  
software are tested in isolation from the rest of the application  
单元测试 - 一种软件测试类型，其中单个组件或单元（例如函数）软件与应用程序的其余部分隔离测试 

**Benefits**
- Early Bug Detection  
- Facilitates Changes  
- Simplifies Integration  
- Improves Code Quality

#### Integration/E2E Tests

**Integration Tests** - focuses on the interactions between integrated components or systems to  
detect interface defects  侧重于集成组件或系统之间的交互，以检测接口缺陷 
**End-to-End Tests**- examines the complete flow of an application from start to finish to ensure  
the system meets the specified requirements and behaves as expected  从头到尾检查应用程序的完整流程，以确保系统满足指定的要求并按预期运行 

**Benefits**  

- Comprehensive Coverage 全面覆盖
- Improve Team Collaboration 改善团队协作
- Higher Software Quality 更高的软件质量

#### Pack the Software

Build Docker image

#### Deployment


## Exam questions

> [!question|closed] 以下关于Docker组件的描述，正确的是（）
> - Dockerfile中只能指定官方基础镜像，不能用自定义基础镜像
> - 一个Container只能对应一个固定版本的Image, 无法基于同一Image创建不同状态的Container
> - Registry仅用于存储Docker官方发布的Image, 用户无法上传自己的Image
> - Layer 机制实现了Image的分层存储和增量构建，多个Layer堆叠组成Image

> [!question|closed] 关于Docker以下描述正确的是
> - SWARM Mode只能管理单个主机上的Docker容器，无法实现集群管理
> - Build过程只是将Container打包成Image的操作
> - 多个Repository组成一个Registry，Registry 只能有一个Repo 用于存储Image
> - Container 是基于image创建的运行实例，运行着应用所需的代码


