# Containerization and Docker & CI/CD

## Containerization

### Limitations of Virtual Machines

- Many advantages of virtualization, such as application containment and horizontal scalability, come at a cost: resources. The guest OS and binaries can give rise to duplications between VMs wasting server resources, memory and disk space and limiting the number of VMs each server can support.  
  虚拟化的许多优势（例如应用程序控制和水平可扩展性）都是==以资源为代价的==。single host OS和二进制文件可能会导致 VM 之间的重复，从而浪费服务器资源、内存和磁盘空间，并限制每个服务器可以支持的 VM 数量。 
- Containerization allows instances (i.e. containers) to share a single host OS (and associated drivers, binaries, and libraries) to reduce wasted resources since each container only holds the  application and its related binaries
  ==容器化允许instances (i.e. containers)共享单个single host OS（以及相关的驱动程序、二进制文件和库）==，以减少资源浪费，因为每个容器只保存应用程序及其相关二进制文件

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

Goals:  
- Simplify container management processes  简化容器管理流程
- Help to manage availability and scaling of containers 帮助管理容器的可用性和扩展

> [!note]
> **容器编排 (Container Orchestration)** 是一种**自动化管理、部署、扩展和运维大量容器**的技术。容器编排工具就是实现这种自动化的平台。
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
  containers 在物理网络上获取自己的 IP（就像一台真正的机器）。
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

**E.g. ES Lint 在你的项目中会检查什么？**

1. **代码风格一致性**：
    - 变量命名是否遵循驼峰式 (camelCase)。
    - 是否使用了单引号或双引号。
    - 代码缩进是使用空格还是 Tab。
    - 函数、类和变量的声明方式是否一致。
2. **潜在的语法和逻辑错误**：
	- 未使用的变量
	- React Hooks 的规则
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
**End-to-End Tests** - examines the complete flow of an application from start to finish to ensure  
the system meets the specified requirements and behaves as expected  E2E 测试是最高层级的测试，它从用户的视角来验证整个系统的功能。它不关心内部实现，只关心输入和输出。这通常会使用像 Cypress 或 Playwright 这样的自动化测试工具来完成，它们可以驱动一个真实的浏览器进行操作。

**Benefits**  

- Comprehensive Coverage 全面覆盖
- Improve Team Collaboration 改善团队协作
- Higher Software Quality 更高的软件质量


#### Pack the Software

#### Deployment

## Workshop

### Package Manager

- **APT (Advanced Packaging Tool)**: 这是 **Ubuntu** 系统上的软件管家。
    
    - `sudo apt update`: 更新可安装的软件包列表（不是升级软件）。
    - `sudo apt upgrade`: 将已安装的所有软件包升级到最新版本。
    - `sudo apt install <包名>`: 安装一个新软件包。
        
- **Homebrew**: 这是 **macOS** 系统上最流行的软件管家（也支持 Linux）。
    
    - `brew install <包名>`: 安装一个新软件包及其依赖。
    - `brew upgrade`: 升级所有可升级的软件包。
    

---

### `jq` & `asdf`

#### `jq` - JSON processor

- **用途**: 一个轻量级的命令行工具，专门用来处理（解析、筛选、转换）JSON 格式的数据。 在与 OpenStack API 交互时，返回的结果常常是 JSON 格式，`jq` 在这种场景下非常有用。

- **提取所有员工的姓名** ：

    ```Bash
    jq '.employees[].name' data.json
    ```
    
- **添加一个新员工到 employees 数组中** ：
    
    ```Bash
    jq '.employees += [{"name": "Jane Doe", "age": 25, "department": "Design"}]' data.json
    ```
    
- **添加新员工并将更改保存回原文件** ： 这个例子展示了如何通过一个临时文件 (`tmp.json`) 来安全地覆盖原文件 。
    
    ```Bash
    jq '.employees += [{"name": "Jane Doe", "age": 25, "department": "Design"}]' data.json > tmp.json && mv tmp.json data.json
    ```
    
- **从 employees 数组中删除名为 "Jane Doe" 的员工** 
    
    ```Bash
    jq '.employees |= map(select(.name != "Jane Doe"))' data.json
    ```

#### `asdf` - version manager

- **用途**: 一个统一的工具，用来管理多种开发工具（如 kubectl, helm）的**不同版本**。
- **核心流程**: 先添加插件 (`asdf plugin add`)，再安装指定版本 (`asdf install <工具名> <版本号>`)，最后设置在当前目录或全局使用的版本 (`asdf local` 或 `asdf global`)。
- 如果项目A需要用 1.20 版本的 `kubectl`，而项目B需要用最新的 1.31.1 版本 ，你不需要反复卸载安装。用 `asdf` 就可以在两个项目目录间**一秒切换**，让它们使用各自指定的版本，互不干扰。
- 有点像nvm

---

### Pipeline & Substitution

#### Unix pipeline (`|`)

- **用途**: 将前一个命令的**标准输出 (STDOUT)**，直接作为后一个命令的**标准输入 (STDIN)**。
- **例子**: `openstack flavor list | grep 'uom.mse.2c9g' | awk '{print $2}'`
    1. `openstack flavor list`: 列出所有规格。
    2. `| grep 'uom.mse.2c9g'`: 把列表结果交给 `grep`，筛选出包含特定名称的**那一行**。
    3. `| awk '{print $2}'`: 把筛选出的那一行交给 `awk`，打印出**第二个字段**（也就是 ID）。

#### 命令替换 `$()`

- **用途**: shell 会先执行 `$(...)` 括号中的命令，然后将整个 `$(...)` 表达式**替换为该命令的输出结果**。
- **例子**: 在创建一个需要 `master-flavor` ID 的命令时，可以直接用 `$(openstack flavor list | ...)` 来动态获取这个 ID，而不用先查询、复制、再粘贴。
    

---

### Advanced SSH

#### `ssh-add`

- **用途**: 将私钥添加到一个“代理”中，这样在当前会话中再次使用该私钥时，就无需重复输入密码。

#### SSH Tunnelling / Port Forwarding

- **用途**: 将网络数据通过一个加密的 SSH 连接来传输。 它可以让你安全地访问一个被防火墙阻挡的远程服务，仿佛该服务就在你的本地机器上。
- **例子**: `-L 8080:<remote>:80` 表示将本地的 8080 端口，通过 SSH 连接，转发到远程服务器的 80 端口。

#### Bastion Host / Jump Host

- **用途**: 一台经过特殊加固、作为访问内部私有网络**唯一入口**的服务器。
- **如何使用**: 你不能直接 SSH 到内部的服务器，必须先 SSH 到堡垒机，然后再从堡垒机“**跳转 (Jump)**”到内部的目标服务器。 SSH 的 `-J` 参数就是为此设计的。

### Docker Basic Instructions

- **Docker 镜像管理**：
    - 登录注册中心：`docker login --username=foo`（公共）或指定私有注册中心
    - 拉取镜像：`docker pull nginx`
    - 列出镜像：`docker images` 或 `docker image ls`
    - 推送镜像：`docker push alwynpan/comp90024:nginx`（可选先用 `docker tag` 重命名).
        
- **Docker 容器管理**：
    - 运行容器：`docker run --name nginx -p 8080:80 -d nginx`（直接运行）或先创建再启动
    - 列出容器：`docker ps`（运行中）或 `docker ps -a`（全部 ）
    - 停止/重启/删除容器：`docker stop nginx`、`docker restart nginx`、`docker rm nginx`（或 `docker rm -f` 删除运行中容器）
    - 访问容器内部：`docker exec -ti nginx bash`（用于调试，不推荐常规使用） 
        
- **数据管理**：
    - 创建卷：`docker volume create htdocs` 
    - 挂载卷或绑定目录：`docker run -v htdocs:/usr/share/nginx/html`（命名卷）或绑定本地目录 

- **构建镜像**：
    - 使用 Dockerfile 构建：`docker build -t demo2 .` 
    - Dockerfile 常用指令：`FROM`（基础镜像）、`ENV`（环境变量）、`WORKDIR`（工作目录）、`COPY`（复制文件）、`RUN`（构建时执行命令）、`ENTRYPOINT`（启动时执行）、`CMD`（默认命令参数） 

### Docker Adv Function

- **Docker Compose**：用于管理多容器应用，如启动 WordPress、MySQL 和 phpMyAdmin 的组合。
    - 启动：`docker compose up -d` 5.
    - 停止/删除：`docker compose stop` 或 `docker compose down` 5.
- **Docker 安全**：
    - 镜像漏洞扫描：`docker scout cves wordpress:6.7.2-php8.1-fpm-alpine` 5.
    - 获取更新建议：`docker scout recommendations` 5.
    - 硬化镜像：使用非 root 用户、只读文件系统运行容器，限制权限 5.
- **Docker 网络**：支持桥接网络、覆盖网络等，用于容器间通信 

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

> [!question|closed] A researcher wants to attach to an already running Postgresql container and list all of the databases it contains. The command to list all of the database is `psql -U postgres -c “\l”`. The name of the container is postgres and it exposes the port 5432 to the host. Is the following command correct? If not, please correct it: `docker exec -p 5432 --name postgres sh -c psql -U postgres -c “\l”`  
> 主要问题是 docker exec 不需要 -p 5432 和 --name，正确命令：`docker exec postgres sh -c "psql -U postgres -c '\l'"`

> [!question|closed] What is the main difference between a container and a virtual machine?  
> 主要区别在于操作系统层面，容器共享宿主内核，虚拟机包含独立操作系统

> [!question|closed] What is the main difference between Docker Compose and Docker SWARM?  
> Compose 用于单机多容器，Swarm 用于多主机集群管理

> [!question|closed] What is the main difference between a volume mount and a bind mount?  
> volume 存储于专属路径，bind mount 为文件目录映射

> [!question|closed] What do the following Docker commands do?  
> docker service create --replicas 2 --name nginx nginx  
> docker service update --image=nginx:alpine nginx  
> 前者为 swarm 服务创建，其中一个是创建副本，另一个为镜像升级

