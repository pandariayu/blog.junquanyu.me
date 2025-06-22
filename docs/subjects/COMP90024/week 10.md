# Security and Clouds

[[toc]]
## Importance

- If systems are not secure:
	- 不利于用户群体的增长和高价值用户的引入
	- 某些实验可能难以重复或代价高昂
	- 引发法律和道德问题
	- Trust is easily lost and hard to re-establish
		- 用户信息泄漏事件导致失去潜在用户或者当前用户

## Challenge

1. 需求通用的 兼容性高的安全解决方案
2. 存在==资源访问 用户管理访问策略 性能问题==等挑战

## Terminology

> [!quote]
> Key is to make all of this simple/transparent to users

1. *Authentication*: 确认用户或实体的**身份** 不检查用户操作
2. *Authorization*: 确认用户或实体的**操作权限和资源访问权限**
3. *Audit/Accounting*: 记录系统活动 以便追踪操作 检测异常责任认定
4. *Privacy*: 侧重于**个人相关信息**的保护

- **什么是安全？** 它不是一个黑白分明的概念，而是一个灰色地带，其中上下文决定了一切 。 一个系统只有在满足一组特定要求的情况下才是安全的 。
- **防范谁？** 是防范外部攻击者？系统管理员？还是恶意的内部员工 ？
- **安全多久？** 引用自《应用密码学》的一段话说明了从磁性介质中真正删除数据的极端困难，暗示对于足够有价值的数据，物理销毁可能是唯一可靠的方法

## Authentication


- **认证** 是在系统中建立和传播用户身份的过程 。 例如，它允许一个站点检查用户Y是否是他声称的那个人 。 它并*不检查该用户被允许做什么*。
- 传统的本地用户名/密码系统对于大型、动态的用户社区来说，扩展性不佳 。

## Authorization

- **授权** 是基于已定义的策略来控制对资源的访问 。 它回答了这样一个问题：“这个用户能否对这个资源执行这个操作？”。
- 它与认证是互补的：一旦我们知道了用户_是谁_（认证），授权就决定了他们被允许_做什么_ 。

## Public Key Cryptography

### Asymmetric Cryptography

- 它使用一对不同但互补的密钥：一个必须保密的**私钥 (Private Key)**，和一个可以公开分享的**公钥 (Public Key)** 。
- 至关重要的是，私钥不能从公钥中推导出来 。
- 私钥可用于**数字签名 (digitally sign)** 消息，然后任何人都可以用相应的公钥来验证该签名 。 这对于验证数据完整性和实现不可否认性（证明消息发送者）很有用。
- 公钥密码学简化了密钥管理，因为只有私钥需要长期安全保存；公钥可以是短期的，并且可以自由分发

### Public Key Certificate

将公钥与特定用户身份连接起来

- 用户的身份通常由一个**可分辨名称 (Distinguished Name, DN)** 来表示，其中包括姓名、组织单位、组织和国家等信息 。
- 该页用名片作类比：名片上有身份信息，但无法相信它不是伪造的 。
- 为了建立信任，公钥证书必须由一个受信任的第三方，即**证书颁发机构 (Certification Authority, CA)** 来颁发 。

### CA

- CA 是公钥基础设施 (PKI) 的核心组件 。
- 其职责包括：
    - 定义证书使用的策略和程序。
    - **颁发证书**，通常通过将身份验证委托给本地的注册机构 (RA)，用户必须在 RA 证明自己的身份（例如，通过护照） 。
    - **吊销**已过期或已泄露的证书，并将其发布在证书吊销列表 (CRL) 上 。
    - 存储和归档证书信息 。


## Single Sign O

是一种身份认证和访问控制的技术，使得用户只需要一次登录就能访问多个应用程序服务或网站，不需要再每个资源中都输入认证信息，可以==提高用户体验和效率==，减少==安全风险==

## Shibbloeth Augmented Authorization

> [!quote]
> 在不同组织和系统之间安全地传递身份信息和授权属性，有多个资源提供者共同负担

![](images/Pasted%20image%2020250622140045.png)

- 用户将浏览器指向一个受保护的资源（服务提供商） 。
- 服务提供商的 Shibboleth 软件将用户重定向到一个“你来自哪里”(W.A.Y.F.) 服务 。
- 用户选择他们的主机构（身份提供商），本例中为墨尔本大学。
- 主站点对用户进行认证（例如，通过他们的大学用户名和密码） 。
- 用户被重定向回服务提供商，并附带其身份证明，从而获得访问权限 。

## Other Challenges

1. SSO的普及
2. 跨云联合环境中的Auditing信息保存和日志记录
	- 审计涉及日志记录、入侵检测以及对计算机设施的安全审查 。
	- 虽然有适用于单一云环境的工具（例如，AWS CloudWatch, OpenStack Ceilometer），但跨多个联邦云的审计则远不成熟 。
3. 数据的安全删除 时间和资源消耗 
	- 用户缺乏控制权以及意外数据丢失的可能性
	- 用户无法直接访问物理硬盘，因此许多标准的数据删除工具无法工作 。
4. Liability责任和义务的认定
	- AWS 客户协议 - 客户承担了几乎所有的风险。
5. Licensing 模型的选择 (per user/per server/per organization...)
6. 如何定义和开发共享的面向安全的workflow
7. 技术和法律的变化

## Exam Questions

> [!question|closed] Many research domains are facing “big data” challenges. Big data is not just related to the size of the data sets. Explain.  
> 回答 big data challenge 的特点有 V 即 velocity variety 和 veracity，并对每个 V 进行解释。Velocity：当面临高速度数据处理能力以应对高速数据接收需求，如实时 gps、传感器数据等。Variety：如数据存在结构化、半结构化、非结构化特性，且存在多数据的融合使用。Veracity：随着数据增多，容易产生噪声数据、缺失数据、离散数据，均影响分析，所以需要数据清洗或验证1。

> [!question|closed] What capabilities are currently offered or will be required for Cloud computing infrastructures such as the Melbourne Research Cloud to tackle these “big data” challenges? You may refer to the specific demands of particular research disciplines in your answer, e.g. life sciences, astrophysics, urban research etc.  
> 结合 cloud computing 的五大特性，以及解决的问题进行讨论。举例：如天文数据量大，需要实时观测和高速数据传输和存储，甚至需要进行实时的数据分析。cloud computing 通过分布式数据存储及其 elasticity 解决存储和传输问题，MRC 的 Shibboleth 验证保证了数据存储和平台操作的安全性和合规，平台提供的容器化部署可以协助加速数据分析进度，缩短研究周期1。

> [!question|closed] In a serverless environment (FaaS), you wrote a function that converts a JPEG image into a PDF document. A user uploads an image that is in a format that your function does not recognize and since you have been a little sloppy with your exception handling, this causes the function to crash. What happens to the cluster the function runs on?
> 
> 1. The cluster keeps on converting images into PDFs, although that specific request is lost.
>     
> 2. The cluster stops converting images into PDFs.  
>     应该选 1，因为 FaaS 的特性有 free of side effect 以及 stateless，并且函数按需在容器中触发，即使函数失败也不影响到整个系统。每个函数仅针对单个请求进行返回，函数间相互独立。如果一个请求失败导致 cluster 停止工作，这种类似单点失效的 feature 不是一个系统应该具有的特性1。
>     

> [!question|closed] A node belonging to a four-node CouchDB cluster with n=2 replicas and q=8 shards crashes. What happens to the documents stored on it?
> 
> 1. 25% of the documents are lost and cannot be retrieved.
>     
> 2. All documents can still be retrieved.
>     
> 3. The cluster becomes unstable and some documents may no longer be retrieved.  
>     应该选 2。虽然这里是 couchDB，但和 elasticsearch 均属于 document oriented DBMS，是同一个 feature。系统由于存在一个 primary 和两份 replica，且 master node 会自动进行分配，使得 shard 的不同副本需要分布在不同节点，所以单个节点的 crash 不会导致任何一份数据无法获取2。
>     

> [!question|closed] Three nodes belonging to a four-node CouchDB cluster with n=2 replicas and q=8 shards crash, what happens to the documents stored on it?
> 
> 4. 75% of the documents are lost and cannot be retrieved.
>     
> 5. All documents can still be retrieved.
>     
> 6. The cluster becomes unstable and some documents may no longer be retrieved.  
>     应该选 3。任何一份 shard 会因为分布规则的限制存在于三个节点上，当系统有三个节点 crash 时，可能三份数据都不存在了，并且由于半数以上的节点 crash，整个系统会进入不稳定状态，无法对数据请求进行相应，也不存在数据的同步和备份2。
>     

> [!question|closed] In the context of distributed databases, explain the concepts of:
> 
> 7. Consistency  
>     每个 client 从所有 node 获得的响应相同。
>     
> 8. Availability  
>     每个 client 都可以从 cluster 中任何 node 获得回应2。
>     

> [!question|closed] Give an example of a database technology that supports Availability in the presence of a (network) partition.  
> 可以直接用 elastic search 举例，其 shard 和 replica 的特性可以在部分节点掉线或 crash 的时候，通过副本保证所有数据的可用性3。

> [!question|closed] In the context of Elastic Search clusters what is the meaning of:
> 
> 9. Replica number  
>     一份数据被复制了几份副本
>     
> 10. Number of shards  
>     一份数据被划分成了多少个部分3。
>     

> [!question|closed] In the context of Cloud, what is meant by serverless computing?  
> serverless 是一种云计算模型，对应 FaaS，开发者只进行代码层面的开发，将业务交付给云平台进行运行和管理，包括函数的增删、更新执行，是一种微服务架构4。

> [!question|closed] List three reasons why it may be beneficial to choose a serverless solution.
> 
> 11. 无需运维底层基础设施，开发者专注于业务逻辑。
>     
> 12. 按需计费，资源利用率高，节省成本。
>     
> 13. 易于扩展，自动弹性伸缩4。
>     

> [!question|closed] Discuss the role of functions in serverless computing. Your answer should include key properties of functions that make them suitable for serverless environments.  
> 函数是 serverless 的最小执行单元，具有无状态、短暂、可快速部署和弹性伸缩等特性，适合高并发和事件驱动的场景4。

> [!question|closed] OpenFaaS is an open source framework that can be used to deliver serverless computing solutions. Discuss the role of container technologies such as Docker in OpenFaaS and their relationship with functions and how they might be used to support auto-scaling.  
> 容器技术为 FaaS 提供运行环境，函数以容器为单位部署和隔离，支持弹性伸缩和高可用。Docker 等容器技术可实现函数的快速启动和自动扩容，提升系统的灵活性和可维护性4。

> [!question|closed] There are many open challenges in delivering secure Clouds. Describe some of the technical and non-technical issues that currently exist for development and delivery of security-oriented Clouds.  
> 技术层面主要涉及服务标准（如 Web service）、数据共享和迁移困难（网络限制）、数据安全性以及用户权限管理（security）的挑战。非技术层面主要涉及利益分配、工作流程合规、审计过程、责任分配、成本控制、法律法规等4。

> [!question|closed] The Internet2 Shibboleth technology as currently supported by the Australia Access Federation provides federated authentication.
> 
> 14. Why isn’t Shibboleth used to access Cloud-based systems more generally?  
>     Shibboleth 主要面向跨机构协作，而不像普通云平台一样面向广泛用户，所以其应用场景更少。且由于其需兼容多个验证系统，认证生态更加复杂，适配性不足，技术成本更高4。
>     
