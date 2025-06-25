# Cloud Computing

## Definition

1. What: Different types of computing resources
2. How: Through network
3. Why: On-demand (Lower cost & better  utilization)
4. Cloud computing is a technology to ==utilize heterogeneous computing resource through network== and provide on-demand service
## Characteristics

#### On-demand self-service

A consumer can provision computing capabilities as needed without requiring human interaction interaction with each service provider.
消费者可以根据需要预置计算功能，而无需与每个服务提供商进行人工交互。
#### Network access

Capabilities are available over the network and accessed through standard mechanisms that promote use by heterogeneous client platforms.

功能可通过网络获得，并通过促进异构客户端平台使用的标准机制进行访问。
#### Resource pooling

The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model potentially with different physical and virtual resources that can be dynamically assigned and reassigned according to consumer demand.

提供商的计算资源被池化，以使用多租户模型为多个消费者提供服务，这些模型可能具有不同的物理和虚拟资源，这些资源可以根据消费者需求动态分配和重新分配。

#### Rapid elasticity

Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly upon demand
功能可以弹性配置和发布，在某些情况下是自动的，以便根据需要快速扩展
#### Measured service

Cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service
云系统通过利用适合服务类型的某种抽象级别的计量功能来自动控制和优化资源使用

> [!question|closed] 什么是Heterogeneous? 通过网络使用多种Computing resource 有什么好处？
>- **Heterogeneous异质**:  计算资源的类型/架构/配置/平台/性能/...差异
>- 异构性可能会导致兼容性问题，影响服务运行
>- 网络的优势:  打破物理边界/统一管理快速调配

> [!question|closed] 什么是Pooling? Pooling有什么好处?
>- 由于处理任务类型不同 打破传统资源界限，抽象为==更小的单位==进行组合调配
>- Resource pooling的好处:   On-demand/利用率高/成本低/服务提供商统一维护/技术门槛低

> [!question|closed] Cloud computing 支持Elasticity是否是必要的？举出几个例子
>- Black Friday / Ticket Saleing / NBA Final...
>- 不支持Elasticity的后果:系统崩溃/服务不可用/成本难以控制

## Cloud Computing

### Rise of Grid Computing

> [!info] 分布式系统的早期历史与挑战
> 在90年代中期，Distributed system主要关注计算机间(computer-computer)的交互，包括资源发现、实时绑定和处理异构性问题 。 当时出现了像 CORBA这样的标准 。 然而，早期的分布式系统实现面临诸多挑战 ：
> - **实现的复杂性:** Middleware臃肿且存在厂商锁定问题,对用户来说太复杂 。
> - **厂商特定的解决方案:** 每家公司都有自己的解决方案 。
> - **Web的爆炸式增长:** 互联网的快速发展带来了新的挑战和方向 。
> - **Heterogeneity**: 难以克服的异构性问题 。
> - **Security**: 安全机制 (PKI) 复杂难用

**Distributed System:** cumputer-computer 任务驱动 利用大量不同的计算资源
系统复杂性的提升 -> 各项成本的提升 -> 浅层次抽象 -> Cluster computing

**Grid computing:** 深层次抽象 resource pooling + network 资源集中分配本质可以理解为提取并消除计算资源间的差异

### Grid Computing 与 Cloud Computing 的关系

都可以实现分布式计算 提供强大性能

| Grid Computing              | Cloud Computing                 |
| --------------------------- | ------------------------------- |
| 多用于科研 整合计算资源构成Supercomputer | 可以认为是Grid computing的商业实现 提供运营服务 |
| 更关注计算能力/存储能力                | 提供抽象资源/服务                       |
| 技术门槛高于Cloud Computing       | 建立在Grid Computing之上             |
> [!question|closed] 以下有关Grid Computing和cloud computing的关系，正确的是( )
> 
> - Grid computing 是 cloud computing的一种特殊形式，主要为个人提供服务
> - Cloud computing 完全取代了Grid computing, 因为前者的技术更为先进
> - Grid Computing 更侧重于将不同组织的资源整合用于科研等，Cloud computing则更多侧重于通过网络为用户提供灵活的抽象资源和服务
> - Grid computing和Cloud computing在技术架构上完全不同，没有人任何关联

## Workshop

**为什么**我们需要集群和云计算技术 。它不关注具体的技术实现，而是通过几个真实世界的研究领域案例，展示了现实中的巨大挑战是如何推动技术发展的

- **大数据 (Big Data):** 数据量本身极其庞大 。
- **大计算 (Big Compute):** 处理这些数据需要巨大的计算能力 。
- **大分布 (Big Distribution):** 数据和研究人员分布在不同地理位置 。
- **大协作 (Big Collaboration):** 需要跨学科、跨机构的合作 。
- **大安全 (Big Security):** 数据的安全、隐私和知识产权 (IP) 保护至关重要 。

**四大案例领域 (Four Domain Examples):**

1. **高能物理 (High Energy Physics):**
    - **挑战:** 大型强子对撞机 (LHC) 每年产生约25PB的数据 。原始数据以每秒4000万个事件的速度产生，经过两级过滤后减少到每秒100-200个事件，这需要极强的计算能力 。数据处理分布在全球不同层级 (Tier 0, 1, 2) 的计算中心 。
    - **体现了:** **大计算、大数据、大分布**。
    
2. **纳米电子学 (Nano-CMOS Electronics):**
    
    - **挑战:** 模拟原子级别的微小晶体管（如22纳米甚至更小）需要进行大量的（1000-100000次）3D统计模拟 。这产生了复杂的数据流、大量的模拟文件，并且由于涉及商业IP，对**安全**有极高要求 。同时，这需要多学科背景的专家进行**协作** 。
        
    - **体现了:** **大计算、大数据、大协作、大安全**。
3. **电子健康与生命科学 (eHealth & Life Sciences):**
    
    - **挑战:** 该领域需要整合从基因序列、蛋白质结构到人口、环境、社会等极度**异构**的数据 。数据来源有数千个，格式混乱（例如GPL96-Notepad文件展示的原始数据）。处理敏感的个人健康数据意味着**安全**是重中之重 。

    - **体现了:** **大数据（异构性）、大协作、大安全**。
    
4. **城市研究 (Urban Research - AURIN/SUDO项目):**
    
    - **挑战:** 这是澳大利亚联邦政府资助的重大项目，旨在为城市研究者建立一个电子基础设施 。它需要整合完全异构且孤立的数据集（如健康、交通、住房、犯罪、环境等）。项目需要提供工具让研究者发现、分析、可视化数据，并支持他们**协作** 。由于涉及个人、健康和商业数据，必须保证数据提供者能控制其数据的使用，因此**安全**（认证、授权、审计）是关键 。

    - **体现了:** **全部五大挑战**，是一个综合性的案例。


| Challenge         | High Energy Physics                  | Nano-CMOS Electronics | eHealth & Life Sciences            | Urban Research - AURIN/SUDO     |
| ----------------- | ------------------------------------ | --------------------- | ---------------------------------- | ------------------------------- |
| Big data          | PB级的数据量                              | 大量的模拟文件               | 整合从基因序列、蛋白质结构到人口、环境、社会等极度**异构**的数据 | 完全异构且孤立的数据集（如健康、交通、住房、犯罪、环境等）   |
| Big security      | 经过两级过滤后减少到每秒100-200个事件               | 涉及商业IP，对**安全**有极高要求   | 处理敏感的个人健康数据                        | 涉及个人、健康和商业数据，必须保证数据提供者能控制其数据的使用 |
| Big collaboration |                                      | 多学科背景的专家进行**协作**      | 多学科背景的专家进行**协作**                   | **核心需求**，无单一专家                  |
| Big compute       |                                      | 大量的3D统计模拟             |                                    | 在线分析工具                          |
| Big distribution  | 数据处理分布在全球不同层级 (Tier 0, 1, 2) 的计算中心 。 |                       |                                    | 分布式数据集                          |
## Exam questions


> [!question|closed] Explain what is meant by the terms **Grid computing, Cluster Computing and Cloud Computing**
> - Grid Computing: Distributed architecture where multiple independent, geographically separated computers work together to perform large-scale tasks by sharing resources over a network
> - Cluster Computing: 往HPC上去靠 A collection of closely connected computers strapped together with a highspeed local network as a single system to provide high performance computing
> - Cloud Computing: 往五个特点上去靠 Model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources

> [!question|closed] Describe some of the current challenges with large-scale distributed systems
> 开放性很强的问题，可以从任何角度来论证，需要注意不要罗列名词，要有对应解释
> Heterogeneity: 异构型问题的挑战
> Shared resource: 可以讨论资源异构问题 也可以从CAP理论讨论并发控制
> Scalability: 结合异构型问题讨论 以及后面讲过的自动化部署 虚拟化概念
> Big data challenge: 从4个V讨论数据处理需求

> [!question|closed] Cloud computing solves some of these issues but not all. *Explain*
> 哪些解决了哪些没有解决？最好举出例子
> 可以从理论说 可以从实际说 还可以利用A1和A2里遇到的场景佐证 例如服务器的部署等等

> [!question|closed] Describe some of the erroneous assumptions that are often made in designing large-scale distributed system
> 根据前面分布式系统的挑战章节回答