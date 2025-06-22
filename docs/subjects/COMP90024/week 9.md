# Virtualisation & Amazon AWS vs MRC

[[toc]]

## Virtualisation

## MRC vs Amazon AWS

![](images/Pasted%20image%2020250622124735.png)
- **关系:** OpenStack（并延伸至 MRC）提供的服务是 AWS 提供的庞大服务阵列的一个子集 。
- **核心理念:** OpenStack 定性为社区驱动和基于模块化组件的，而 AWS是具有面向服务的架构 。

![](images/Pasted%20image%2020250622124905.png)

### AWS Database

- **Amazon RDS (关系型数据库服务):** 一种针对关系型数据库的托管服务，支持像 MySQL、PostgreSQL 和 Oracle 等流行引擎 。
- **Amazon DocumentDB:** 一种与 MongoDB API 兼容的托管数据库服务 。
- **Amazon OpenSearch Service:** 这是一个用于运行 OpenSearch（Elasticsearch 的一个分支）的全托管服务 。 它会自动处理配置、打补丁、备份和监控等任务，并与其他 AWS 服务集成 。

### AWS Storage

- **S3 (Simple Storage Service):** 一种对象存储服务，以其行业领先的可扩展性、数据可用性、安全性和性能而闻名 。
- 它可以用于存储任何类型的任何用途的数据 。
- 可以通过网页界面、CLI、API 或各种第三方工具上传和检索数据 。

### AWS System Manager

- **Fleet Manager (机群管理器):** 这是 AWS Systems Manager 的一项功能，允许您远程管理您的节点（例如 EC2 实例） 。
- 您可以用它来查看节点的健康和性能状态，并从它们那里收集数据 
- **Session Manager (会话管理器):** 通过基于浏览器的交互式 shell 或 AWS CLI 提供安全且可审计的节点管理，无需开放像 SSH 这样的入站端口 。
- **Run Command (运行命令):** 允许您自动化常见的管理任务，并大规模地对许多节点执行配置更改 。
- **Patch Manager (补丁管理器):** 自动化为受管节点打补丁的过程，包括操作系统和应用程序

### AWS Service: Container Orchestration

- **Elastic Container Service (ECS):** AWS 专有的容器编排服务 。
- **Elastic Kubernetes Service (EKS):** AWS 的托管 Kubernetes 服务 。
- **Fargate:** ECS 和 EKS 都可以使用 AWS Fargate 以“无服务器”模式运行，Fargate 会管理容器的底层计算基础设施，因此用户无需自己配置或管理 EC2 实例 。