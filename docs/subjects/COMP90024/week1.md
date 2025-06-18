# Information Session & How we got here

## Cloud Computing

### Definition

1. What: Different types of computing resources
2. How: Through network
3. Why: On-demand (Lower cost & better  utilization)
4. Cloud computing is a technology to utilize heterogeneous computing resource through network and provide on-demand service
### Characteristics

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
>- 由于处理任务类型不同 打破传统资源界限，抽象为更小的单位进行组合调配
>- Resource pooling的好处:   On-demand/利用率高/成本低/服务提供商统一维护/技术门槛低

> [!question|closed] Cloud computing 支持Elasticity是否是必要的？举出几个例子
>- Black Friday / Ticket Saleing / NBA Final...
>- 不支持Elasticity的后果:系统崩溃/服务不可用/成本难以控制

## Cloud Computing History

Cloud computing并非一日发展而来的 科技日益进步 需求在持续增加 研究重点也在持续发生变化和迁移

**Distributed System:** cumputer-computer任务驱动 利用大量不同的计算资源
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


## Compute Scaling

### Vertical Computational Scaling 垂直计算扩展 

- Have faster processors 拥有更快的处理器
	- Switch your  n GHz CPU for a  2n GHz one = 2x faster  把频率搞高一点
	- **Easy to do, but costs more** ** 做起来容易，但成本更高
- Limits of fundamental physics/matter (nanoCMOS)

### Horizontal Computational Scaling 水平计算扩展 

-  Have more processors  
   拥有更多处理器
-  Easy to add more; cost increase not so great  
   易于添加更多;成本增加不是那么大 
- But harder to design, develop, test, debug, deploy,  manage, understand
  但更难设计、开发、测试、调试、部署、管理、理解

> [!quote]
>  HTC far more important than HPC 

| **Architecture**                                                   | **Description**                                                                                                                                                                                                                                             | **Examples**                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **Single machine multiple cores<br>单机多核**                          | Typical laptop/PC/server these days.<br>如今典型的笔记本电脑/PC/服务器。                                                                                                                                                                                                  | N/A                                    |
| **Loosely coupled collection/cluster of machines<br>松散耦合的机器集合/集群** | Pooling/sharing of resources. Can be dedicated or available only when not in use by others.<br>资源池化/共享。可以是专用的，也可以仅在其他人不使用时可用。                                                                                                                               | Web services, Condor, Seti@home, Boinc |
| **Tightly coupled cluster of machines<br>紧密耦合的机器集群**               | Typical High-Performance Computing (HPC)/High-Throughput Computing (HTC) set-up. Consists of many servers in the same rack/server room, often with fast message-passing interconnects.<br>典型的高性能计算 （HPC）/高吞吐量计算 （HTC） 设置。由同一机架/服务器机房中的许多服务器组成，通常具有快速消息传递互连。 | SPARTAN, NCI                           |
| **Widely distributed clusters of machines<br>广泛分布的机器集群**           | Related to distributed systems more generally.<br>更普遍地与分布式系统相关。                                                                                                                                                                                             | UK NGS, EGEE                           |
| **Hybrid combinations of the above<br>上述的混合组合**                    | Leads to many challenges with distributed systems, such as shared state (or lack thereof) and message passing paradigms (dangers of delayed/lost messages).<br>导致分布式系统面临许多挑战，例如共享状态（或缺乏共享状态）和消息传递范式（消息延迟/丢失的危险）。                                            | N/A                                    |
## Amdahl's Law


**α** = Fraction of program that can be done in parallel <br/>
**1-α** = Fraction that must be carried out on a single CPU <br/>
**T** = Time needed for the application to execute on a single CPU <br/>
**N** = Number of processors

---

### **SpeedUp Formula**

The speedup of a program from parallelization is calculated based on the ratio of the sequential time (`Tseq​`) to the parallel time (`Tpar`​).

The sequential time is simply **T**.

The parallel time is the sum of the time for the serial fraction `(1-α)T` and the time for the parallel fraction `α(T/N)`.

The overall speedup is given by the formula:

$$SpeedUp=Tpar​Tseq​​=(1−α)T+α(T/N)T​=(1−α)+Nα​1​$$

---

### **Theoretical Maximum SpeedUp 理论最大 SpeedUp**

As the number of processors (**N**) gets very large, the term `α/N` approaches 0. This means the total speedup tends towards a limit defined by the serial portion of the code.
随着处理器 （**N**） 的数量变得非常大，术语“α/N”接近 0。这意味着总加速比趋向于代码的 serial 部分定义的限制。

$$N→∞lim​SpeedUp=1−α1​$$

---

### **Example**

Thus, if **95%** of the program can be parallelized ($α = 0.95$), the theoretical maximum speedup using parallel computing would be:

$$1−0.951​=0.051​=20x$$

This means the maximum speedup is **20x**, no matter how many processors are used. For instance, if the non-parallelisable part (5%) takes 1 hour to run, then no matter how many cores you throw at it, the entire program will never complete in less than 1 hour.
这意味着无论使用多少个处理器，最大加速都是 **20x**。例如，如果不可并行化部分 （5%） 需要 1 小时才能运行，那么无论你投入多少个内核，整个程序都不会在 1 小时内完成。


## Gustafson-Barsis's Law

> Gives the “scaled speed-up” 提升scaled速率

**α** = Fraction of program that can be done in parallel <br/>
**1-α** = Fraction that must be carried out on a single CPU <br/>
**T** = Time needed for the application to execute on a single CPU <br/>
**N** = Number of processors

Speed up S using N processes is given as a linear formula dependent  on the number of processes and the fraction of time to run sequential  parts. Gustafson's Law proposes that programmers tend to set the  size of problems to use the available equipment to solve problems  within a practical fixed time. Faster (more parallel) equipment  available, larger problems can be solved in the same time. 

使用 N 个进程加速 S 是一个线性公式，取决于进程数和运行连续部件的时间分数。古斯塔夫森定律 （Gustafson's Law） 提出，程序员倾向于设置问题的大小，以便在实际的固定时间内使用可用的设备来解决问题。更快（更并行）的设备可用，更大的问题可以同时解决。