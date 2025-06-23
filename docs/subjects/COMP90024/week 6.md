# Kubernetes & ReST

## Container Orchestration and Kubernetes

### Container Orchestration

- The development of Docker containers brought the need to manage the lifecycle of containers, handle communications between them, discover services offered by containers, and distribute them across different compute nodes. In other words: container orchestration 
   Docker 容器的开发带来了管理容器生命周期、处理容器之间的通信、发现容器提供的服务以及将它们分布在不同计算节点之间的需求。换句话说：容器编排 
- Just as operating systems (MacOS, Linux, etc) manage resources on a single computer (memory, files, network sockets), container orchestration tools manage resources on multiple compute nodes (services, containers, volumes, nodes, etc)  
  正如操作系统（MacOS、Linux 等）管理单台计算机上的资源（内存、文件、网络套接字）一样，容器编排工具管理多个计算节点（服务、容器、卷、节点等）上的资源
-  You can think of container orchestration tool as: operating systems for the  cloud
   您可以将容器编排工具视为：云操作系统
- Container Orchestration tools tend to follow two principles: Declarative Application Management, and Infrastructure as Code
  容器编排工具往往遵循两个原则：声明式应用程序管理和基础设施即代码

### Principle: Declarative Application Management

> [!quote]
> 给定一个配置期望状态，而非一系列命令

- Declarative application management is the practice of managing software by declaring its desired state rather than through a series of commands or GUI interactions (imperative application management)  
  声明式应用程序管理是通过声明其所需状态而不是通过一系列命令或 GUI 交互（命令式应用程序管理）来管理软件的做法

- Focusing on the desired state allows a container orchestration tool to make the infrastructure self-healing (getting back to the desired state when there are deviations from it, such as failing nodes, crashing containers, etc) 
  专注于所需状态允许容器编排工具使基础设施进行自我修复（当出现偏差时恢复到所需状态，例如节点故障、容器崩溃等）

- Another notable quality is idempotency: applying the same configuration does not alter the system state, reducing the chances of errors. For instance:  
  另一个值得注意的品质是幂等性：应用相同的配置不会改变系统状态，从而减少出错的机会
	- If you issue two “create container” commands, two containers will be created, even when you wanted just one  
	  如果您发出两个 “create container” 命令，将创建两个容器，即使您只需要一个
	- If you issue two desired states “having one container running at any given time”, only one container will be created, as intended  
	  如果您发出两个 Desired State（在任何给定时间运行一个容器），则只会按预期创建一个容器
	- The desired state is usually expressed as a set of YAML or JSON  configuration files
	  所需状态通常表示为一组 YAML 或 JSON 配置文件
### Infrastructure as Code

> [!quote]
> 使用代码配置文件管理设备 一般来说是YAML
> 优点：幂等性 自我恢复能力 基础设施变化可追踪

Infrastructure as Code (IaC) is the practice of using code (mostly configuration files) to manage infrastructure rather than issuing CLI commands or interactions with the GUI of configuration tools  基础设施即代码 （IaC） 是一种使用代码（主要是配置文件）来管理基础设施的做法，而不是发出 CLI 命令或与配置工具的 GUI 进行交互

- The main advantages of IaC are:  
- To keep track of infrastructure changes (using software management tools such as Git)  
  跟踪基础设施更改（使用 Git 等软件管理工具）
- To better document the system architecture (in contrast, the issuing of CLI commands and interactions with a GUI are not recorded)
  为了更好地记录系统架构（相比之下，不会记录 CLI 命令的发出和与 GUI 的交互）

### Compose vs Swarm vs Kubernetes

1. Compose 对应单计算节点多容器管理
2. Swarm 扩展功能到多节点环境
3. K8s 提供更多工具和服务用于构建复杂系统

- Docker Compose allows to define and manage a set of containers that run on the same compute node and cooperate to deliver a functionality (in Kubernetes this is called a “Pod”)  Docker Compose 允许定义和管理一组运行在同一计算节点上的容器，并协作提供功能（在 Kubernetes 中称为“Pod”）
	- An example of a Docker Compose stack: an Nginx container, a WordPress container, and a MySQL container that are linked together to deliver a complete WordPress deployment (as per workshop)  
	- Docker Compose 堆栈的示例：一个 Nginx 容器、一个 WordPress 容器和一个 MySQL 容器，它们链接在一起以提供完整的 WordPress 部署
	
- Docker Swarm extends this capability to a set of compute nodes  
  Docker Swarm 将此功能扩展到一组计算节点

- Kubernetes and Docker Swarm have the same core functionality (managing  containers on a set of compute nodes), but Docker Swarm does not do much beside this, whilst Kubernetes adds powerful abstractions and tools to build complex systems
  Kubernetes 和 Docker Swarm 具有相同的核心功能（管理一组计算节点上的容器），但除此之外，Docker Swarm 并没有做太多事情，而 Kubernetes 添加了强大的抽象和工具来构建复杂的系统

## Kubernetes (K8s)

- **起源:** 它最初由谷歌开发，并于2014年成为一个开源项目。
- **行业标准:** 它是容器编排的行业标准。围绕它已经形成了一个完整的工具生态系统，其中许多由云原生计算基金会（CNCF）管理。
- **方法论:** 在 k8s 中，工程师主要编写 YAML 文件（称为清单 "manifests"）来定义系统配置。也可以使用 JSON。这与基础设施即代码和声明式应用管理的原则相符

### K8s on Cloud

- **商业云:** 像亚马逊网络服务 (AWS)、微软 Azure 和谷歌云 (GC) 这样的主要云提供商，使用 k8s 来管理自己的应用程序，并将其作为托管服务提供给客户 。这些服务分别被称为 EKS (AWS)、AKS (Azure) 和 GKE (谷歌) 。
- **私有集群:** 这些提供商，与墨尔本研究云 (MRC) 类似，允许用户在提供商的基础设施上运行自己的私有 Kubernetes 集群 。
- **MRC 与商业云的对比:** 主要区别在于底层资源的调配方式。MRC 使用 OpenStack，而 AWS 使用其自有的服务如 EC2 。
- **可移植性:** 一旦集群被调配好，无论在哪个提供商上，其行为都基本相同。这使得应用程序可以在不同云之间移植，除非它们依赖于特定于云的服务（如 AWS Aurora） 。

### k8s Architecture

- **组件:** 一个 k8s 集群由一组由主节点 (master node(s)) 管理的节点组成 。其组件分为两个主要平面：
    - **控制平面 (Control Plane):** 负责维护集群的期望状态。它处理诸如调度、存储配置和管理 API 等任务 。它运行在**主节点 (master nodes)上 。
    - **数据平面 (Data Plane):** 负责运行用户指定的实际工作负载（容器） 。它运行在**工作节点 (worker nodes)上 。
- **API:** Kubernetes API，通常在端口 6443 上，是与控制平面交互的入口点 。用户通常通过使用此 API 的命令行 (CLI) 命令进行交互 。
- **趣闻:** Kubernetes 这个名字在希腊语中是“舵手”的意思，这导致其生态系统中有许多航海术语，比如用“清单 (manifests)”来指代配置文件 。

### k8s pros

- **高可用性 (High Availability):** 它通过重启失败的容器，并将其从故障节点重新调度到健康节点，来确保应用程序持续运行 。
- **服务发现 (Service Discovery):** 它为服务分配稳定的 DNS 名称（例如，数据库可以通过像 `pg.dev.svc.cluster.local` 这样的名称访问，而不是一个随时可能改变的 IP 地址） 。
- **智能调度 (Intelligent Scheduling):** 它可以根据需求（例如，需要 GPU 或特定内存量的节点）自动将容器分配到特定节点上 。
- **负载均衡 (Load Balancing):** 它将容器的负载分散到集群中的不同节点上 。
- **多租户/隔离 (Multi-tenancy/Isolation):** 它允许使用命名空间 (namespaces) 在同一个集群上运行应用程序的不同版本（例如，“dev”和“prod”） 。
- **配置管理 (Configuration Management):** 它拥有向容器分发配置数据和设置环境变量的机制

### K8s concept

- **Node (节点):** 一台计算机器，通常是虚拟机 (VM)，是 Kubernetes 集群的一部分 。
- **Volume (卷):** 可以挂载到节点上的持久化存储 。
- **Pod (容器组):** Kubernetes 中最小的可部署单元。它是一组共同工作的一个或多个容器 。
- **Deployment (部署):** 管理一组相同的 Pod (副本)，以确保它们正在运行 。
- **Service (服务):** 一个抽象层，它定义了一组逻辑上的 Pods 和访问它们的策略（例如，通过一个稳定的 IP 地址和端口）。服务通常用于集群内部通信 。
- **Ingress (入口):** 一个管理对集群中服务的外部访问的对象，通常处理基于主机名或路径的 HTTP/S 路由 。
- **ConfigMap (配置映射):** 用于以键值对的形式存储非机密性配置数据，这些数据可以传递给 Pods 。==将配置数据与应用隔离 单独管理==
- **Namespace (命名空间):** 一种在多个用户或团队之间划分集群资源的方式。上面提到的所有对象（除了节点）都被分组到命名空间中 。每个集群都有一个名为 `default` 的命名空间 。

#### Pod

Pod 是k8s调度的最小单位，有自身的生命周期，同时也是k8s最重要、最核心的概念。pod可以包含一个或多个容器，但通常情况只包含一个。

我们直接操纵容器就行了，为什么还要包一层pod呢？
这里体现了k8s概念的核心创造信条：

> [!quote]
>系统设计中没有加一层解决不了的问题，如果有，就再加一层。

- **构成:** 虽然一个 pod 通常只包含一个容器，但对于需要多个紧密耦合的容器在同一节点上一起运行的场景，它是一个有用的抽象 。例如，一个应用容器带一个认证边车 (sidecar)，或者一个 CouchDB 容器带一个 Lucene 搜索引擎容器 。
- **共享资源:** 同一个 Pod 内的容器运行在同一个节点上，共享相同的存储卷和网络命名空间（IP地址和端口空间） 。
- **清单 (Manifest):** Pod 清单必须为 pod 指定一个名称，并为每个容器指定其名称和镜像。它还可以定义环境变量、端口、卷等其他设置 。
- **调度:** 可以使用诸如`亲和性 (affinity)`（应该运行在）和`反亲和性 (anti-affinity)`（不应该运行在）之类的规则，将 Pods 调度到特定类型的节点上运行 。其他机制如 `node selector` 和 `taint/tolerations` 也可以控制调度 。
- **镜像:** Kubernetes 会自动下载指定的容器镜像。对于私有镜像仓库，必须向集群提供凭据 。

![](./images/Pasted%20image%2020250621180933.png)

##### Pros

- **微服务 (Microservices):** Pods 促成了一种基于微服务的、更松散耦合的架构，在这种架构中，应用程序由许多独立的服务构建而成 。
    
- **边车模式 (Sidecar Pattern):** 一种常见的模式是有==一个主应用容器和一个或多个“边车 (sidecar)”容器==，用以扩展或增强其功能 。

    - **日志记录示例:** 应用程序可以将日志写入文件，而一个边车容器可以收集这些日志并将其转发到中央日志系统。这将日志逻辑与应用程序代码解耦 。
    - **HTTP头操作示例:** 一个边车容器可以与主应用一起运行，以添加或剥离 HTTP 头，用于安全或内容丰富化 。
    
- **初始化容器 (Init Containers):** 一个 pod 可以包含特殊的 `init` 容器，这些容器在主应用容器启动_之前_运行并完成。它们用于执行设置任务，比如创建数据库模式或填充数据表 。
#### Deployment & ReplicaSet

- **目的:** Pods 通常由 `Deployment` 来管理 。Deployment 的主要作用是为==一组副本 Pods 声明一个期望状态，并确保该状态得以维持==, 比如维持几个replicas
- **清单示例:** 这个 YAML 示例展示了一个名为 `harvester-flickr` 的 Deployment 。
    ![](images/Pasted%20image%2020250621191400.png)
    - `kind: Deployment`: 指定对象类型 。
    - `replicas: 1`: 声明应该运行一个该 Pod 的实例 。
    - `template`: 这部分定义了 Deployment 将要管理的 Pod。它包括元数据（如 `labels` 标签）和 Pod 的规约 (`spec`) 。
    - `spec.containers`: 定义 Pod 中的容器，包括其 `name`（名称）、要使用的 `image`（镜像）以及任何环境变量 (`env`) 。
    - `affinity`: 这部分展示了一个 `nodeAffinity`（节点亲和性）规则，它强制该 Pod 只能被调度到属于 `default-worker` 节点组的节点上 。。

#### Service

- **目的:** Service 为访问一组 Pods 提供了一个稳定的端点（IP 地址和 DNS 名称）。它将客户端与具体的 Pods 解耦，因为 Pods 可能会被创建和销毁。
- **清单示例:** 该 YAML 定义了一个名为 `couchdb-ingress-service` 的 Service 。
    ![](images/Pasted%20image%2020250621191728.png)
    - `kind: Service`: 指定对象类型 。
    - `selector`: 这是关键部分。它使用标签选择器 (`app: couchdb`) 来确定该 Service 应该将哪些 Pods 作为目标。任何带有此标签的 Pod 都将成为该 Service 的一部分 。
    - `ports`: 这部分定义了端口的映射方式。在这里，它将端口 `80` 上的入站流量映射到目标 Pods 上的 `targetPort` `5984` 。
    - `type: NodePort`: 这种类型的服务会在每个节点的 IP 上暴露该端口，使其可以从集群外部访问（尽管通常与其他方法结合使用） 。

#### Ingress

- **目的:** Ingress 提供了一种管理对集群内部服务的外部访问的方式，通常是 HTTP 和 HTTPS。它可以提供负载均衡、SSL 终端和基于名称的虚拟主机。
- **清单示例:** 该示例展示了一个名为 `couchdb-ingress` 的 Ingress 。
    ![](images/Pasted%20image%2020250621192850.png)
    - `kind: Ingress`: 指定对象类型 。
    - `rules`: 定义路由逻辑。此规则规定，对于任何匹配路径 `/` 的 HTTP 流量 (`http`)，请求应被发送到一个后端 。
    - `backend`: 指定目标。在这里，流量被路由到名为 `couchdb-ingress-service` 的服务的 `80` 端口 。这将由 Ingress 管理的外部流量连接到前一页定义的内部 Service


![](images/Pasted%20image%2020250621185114.png)

#### ConfigMaps

虽然环境变量可以直接在清单中设置，但 `ConfigMaps` 提供了一种更好的方式来管理非敏感的配置数据。它们将配置与应用程序的 Pod 定义解耦，使其更易于管理 。它们就像一个集群范围的字典，任何 Pod 都可以访问
## Kubernetes at MRC

- **安全限制:** MRC 的安全措施使得直接访问变得更加复杂 。
- **访问方法:** 要从个人电脑 (`Client computer`) 使用命令行 (`CLI`) 客户端，必须使用 Kubernetes 的**端口转发 (port forwarding)** 。
- **工作原理:** 这种端口转发通过安全的 Kubernetes API（在端口 6443 上）进行操作 。只有拥有正确 SSL 证书的客户端才能获得访问权限，该证书存储在一个 `Kubeconfig` 文件中 。图表显示，客户端计算机上的 CLI 客户端使用 `Kubeconfig` 文件安全地连接到主节点 (Master Node) 的 API，然后使用端口转发来访问运行在 K8s 集群内工作节点 (Worker Nodes) 上的服务 。

- **Magnum:** 一个 OpenStack 组件，用于调配资源和管理 k8s 集群本身的生命周期 。
- **Kubectl:** 用于向现有 Kubernetes 集群的 API 发送命令并与之交互的主要命令行工具 。
- **Helm:** Kubernetes 的包管理器。它简化了在集群上安装和管理应用程序的过程 。
### Helm

- **目的:** Helm 提供了一种在 Kubernetes 集群上部署应用程序的便捷方式 。它类似于 Python 的 `pip` 或 Node.js 的 `npm` 等包管理器 。
- **Helm Charts:** 应用程序被打包成 **Helm charts**，它们是基于模板的 YAML 清单文件的集合，定义了应用程序所需的所有 Kubernetes 资源 。
- **仓库 (Repositories):** Charts 通常从 Helm **仓库**下载 。
- **定制化:** Helm charts 是可定制的。可以通过命令行设置参数，或提供一个自定义的值 (values) YAML 文件 。

## ReST & Web service

此页介绍了面向服务的架构 (Service-oriented Architecture, SoA) 的概念。

- **问题:** 当软件组件分布在不同的机器上时，它们==无法像在同一台机器上那样通过直接的方法（如简单的函数调用）进行通信 ==。
- **解决方案:** 组件必须以更“==松散耦合==”的方式进行交互 。**服务 (Services)** 通常用于此目的 。
- **定义:** 面向服务的架构 (SoA) 是一种架构模式，其中==应用程序组件通过通信协议（通常是通过网络）向其他组件提供服务 。==

### SoA & Web Service

- **实现方式:** Web 服务是实现面向服务架构的常用方法 。
- **主要类型:** 提到了两种主要的 Web 服务类型 ：
    1. **基于 SOAP (简单对象访问协议) 的 Web 服务:** 一种基于协议的方法。
    2. **基于 ReST (表现层状态转换) 的 Web 服务:** 一种架构风格。
- **共同点:** 两者通常都使用 HTTP 协议，这使它们能够通过网络运行 。


| SOAP                                                                 | ReST                                                |
| -------------------------------------------------------------------- | --------------------------------------------------- |
| 建立在**远程过程调用 (Remote Procedure Call, RPC)** 的范式之上，本质上是一个跨越机器边界的函数调用 。 | 以**资源 (resources)** 的概念为中心，以及如何远程操作这些资源（例如，创建、删除） 。 |
| 是一个正式的协议栈，涵盖了从服务发现、描述到消息格式的方方面面 。                                    | 更多的是一种架构**风格**或一组有效使用 HTTP 的约束，而不是一个独立的、僵化的协议 。     |
> [!quote] 
> REST围绕资源是使用HTTP的一种风格 关注资源的增查删改

### WSDL

WSDL 提供了一种描述 Web 服务的标准方式，这使得 C++ 客户端能够理解如何调用 .NET 服务器，反之亦然，从而实现了**语言无关性和位置透明性**

基于XML格式的文件 哟个与描述web服务的功能和访问方式 类似文档可以协助SOAP消息的构建

### REST

- (ReST) 旨在唤起人们对一个设计良好的 Web 应用程序行为方式的想象：一个由网页组成的网络（一个虚拟状态机），用户通过选择链接（状态转换）在应用程序中前进，从而导致下一个页面（代表应用程序的下一个状态）被传输给用户并呈现出来供其使用。” 。

- **解读:** 核心思想是，一个 Web 应用程序==是一系列的状态（资源/页面）==。用户通过点击超链接从一个状态导航到下一个状态。新状态的“表现层 (representation)”（例如 HTML、JSON）的“传输 (transfer)” 导致了客户端应用程序状态的改变。

#### Representational State Transfer

- 客户端使用唯一的标识符 (URL) 请求一个**资源 (Resource)**，例如 `http://amazon.com/product/123` 。
- 服务器发回该资源的**表现层 (representation)**（例如，一个 HTML 页面、JSON 数据） 。
- 接收到这个表现层使客户端进入一个特定的**状态 (state)** 。
- 关键的是，这个表现层包含指向其他相关资源的超链接 (URL)，从而实现导航 。
- 客户端跟随其中一个链接去获取另一个资源 。
- 这个动作将客户端**转换 (transitions)** 到一个新的状态 。
- 这整个过程就是**表现层状态转换 (Representational State Transfer)** 。 其关键原则是，ReSTful 应用程序通过服务器提供的链接在资源之间**导航**，而不是进行预先编程的调用 。


![](images/Pasted%20image%2020250621200906.png)

![](images/Pasted%20image%2020250621200958.png)

#### ReST Best Practice

- **保持 URI 简短且稳定:** 创建简洁且不随时间变化的 URI 。
- **URI 应该是“不透明”的:** 客户端不应尝试自己构造 URI；它们应该通过服务器响应中提供的超链接来发现 URI 。
- **使用名词，而非动词:** URI 应该代表资源（名词），而不是动作（动词）。例如，使用 `/products/123`，而不是 `/getProduct?id=123` 。
- **`GET` 请求应无副作用:** `GET` 请求应该只检索数据，绝不改变服务器上的状态。这使得该请求可以“安全”地重复执行 。
- **在响应中使用链接:** 响应中应包含指向相关资源的超链接。这使得客户端能够“自我驱动”，在没有先验知识的情况下发现下一步可以采取的操作 。
- **最小化查询字符串:** 在识别资源时，优先使用基于路径的参数，而不是查询字符串。例如，`http://.../products/AXFC` 优于 `http://.../products?product-id=AXFC` 
- **使用 HTTP 状态码:** 使用标准的 HTTP 状态码来传达请求的结果（成功或失败） 。提供了一个常见状态码的列表，按其首位数字分类： **2xx (成功):** `200 OK` (成功), `201 Created` (已创建), `204 No Content` (无内容)。  **3xx (重定向):** `301 Moved Permanently` (永久移动)。  **4xx (客户端错误):** `400 Bad Request` (错误请求), `401 Unauthorized` (未授权), `403 Forbidden` (禁止), `404 Not Found` (未找到)。  **5xx (服务器错误):** `500 Internal Server Error` (内部服务器错误), `503 Service Unavailable` (服务不可用)。

#### Uniform Interface

- **资源识别:** 所有重要的事物都使用统一的机制（如 HTTP URL）被识别为资源 。
- **通过表现层操纵资源:** 一个资源可以有多种表现层（例如 `application/json`、`text/html`）。客户端和服务器通过协商来决定使用哪一种 。
- **自描述性消息:** 每条消息（请求/响应）都包含足够的信息，使接收方能够理解和处理它。这不仅包括数据，还包括关于缓存、认证等的元数据头信息 。
- **通用语义:** 访问方法（如 GET、POST 等 HTTP 动词）对所有资源都具有相同的含义 。无论资源是什么，`GET` 总是意味着检索，`DELETE` 总是意味着删除

### HTTP methods

> [!note] 
> 安全的方法自然幂等

- **安全方法 (Safe Methods):** 这些方法不会改变服务器上资源的状态。重复一个安全的调用没有任何效果 
    - `GET`、`HEAD`、`OPTIONS` 是安全的 。
- **幂等方法 (Idempotent Methods):** 多次重复一个幂等的调用与单次调用的效果相同 。
    - `PUT` 和 `DELETE` 是幂等的 。例如，运行 `DELETE /users/123` 两次与运行一次的结果相同（用户被删除）。
- **两者皆非:** 既不安全也不幂等的方法。
    - `POST` 两者皆非。调用 `POST /users` 两次会创建两个不同的用户 。

## Workshop - Git

**1. 版本控制系统（Version Control System, VCS）概念**

- 版本控制又称为修订控制、源代码管理，是对文档、程序、网站等信息集合的变更管理。
- 主要功能包括：跟踪文件变更、回退到某一历史版本、多人协作开发等
    

**2. 为什么要用版本控制？**

- 记录和追踪每一次修改，方便回溯和恢复
- 支持多人协作，减少协作冲突。
- 能实验不同分支（如新功能、修复bug）而不影响主线
    

**3. 常见的版本控制系统**

- 本地型：RCS
- 集中式：CVS、Subversion（SVN）
- 分布式：Git、Mercurial（Git 最流行)

**4. Git 的基本概念**

- **仓库（Repository）**：存储所有提交、分支、标签等的集合。
- **提交（Commit）**：对仓库的某次更改快照。
- **分支（Branch）**：独立的开发线。
- **标签（Tag）**：标记某个重要提交点（如发布版本）。
- **远程仓库（Remote repository）**：托管在服务器上的仓库（如GitHub、GitLab、Bitbucket）。
- **克隆（Clone）**：从远程仓库复制一份到本地。
- **拉取（Pull）**：获取远程更改并合并到本地。
- **推送（Push）**：将本地更改上传到远程仓库。
- **合并（Merge）**：将一个分支的更改合并到另一个分支。
- **变基（Rebase）**：将一系列提交移动到另一分支的最新提交之后1[5](https://github.com/dlab-berkeley/git-fundamentals)[6](https://libguides.brooklyn.cuny.edu/cisc3130/git)。

**5. Git 安装与常用命令**

- 安装：macOS 用 Homebrew，Linux 用 apt，Windows 可用 Git 客户端或 WSL1[5](https://github.com/dlab-berkeley/git-fundamentals)。
- 常用命令：
    
    - 初始化仓库：`git init`
    - 克隆仓库：`git clone <repo_url>`
    - 创建分支：`git checkout -b <branch_name>`
    - 切换分支：`git checkout <branch_name>`
    - 添加变更：`git add <filename>`
    - 提交变更：`git commit -m "message"`
    - 推送分支：`git push origin <branch_name>`
    - 拉取更新：`git pull`
    - 查看历史：`git log`
    - 查看差异：`git diff`
    - 合并分支：`git merge <branch_name>`
    - 变基：`git rebase <branch_name>`

**6. 分支命名规范**

- 主分支：master/main
- 开发分支：develop
- 功能分支：feature/xxx
- 修复分支：bugfix/xxx
- 发布分支：release/xxx
- 热修复分支：hotfix/xxx1。

**7. Git 工作流**

- 修改代码 → `git add`（暂存）→ `git commit`（提交）→ `git push`（推送到远程）1[6](https://libguides.brooklyn.cuny.edu/cisc3130/git)。
- 通过 Pull Request（Merge Request）进行代码评审与合并1。
- 解决合并冲突：冲突时需手动修改冲突部分，再 `git add`、`git commit` 完成合并1[5](https://github.com/dlab-berkeley/git-fundamentals)。

**8. 个人访问令牌（Personal Access Token, PAT）**

- 用于远程仓库（如GitLab、GitHub）的身份认证，特别是在启用双因素认证（2FA）时

## Exam Questions

> [!question|closed] 在Kubernetes架构中，以下关于各项组件功能及相互关系的描述，正确的是()
> 1. Pod是部署的最小单元，每个Pod只能包含一个容器，且容器间无法共享资源
> 2. Service直接将请求转发到具体的Node上，不涉及Pod
> 3. Ingress可以独立工作，不需要依赖Service就能将请求转发到后端应用
> 4. Namespace 可以在逻辑上隔离和组织资源，不同Namespace中的资源名称可以相同

> [!question|closed] Describe the term - based IaaS, PaaS, andSaaS and give examples for each
> - offer basic infrastructure resources, users have to deploy the system themselves, e.g. AWS
> - offer develop and running platforms to users, they have to develop the application, google app engine
> - offer the whole software, users can use it without any technically deployment or sth

> [!question|closed] What are the advantages/disadvantages of public, private and hybrid clouds?
> 公有云注重性价比和使用门槛 存在按钮全风险定制化程度低
> 私有云注重系统可控性 构建成本更高 资源利用率更低
> hybrid在两者间平衡 带来更多的兼容性问题和更高的架构复杂性

> [!question|closed] Describe some of the challenges in delivering hybrid clouds?
> 多谈论跨平台跨组织跨网格带来的可能问题

> [!question|closed] Discuss the major trends in research and research computing over the last 20 years that have led to the emergence of Cloud computing.  
> 可从 big data challenge、计算资源需求增长、异构性增加、弹性扩展能力提升、技术门槛降低、on demand 服务和 elasticity 需求等方面说明

> [!question|closed] How has the evolution of service-oriented architectures supported Cloud computing?  
> 各模块独立封装，解耦，向外部提供服务，并提供统一的接口标准，使得云计算可以简单快速的扩展和升级，利于 scaling

> [!question|closed] A HTTP method can be idempotent.  
> a. What is meant by this italicized term?  
> b. Give an example of an idempotent ReST method.  
> c. 多次执行该操作，结果不变  
> d. GET、PUT 等

> [!question|closed] Explain the general principles that should underlie the design of Service-Oriented Architecture (SOA).  
> 架构松耦合、功能封装、模块化、复用、标准化接口、兼容性、服务发现、适应动态环境

> [!question|closed] Explain why and how Cloud infrastructures have benefited from SOA.  
> 云计算强调去耦构性、弹性伸缩、需求动态变化和标准化理念，SOA 提供理论支持和实践依赖，加速云计算发展

> [!question|closed] SOAP is dead; ReST is the future! Explain this statement with regards to Representational State Transfer (ReST) based web services compared to Simple Object Access Protocol (SOAP)-based web services for implementing service-oriented architectures.  
> ReST 更加轻量化，依赖简单的协议，提升了服务开发和服务提供效率，资源利用率高，易于扩展；SOAP 更加复杂，依赖繁琐协议，效率低

> [!question|closed] HTTP methods can be safe or idempotent.  
> a. What is meant by a safe HTTP method?  
> b. Give an example of a safe HTTP method.  
> c. What is meant by an idempotent HTTP method?  
> d. Give an example of an idempotent HTTP method.  
> e. Give an example of a HTTP method that is neither safe nor idempotent.  
> a. 不会改变服务器状态的操作  
> b. GET  
> c. 多次执行结果不变  
> d. PUT  
> e. POST

> [!question|closed] What are container orchestration technologies? What are the main benefits of using container orchestration tools? Name two of the most popular Docker orchestration tools.  
> 容器编排技术用于自动化部署、管理、扩展和网络连接多个容器。主要好处有提升效率、自动化运维、弹性伸缩。常见工具有 Kubernetes 和 Docker Swarm

> [!question|closed] A researcher wants to attach to an already running Postgresql container and list all of the databases it contains. The command to list all of the database is psql -U postgres -c “\l”. The name of the container is postgres and it exposes the port 5432 to the host. Is the following command correct? If not, please correct it: docker exec -p 5432 --name postgres sh -c psql -U postgres -c “\l”  
> 主要问题是 docker exec 不需要 -p 5432 和 --name，正确命令：docker exec postgres sh -c "psql -U postgres -c '\l'"

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


