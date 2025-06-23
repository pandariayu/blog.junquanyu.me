# Cloud Computing, OpenStack & Introducing NeCTAR


> [!quote]
> Cloud computing is a model for  enabling ubiquitous, convenient, on-demand  network access to a shared pool of configurable  computing resources (e.g., networks, servers, storage, applications, and services) that can be  rapidly provisioned and released with minimal management effort or service provider interaction.
> 云计算是一种模型，它支持对==可配置计算资源==（例如，网络、服务器、存储、应用程序和服务）的共享池进行无处不在、便捷、按需的网络访问，这些资源可以通过==最少的管理工作或服务提供商交互快速配置和发布==。
## Deployment Modesl

### Public clouds

1. **公众**通过物联网可以访问的云计算服务
2. Pros: focus on business, cost-effective, low entry barrier
3. Cons: security, possible lock-in, depend on cloud provider

### Private Clouds

1. **单一组织**自行构建维护的云环境
2. 优点: secure, fully control, better management
3. 缺点: more cost and effort, over/under utilization

### Community Clouds

1. **有多个共同需求和要求**的组织共同管理使用的云环境
2. 优点: most cost-effective, more secure
3. 缺点: resource shortage, shared responsibility, complex structure

### Hybrid Clouds

1. 根据需求和要求使用**组合多种云环境**
2. 优点: balance between requirement and cost, flexibility, secure
3. 缺点: compatibility, network issues, data transfer

## Delivery Models

从云计算提供的服务类型和层次进行划分

![](./images/Pasted%20image%2020250618213419.png)

| Software as a Service       | 只要通过网络就可以使用软件功能，如无提供商负责部署维护和管理<br>(e.g. Gmail, Sharepoint, Office 365) |
| --------------------------- | ---------------------------------------------------------------------- |
| Platform as a Service       | ==在服务提供商的平台上进行应用开发测试部署和管理 无需关心底层基础==设施 (e.g. Vercel, Tencent )         |
| Infrastructure as a Service | ==用户统筹配置各类计算资源来运行自己的业务，无需实际购买和维护硬件设备== (e.g. AWS)                      |

## OpenStack

![](./images/Pasted%20image%2020250618215155.png)
> [!quote]
> Offers free and open-source software platform for cloud computing for (mostly) **IaaS**
### Consists of interrelated components

| Service  | Usage                                                                                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Horizon  | Web-based portal for services interaction 基于 Web 的服务交互门户<br>Responsibility include spawing, scheduling and decommisioning of virtual machines on demand 职责包括按需对虚拟机进行清理、调度和拆卸                               |
| Nova     | Nova is the OpenStack project that provides a way to provision compute instances (aka virtual servers), which is used to host and manage cloud computing systems.<br>提供了一种配置计算实例（又名虚拟服务器）的方法，用于托管和管理云计算系统。 |
| Swift    | object storage of unstructured data 通过RESTful API进行非结构化数据的对象存储                                                                                                                                             |
| Cinder   | provides persistent block storage to virtual machines and supports creation and management of block storage devices 为虚拟机提供持久块存储，并支持创建和管理块存储设备                                                              |
| Glance   | images related discovery, retrieval, install and storage <br>映像相关发现、检索、安装和存储                                                                                                                               |
| Neutron  | network support 网络支持<br>提供一个API给用户来定义网络以及其附件(switches and routers)                                                                                                                                         |
| Heat     | lifecycle of application 应用程序生命周期                                                                                                                                                                          |
| Keystone | authentication and authorization 身份验证和授权                                                                                                                                                                   |
> [!info] Object Storage
> - suitable for large amounts of unstructured data (Pb+) <br/>适用于大量非结构化数据 （Pb+）
> - Data decomposed into discrete units (Objects) <br/>分解为离散单元 （Objects） 的数据
> - Can be text, images, values... and metadata <br/>可以是文本、图像、值......和元数据

> [!info] Block Storage
> - Suitable for high-speed processing <br/>
>   适用于高速处理因为低延迟
> - Data into fixed sized individual blocks (few kB-Mb) <br/>
>   数据转换为固定大小的单个块（几 kB-Mb）
> - Each block has a unique address (logical block addressing) <br/>
>   每个块都有一个唯一的地址（逻辑块寻址）
> - Data lookup table for data access <br/>
>   用于数据访问的数据查找表

> [!info] File Storage
> - Suitable for concurrent access to shared files <br/> 适合并发访问共享文件
> 	- Hierarchical storage system (human oriented) <br/> 分层存储系统
> 	- Fine-grained access control <br/>精细访问控制
> 	- common file access protocols <br/>常见的文件访问协议

|          | **Cinder (块存储)**      | **Swift (对象存储)**         |
| -------- | --------------------- | ------------------------ |
| **比喻**   | **虚拟硬盘 (Hard Drive)** | **网络硬盘/云盘 (Dropbox/S3)** |
| **存储单元** | 块 (Block)             | 对象 (Object)              |
| **访问方式** | 挂载到操作系统，作为设备访问        | 通过 HTTP API 访问           |
| **主要用途** | 虚拟机系统盘、数据库            | 备份、归档、网站静态资源、多媒体文件       |
| **性能**   | 低延迟，高 IOPS            | 高吞吐量，延迟相对较高              |
| **数据结构** | 原始块，由操作系统格式化          | 包含数据和元数据的对象              |
| **连接性**  | 通常与单个虚拟机绑定            | 独立于任何虚拟机，可被任何授权应用访问      |

## Workshop

#### Access & Security

- **Key Pairs (密钥对)** 是访问云主机 (Instance) 的唯一凭证 。
- 它由一个公钥和一个私钥组成 。私钥必须妥善保管，权限需要设置为 `600`，否则会因为权限过于开放而被拒绝连接 。
- **Security Groups (安全组)** 扮演虚拟防火墙的角色，控制进出云主机的网络流量 。
- 默认的安全组只允许 SSH (端口 22) 流量 。如果想访问网页服务，必须手动添加入站规则以允许 HTTP (端口 80) 的流量 。

#### Instance & Storage

- **Instance (实例/云主机)** 是你在云上创建的虚拟机 。
- 启动一个云主机需要选择几个关键配置：
    - **Source (源)**：通常选择一个镜像 (Image)，推荐为 `NECTAR Ubuntu 22.04 LTS` 。
    - **Flavor (规格)**：定义了云主机的 CPU、内存和存储容量 。
    - **Key Pair (密钥对)**：必须选择，否则无法登录 。
- **Volume (卷)** 是可以挂载到云主机上的块存储设备（类似硬盘） 。
- 创建一个卷后，需要经过 **“Attach (附加) -> Format (格式化) -> Mount (挂载)”** 这一系列步骤才能在系统中使用 。

#### CLI

- 使用命令行前，必须先下载 `openrc.sh` 文件并设置 API 密码 。
- `source` 命令用于加载 `openrc.sh` 文件，它的作用是导出与 OpenStack API 交互所需环境变量 
- 知道有与图形界面功能相对应的命令，例如 `openstack server create` , `openstack volume create` , `openstack security group create` 。
## Questions

> [!question|closed] What do you need to obtain from the Melbourne Research Cloud before you can interact with the Melbourne Research Cloud's openStack API? What does this file do?
> 需要获取openrc.sh文件，文件中包含了与OpenStack交互的重要环境变量和服务端点

> [!question|closed] Describe the interactions that take place with the OpenStack components and their associated APIs to support this scenarios. You may assume that the instance is based on a public image, e.g. NeCTAR Ubuntu-18.04.
> 1. 结合Open Stack每个component的功能来说
> 2. 使用KeyStone API 通过用户名密码认证登录
> 3. 使用Glance获取镜像
> 4. 使用Nova创建实例并进行基础配置设定
> 5. 使用Cinder配置100GB数据卷并mount到实例
> 6. 使用Neutron配置安全组并开放22和80端口


