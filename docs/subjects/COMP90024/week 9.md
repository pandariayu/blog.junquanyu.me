# Virtualisation & Amazon AWS vs MRC

## Virtualisation

### Motivation

- **服务器整合 (Server Consolidation):** 通过在单个物理服务器上运行多个虚拟服务器，组织可以提高其硬件的利用率并降低能耗 。
- **按需个人虚拟机:** 用户可以==根据需要创建个人虚拟机，而无需购买物理硬件==，这是公共云计算的基础 。
- **安全性/隔离性 (Security/Isolation):** 虚拟化允许多个用户安全地共享一台物理机器，因为每个用户的环境都与其他用户的环境相隔离 。
- **硬件独立性 (Hardware Independence):** 虚拟机可以轻松地移动或重新部署到不同的物理硬件上 。

> [!info] History
> - Popek 和 Goldberg 在1974年的一篇论文中确立了虚拟化的形式化要求 。
> - 当时的主要动机是昂贵的大型机需要能够同时运行多种不同类型的应用程序

### Principles

- **Fidelity (保真性):** 在虚拟机上运行的软件，其行为应与直接在真实硬件上运行时完全相同，时间上的差异除外 。
- **Performance (性能):** 客户机系统的绝大多数指令应由硬件直接执行，无需 VMM 的干预 。
- **Safety (安全性):** VMM 必须保持对所有硬件资源的完全控制 。

### Terminology

- **Virtual Machine Monitor (VMM) / Hypervisor (虚拟机监视器/管理程序):** 这是位于物理硬件和其支持的虚拟机之间的虚拟化层 。 它使虚拟环境看起来像一台真实的机器，并且性能损失很小 。
- **Virtual Machine (VM) (虚拟机):** ==一种基于软件的真实机器表示==，可以托管一个客户操作系统 。
- **Guest Operating System (客户操作系统):** 在虚拟机环境中运行的操作系统 。
- 在云环境中，**VM** 和 **Instance (实例)** 这两个术语经常互换使用 。

### What happens in a VM?

- VMM 让客户操作系统感觉它拥有自己专用的硬件 。
- 例如，虚拟机内部的**虚拟网络设备 (Virtual Network Device)** 被 VMM 映射到物理的**主机网络设备 (Host Network Device)** 。
- 客户操作系统“看到”的**虚拟磁盘 (Virtual Disk)** 实际上是物理主机硬盘上的一个**镜像文件 (image file)**（格式如 raw, vmdk, vhd, 或 qcow2） 。 VMM 将客户操作系统的磁盘操作转换为对该文件的操作 。
- 该页列出了几种常见的磁盘镜像格式及其描述：
    - **RAW:** 一种非结构化格式 。
    - **VMDK (Virtual Machine Disk):** 被 VMware 等系统使用 。
    - **VHD (Virtual Hard Disk):** 代表一个虚拟硬盘驱动器，可以包含分区和文件系统 。
    - **qcow2 (QEMU Copy On Write):** 一种通过延迟分配存储直到实际需要时才分配来优化存储的格式 。

### Recap on Kernel-User mode separation

- 大多数应用程序作为进程在权限较低的**用户模式 (user mode)** 下运行 。
- 核心操作系统在权限较高的**内核模式 (Kernel mode)** 下运行 。
- 操作系统虚拟化硬件资源（CPU、内存、磁盘），给每个应用程序进程一种拥有完全访问权的错觉 。
- **上下文切换 (Context switches)** 用于“陷入”(trap) 应用程序发出的==敏感调用==，将控制权转移给内核以安全地处理它们 。 例如，像两个数相加这样的简单算术运算可以在用户模式下运行，但更改BIOS设置则必须由内核处理 。

### Classification of Instructions

- **Privileged Instructions (特权指令):** 这些指令如果在用户模式下执行，会引发一个陷入 (trap)（一种将控制权转移到内核的错误），但如果在内核模式下执行则不会 。
- **Sensitive Instructions (敏感指令):** 这些指令的行为取决于硬件的配置或当前模式（用户模式 vs. 内核模式） 。 一个例子是处理中断标志的 `POPF` 指令 。
- **Innocuous Instructions (无害指令):** 这些指令既非特权指令也非敏感指令，例如像加法这样的基本算术运算 。

> [!info]
> 这些是低级系统调用，且指令集因架构类型（如 ARM vs. RISC）而异
### Origin - Principles

> [!info] Thoerem
> 对于任何传统第三代计算机，当且仅当该计算机的**敏感**指令集是其*特权*指令集的子集时，才能为其构建虚拟机监视器 (VMM) 。 ==简单来说，要使一台机器可虚拟化，所有可能暴露或修改底层硬件状态的指令都必须能被 VMM 陷入 (trap)== 。

![](images/Pasted%20image%2020250622152656.png)

- **特权环 (Privilege Rings):** 以特权环的概念为例。 Ring 0 是最高权限（内核），Ring 3 是最低权限（应用程序）。这种分层系统确保了例如用户级的间谍软件无法直接访问像网络摄像头这样的硬件 。

- **重要性:** 后来占主导地位的 IA-32/x86 架构最初并不满足此要求，因此是不可虚拟化的

### x86 Virtualisability

- x86 架构不可虚拟化，因为它有一些敏感指令不是特权指令，因此无法被陷入 (trap) 。 例如，用于存储机器状态字 (`SMSW`) 或处理中断标志 (`POPF`) 的指令 。
- 这个问题在 Robin 和 Irvine 2000年的一篇论文中有记载 。
- 为了解决这个问题，Intel 和 AMD 在其处理器中引入了硬件扩展，以使 x86 可虚拟化 。

    - Intel 引入了 **VT (Virtualisation Technology)** 。
    - AMD 引入了 **SVM (Secure Virtual Machine)** 。

- 这些扩展功能相似，但使用的机器指令略有不同 。

### Typical Virtualisation Strategy

> [!note] 核心策略: 陷入并模拟
> - 客户操作系统 (GuestOS) 在比 VMM 更低的硬件优先级上运行 。
> - 当 GuestOS 尝试执行一个特权指令时，它会“陷入”——控制权被转移给 VMM 。
> - 然后 VMM 会“模拟”该指令对系统硬件资源的影响 。

- **主/影子结构 (Primary/Shadow Structures):** 为实现这一点，VMM 维护着关键硬件结构的“影子”副本，比如内存页表 。 GuestOS 与“主”版本交互，VMM 负责保持主版本与影子版本的一致性 。

- **内存追踪 (Memory Traces):** 为保持这些结构的一致性，VMM 通常会对主副本进行写保护。这样，客户机任何修改它们的尝试都会导致一个页错误，VMM 可以捕获、解释并正确处理这个错误 。 这可以防止一个虚拟机中的某个应用导致整个服务器崩溃 。

### Major VMM / Hypervisor Providers

- **VMware Workstation:** 一种完全虚拟化解决方案，运行在像 Windows 或 Linux 这样的主机操作系统之上 。
- **VMware ESX Server:** 一种裸金属 (bare-metal) hypervisor，意味着它直接运行在硬件上，没有主机操作系统 。
- **Xen:** 一种半虚拟化 (para-virtualization) 解决方案，需要修改过的客户操作系统，并运行在像 Linux 或 Solaris 这样的主机上 。
- **KVM:** 一种硬件虚拟化解决方案，是 Linux 内核的一部分 。

### Two way realising VMMs

#### Full virtualisation

VMM 模拟完整的硬件，允许一个**未经修改**的客户操作系统在隔离环境中运行 。 ==客户操作系统完全不知道自己并非运行在物理硬件上== 。 VMware 是一个例子 。

- **优点:**
	- 客户操作系统不知道自己处于虚拟机中，也无需修改 。
	- 可以运行传统的操作系统 。
	- 不需要特定的硬件或操作系统协助 。
- **缺点:**
	- 由于陷入和翻译特权指令的开销，==效率可能较低== 。
#### Para-virtualisation 

VMM 向客户操作系统==暴露一个特殊的接口以获得更好的性能== 。 这需要一个**经过修改内核**或“能感知 hypervisor”的客户操作系统，==它知道如何使用这个特殊接口== 。 Xen 是一个例子 。 因为并非所有指令都需要被陷入，所以性能可以得到优化

- **优点:**
    - ==它的虚拟化开销更低，从而带来更好的性能== 。 Xen 是一个例子 。
- **缺点:**
    - 需要修改客户操作系统，因此不能运行任意的操作系统 。
    - 与完全虚拟化相比，它的可移植性较差，兼容性也较低 。

### Operating System Level Virtualisation

> [!quote]
> 也称为容器化

- 这种方法创建的是轻量级的“容器”，而不是完整的虚拟机 。
- 所有容器共享一个共同的宿主操作系统内核，这对于许多用例来说已经足够 。
- 你不能用这种方法来运行一个不同的操作系统（比如在 Linux 主机上运行 Windows），但这通常不是必需的 。
- 例子包括 Docker、LXC 和 OpenVZ 。
- 图表显示，在容器化环境中，应用程序通过 Docker 引擎共享宿主操作系统内核，这与传统的 hypervisor 设置不同，后者每个虚拟机都有自己完整的客户操作系统 。

- **优点:**
    - 它比完全虚拟化更轻量、更快速 。
    - 与虚拟机相比，在相同的硬件上可以运行更多的容器 。
    - 它可以用来将一个应用程序及其所有操作系统依赖项打包到一个容器中，这对于应用程序开发很有利 
    
- **缺点:**
    - 只能运行为相同宿主操作系统设计的应用程序 。
    - 不能托管一个不同的客户操作系统 。
    - 只能使用本地文件系统，并与其他容器共享资源
### Memory Virtualisation

- 传统上，操作系统使用页表 (page tables) 将进程的逻辑页号映射到内存中的物理页号 。
- 提出的问题是：在虚拟机环境中会发生什么？ 现在存在多层地址转换：
    1. 客户操作系统内的进程有自己的 **逻辑页 -> 客户机物理页** 映射 。
    2. 然后 VMM 必须将 **客户机物理页 -> 实际机器页** 进行映射 。
        
- **Terminology (名词术语):**
    
    - Page table: 页表
    - Logical page: 逻辑页
    - Physical page: 物理页
### Another two way realising

#### Hardware-assisted virtualisation

![](images/Pasted%20image%2020250622173015.png)
硬件本身为运行 hypervisor 提供了架构支持 。 大多数新处理器都具备此功能（例如 Intel VT, AMD-V），这确保了所有敏感指令都是可陷入的 。 KVM 是一个例子 。

- **优点:**
    - 性能好 。
    - Hypervisor 更易于实现 。
    - 高级实现可以支持硬件辅助的内存虚拟化和直接内存访问 (DMA) 以获得更快的速度 。
- **缺点:**
    - ==需要 CPU 提供特定的硬件支持== 。

#### Binary Translation
![](images/Pasted%20image%2020250622173024.png)
这是一种基于软件的方法，VMM “动态地”扫描客户机的指令流，并将敏感指令替换为能安全实现相同结果的模拟代码 。 VMware 是一个例子 。 这不需要特殊的硬件支持，但实现起来可能要困难得多，因为指令集之间很少存在一对一的映射 。

- **优点:**
    - ==客户操作系统无需修改== 。
    - ==它不需要特殊的硬件或操作系统协助 ==。
    - 可以运行传统的操作系统 。
- **缺点:**
    - 实现复杂 。
    - 由于需要“动态”替换指令，会产生性能开销 

### Two different hypervisor architectures

- **Bare Metal Hypervisor (裸金属 Hypervisor):** 在这种架构中，VMM 直接运行在物理硬件上 。 没有底层的宿主操作系统。VMM 本身负责管理硬件和设备驱动程序 。 VMware ESX Server 是一个例子 。
- **Hosted Virtualisation (托管式虚拟化):** 在这种架构中，VMM 作为一个应用程序运行在传统的宿主操作系统（如 Windows 或 Linux）之上 。 VMware Workstation 是一个例子 。

### Operating System Level Virtualisation

- 这种方法创建的是轻量级的“容器”，而不是完整的虚拟机 。
- 所有容器共享一个共同的宿主操作系统内核，这对于许多用例来说已经足够 。
- 你不能用这种方法来运行一个不同的操作系统（比如在 Linux 主机上运行 Windows），但这通常不是必需的 。
- 例子包括 Docker、LXC 和 OpenVZ 。
- 图表显示，在容器化环境中，应用程序通过 Docker 引擎共享宿主操作系统内核，这与传统的 hypervisor 设置不同，后者每个虚拟机都有自己完整的客户操作系统 。

- **优点:**
    - 它比完全虚拟化更轻量、更快速 。
    - 与虚拟机相比，在相同的硬件上可以运行更多的容器 。
    - 它可以用来将一个应用程序及其所有操作系统依赖项打包到一个容器中，这对于应用程序开发很有利 
- **缺点:**
    - 只能运行为相同宿主操作系统设计的应用程序 。
    - 不能托管一个不同的客户操作系统 。
    - 只能使用本地文件系统，并与其他容器共享资源 。

### Memory Virtualisation

- 传统上，操作系统使用页表 (page tables) 将进程的逻辑页号映射到内存中的物理页号 。
- 提出的问题是：在虚拟机环境中会发生什么？ 现在存在多层地址转换：
    
    1. 客户操作系统内的进程有自己的 **逻辑页 -> 客户机物理页** 映射 。
    2. 然后 VMM 必须将 **客户机物理页 -> 实际机器页** 进行映射 。

#### Shadown page tables

- 为了管理这两个层级的地址转换，VMM 维护着自己的一套 **“影子”页表 ("shadow" page tables)** 
- 这些影子页表==直接将客户机进程的虚拟地址映射到实际机器的物理地址== 。
- VMM 保持这些影子页表与客户操作系统自己的页表同步 。
- ==这增加了管理开销==，但允许==硬件一步完成从客户机虚拟地址到机器物理地址的完整地址转换==


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