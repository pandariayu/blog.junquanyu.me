# Mock Exam

## Short Essay Questions (10 points each)

1. Explain Brewer’s CAP Theorem and discuss how it impacts the design of distributed database systems such as CouchDB, PostgreSQL, and ElasticSearch. Provide examples of how each system prioritizes the CAP properties.  
   
   *Your answer should cover the definitions of Consistency, Availability, and Partition Tolerance, and relate these to the architectures and trade-offs in the three systems.*

2. Compare and contrast full virtualization, para-virtualization, and container-based virtualization. Include in your answer the advantages and disadvantages of each approach, and provide examples of technologies or platforms that use each type.

3. Describe the main security challenges in cloud computing environments. Discuss the roles of authentication, authorization, and auditing, and explain how these are typically implemented in cloud systems.

4. Security is a critical challenge in cloud and distributed systems. Analyze the interplay between authentication, authorization, and auditing in a federated cloud environment. How do technologies like PKI, Shibboleth, and RBAC contribute to security, and what are the main unresolved challenges in achieving secure, scalable, and user-friendly access control?

5. A research team has a monolithic scientific data processing application running on a single, powerful server. This application ingests large data files as they arrive, performs a complex, multi-hour computation on each file, and stores the results. The team is facing challenges with scalability, as the volume and arrival rate of data files are increasing, and the application is difficult to update without risking the entire system.
   
   Propose a modernization strategy for this application using the cloud-native technologies discussed in the course. Your proposed architecture should justifiably incorporate **Containers (Docker)**, **Container Orchestration (Kubernetes)**, and **Serverless/FaaS (Fission)**. Explain how your new design improves scalability, maintainability, and resilience compared to the original monolithic approach.

6. Compare and contrast the High-Performance Computing (HPC) model, as exemplified by the **Spartan** system, with the Infrastructure-as-a-Service (IaaS) cloud model, as exemplified by the **Melbourne Research Cloud (MRC)**. Your analysis should address architectural differences, resource management and job submission paradigms, typical use cases discussed in the lectures, and the underlying economic and resource allocation models.

## Multiple Choice Questions Part 1

**1. Which of the following is NOT one of the four Vs of Big Data?**  

A) Volume  
B) Velocity  
C) Variety  
D) Visualization

**2. In the context of distributed systems, what does "partition tolerance" mean?**  

A) The system can recover from a power failure  
B) The system continues to operate even if some nodes cannot communicate  
C) The system prevents unauthorized access  
D) The system automatically balances load

**3. Which DBMS uses Multi-Version Concurrency Control (MVCC) to ensure high availability?**  

A) PostgreSQL  
B) CouchDB  
C) ElasticSearch  
D) Oracle

**4. Which virtualization approach requires modifying the guest operating system?**  

A) Full virtualization  
B) Para-virtualization  
C) Container-based virtualization  
D) Hardware-assisted virtualization

**5. What is the main advantage of container-based virtualization?**

A) Can run any OS  
B) Lightweight and fast startup  
C) Requires hardware support  
D) Needs a modified guest OS

**6. In ElasticSearch, what is a "shard"?**

A) A backup of the database  
B) A horizontal partition of an index  
C) A user access policy  
D) A type of query

**7. Which of the following is NOT a core characteristic of cloud computing according to NIST?**  

A) On-demand self-service  
B) Resource pooling  
C) Manual provisioning  
D) Rapid elasticity

**8. Which AWS service is equivalent to OpenStack’s Nova?**

A) S3  
B) EC2  
C) Swift  
D) Cinder

**9. What is the main function of a Virtual Machine Monitor (VMM) or hypervisor?**  

A) Manage user accounts  
B) Allocate physical resources to VMs  
C) Encrypt network traffic  
D) Store backup data

**10. Which of the following is a document-oriented DBMS?** 

A) MySQL  
B) PostgreSQL  
C) CouchDB  
D) Oracle

**11. In the CAP theorem, which two properties are typically prioritized by CouchDB?**  

A) Consistency and Availability  
B) Consistency and Partition Tolerance  
C) Availability and Partition Tolerance  
D) Availability and Security

**12. Which of the following is NOT a valid data type in ElasticSearch?**

A) Keyword  
B) Vector  
C) Table  
D) Geo

**13. What is the primary purpose of sharding in distributed databases?**  

A) Increase security  
B) Partition data for performance and scalability  
C) Encrypt data  
D) Reduce costs

**14. Which of the following is NOT a typical role of a node in ElasticSearch?**

A) Master  
B) Data  
C) Backup  
D) Ingest

**15. What does "measured service" mean in the context of cloud computing?**  

A) Services are manually tracked  
B) Resource usage is automatically monitored and billed  
C) Services are free  
D) Data is encrypted

**16. Which of the following is a benefit of using serverless (FaaS) architectures?**  

A) Manual scaling required  
B) No need to manage infrastructure  
C) Functions must always be running  
D) Only supports Python

**17. Which of the following is NOT a typical security challenge in cloud environments?** 

A) Authentication  
B) Data deletion  
C) High availability  
D) Auditing

**18. What is the primary function of OpenStack Swift?**

A) Compute resource management  
B) Object storage  
C) Network management  
D) Database service

**19. Which of the following best describes "vertical scaling"?** 

A) Adding more servers to a system  
B) Increasing the power of existing servers  
C) Distributing data across nodes  
D) Adding more network bandwidth

**20. Which of the following is NOT a valid method of scaling in ElasticSearch?**

A) Vertical scaling  
B) Horizontal scaling  
C) Diagonal scaling  
D) Adding more nodes

**21. In OpenStack, which service is responsible for identity and access management?**  

A) Nova  
B) Swift  
C) Keystone  
D) Glance

**22. Which of the following is a key advantage of full virtualization?**

A) High performance  
B) No need to modify guest OS  
C) Requires specific hardware  
D) Only works with Linux

**23. Which of the following is a disadvantage of para-virtualization?**

A) High overhead  
B) Requires guest OS modification  
C) Cannot run legacy OS  
D) Both B and C

**24. What is the main difference between OpenStack and AWS?**

A) AWS is open source  
B) OpenStack is community-driven, AWS is proprietary  
C) AWS only supports Linux  
D) OpenStack has more services

**25. Which of the following is NOT a typical use case for ElasticSearch?**

A) Full-text search  
B) OLAP data warehousing  
C) Log analysis  
D) Time-series data retrieval

**26. Which of the following is a common approach for handling authorization in cloud systems?**

A) Group-based access control  
B) File-based access control  
C) Manual password sharing  
D) None of the above

**27. Which of the following is NOT a benefit of cloud computing?**

A) Rapid elasticity  
B) On-demand self-service  
C) Manual resource allocation  
D) Resource pooling

**28. What is the purpose of a Certification Authority (CA) in cloud security?**

A) Issue public key certificates  
B) Monitor network traffic  
C) Store user data  
D) Encrypt files

**29. Which of the following is true about ElasticSearch index status "yellow"?**

A) All shards are allocated  
B) Some replicas are not allocated, but the cluster is operational  
C) The cluster is down  
D) No data is accessible

**30. Which AWS service provides managed relational databases?**

A) S3  
B) RDS  
C) EC2  
D) Swift

**31. What is the main role of the master node in ElasticSearch?**

A) Store all data  
B) Coordinate cluster actions and manage shards  
C) Handle user authentication  
D) Perform backups

**32. Which of the following is NOT a typical component of the Elastic Stack?**

A) Logstash  
B) Kibana  
C) Hadoop  
D) Filebeat

**33. In the context of virtualization, what is a "bare metal hypervisor"?**

A) Runs on top of another OS  
B) Runs directly on hardware  
C) Only supports Windows  
D) Is slower than hosted hypervisors

**34. Which of the following is NOT a function of OpenStack Cinder?**

A) Block storage  
B) Compute resource management  
C) Volume management  
D) Persistent storage

**35. What is the main advantage of hardware-assisted virtualization?**

A) Does not require hardware support  
B) Improved performance and easier implementation  
C) Only works with Linux  
D) Needs guest OS modification

**36. Which of the following is NOT a typical cloud deployment model?**

A) Public cloud  
B) Private cloud  
C) Hybrid cloud  
D) Legacy cloud

**37. What is the main function of OpenStack Neutron?**

A) Compute management  
B) Network management  
C) Object storage  
D) Identity management

**38. Which of the following is NOT a challenge of distributed systems?**

A) Network reliability  
B) Infinite bandwidth  
C) Homogeneous network  
D) All nodes are always available

**39. Which of the following is a key feature of OpenStack Glance?**

A) Network management  
B) Image management  
C) Compute resource management  
D) Object storage

**40. Which of the following best describes "measured service" in cloud computing?**

A) Manual billing  
B) Automatic resource usage tracking and billing  
C) Unlimited free usage  
D) User-managed encryption

## Multiple Choice Question Part 2

**Q1:** According to Amdahl's Law, if 90% of a program's execution time can be parallelized, what is the theoretical maximum speedup you can achieve, regardless of how many processors you use?  

A) 9x 
B) 10x 
C) 90x 
D) 100x 
E) The speedup is unlimited.

**Q2:** Which of the following are categories in Flynn's Taxonomy for classifying computer architectures? (Select all that apply)  

A) Single Instruction, Single Data (SISD) 
B) Single Instruction, Multiple Data (SIMD) 
C) Multiple Instruction, Single Data (MISD) 
D) Multiple Instruction, Multiple Data (MIMD) 
E) Multiple Instruction, Variable Data (MIVD)

**Q3:** Which of the following is the Slurm command to submit a job script to the scheduler on an HPC system like Spartan?  

A) `srun` 
B) `squeue` 
C) `sbatch` 
D) `scancel`
E) `qsub`

**Q4:** In the context of the Spartan HPC system, what is the primary purpose of the `module load` command?  

A) To load a dataset into the memory of a compute node. 
B) To dynamically modify the user's environment to make a specific software application and its libraries available. 
C) To compile source code into an executable module. 
D) To request a specific number of compute modules (nodes) for a job. 
E) To transfer a software module from the login node to a compute node.

**Q5:** According to the NIST definition, which of the following are considered essential characteristics of cloud computing? (Select all that apply)  

A) On-demand self-service 
B) Vendor-specific APIs 
C) Rapid elasticity 
D) Resource pooling 
E) Fixed-term contracts

**Q6:** In the "as-a-Service" models, which model gives the user the most control over the operating system and middleware?  

A) Software as a Service (SaaS) 
B) Platform as a Service (PaaS) 
C) Infrastructure as a Service (IaaS) 
D) Function as a Service (FaaS) 
E) All models provide the same level of control.

**Q7:** What is the code-name for the OpenStack Identity service, which handles authentication and authorization?  

A) Nova 
B) Cinder 
C) Swift 
D) Glance 
E) Keystone

**Q8:** Which OpenStack component is responsible for providing persistent block storage to virtual machine instances?  

A) Swift 
B) Cinder 
C) Neutron 
D) Nova 
E) Glance

**Q9:** What is a primary advantage of containerization (e.g., Docker) when compared to traditional virtualization (e.g., VMs)?  

A) Containers provide stronger security isolation than VMs. 
B) Containers can run a different operating system from the host. 
C) Containers have significantly lower resource overhead because they share the host OS kernel.
D) Containers have a longer boot time, which allows for more thorough initialization.
E) Containers do not require a network connection.

**Q10:** In Docker, what is the purpose of a `Dockerfile`?  

A) It is a running instance of an application. 
B) It is a configuration file that defines a multi-container application for Docker Compose. 
C) It is a script containing a set of instructions to build a Docker image. 
D) It is a storage volume that persists data generated by a container. 
E) It is a log file that records all commands executed within a container.

**Q11:** Which Docker networking mode would you use if you wanted a container to have its own IP address on the physical network, making it appear like a separate physical machine?  

A) host 
B) bridge 
C) overlay 
D) macvlan
E) none

**Q12:** According to the lectures, what is the smallest deployable unit in a Kubernetes cluster?  

A) A Container 
B) A Service 
C) A Deployment 
D) A Pod 
E) A Node

**Q13:** In Kubernetes, what is the primary function of a `Service` object?  

A) To define a set of identical pods and manage their lifecycle. 
B) To provide persistent storage for a pod. 
C) To expose a set of pods as a network service with a stable IP address and DNS name. 
D) To manage external access to services within the cluster, typically for HTTP traffic. 
E) To schedule a pod onto a specific node.

**Q14:** Which `kubectl` command is used to apply a configuration defined in a YAML file to a Kubernetes cluster?  

A) `kubectl create -f <file.yaml>` 
B) `kubectl run -f <file.yaml>` 
C) `kubectl apply -f <file.yaml>` 
D) `kubectl exec -f <file.yaml>` 
E) `kubectl config -f <file.yaml>`

**Q15:** In the context of Function-as-a-Service (FaaS), what does "stateless" mean for a function?  

A) The function cannot be called more than once. 
B) The function does not retain any information about previous invocations internally. 
C) The function runs without an underlying operating system. 
D) The function always returns the same value, regardless of its input. 
E) The function cannot have any side-effects.

**Q16:** In the Fission FaaS framework, what is the role of an "Environment"?  

A) It is the YAML file that defines the function's triggers. 
B) It is the source code for the function. 
C) It is the language-specific Docker image that provides the runtime for a function. 
D) It is a message queue used for asynchronous function invocation. 
E) It is the set of environment variables passed to the function.

**Q17:** What is the primary benefit of using "Fission Specs"?  

A) To test a function's performance under heavy load. B) To enable declarative application management and Infrastructure as Code (IaC). C) To provide a graphical user interface for managing functions. D) To automatically generate function source code from a template. E) To bypass the Kubernetes API for faster deployment.

**Q18:** Which of the "Four Vs" of Big Data refers to the level of trust in the data's accuracy and provenance?  

A) Volume B) Velocity C) Variety D) Veracity E) Viscosity

**Q19:** In a distributed database like ElasticSearch, what is a "shard"?  

A) A full backup copy of an entire index. B) A log of all transactions performed on an index. C) A horizontal partition of an index, containing a subset of the documents. D) A node in the cluster that is eligible to become a master. E) A type of query used for full-text search.

**Q20:** What is a key limitation of the ElasticSearch SQL dialect mentioned in the lectures?  

A) It only supports `SELECT *` queries. 
B) It does not support joins between documents. 
C) It can only query one index at a time. 
D) It is slower than the Query DSL for all use cases. 
E) It does not support `WHERE` clauses.

**Q21:** According to the Popek and Goldberg theorem, a virtual machine monitor (VMM) can be constructed if the set of sensitive instructions is a subset of which set of instructions?  

A) User-mode instructions 
B) Innocuous instructions 
C) I/O instructions 
D) Privileged instructions 
E) Arithmetic instructions

**Q22:** What is the fundamental difference between full virtualization and para-virtualization?  

A) Full virtualization requires hardware support, while para-virtualization does not. 
B) Para-virtualization requires the guest OS to be modified to use a special hypervisor API, while full virtualization runs an unmodified guest OS. 
C) Full virtualization can only run Linux guests, while para-virtualization can run Windows guests.
D) Para-virtualization is more secure but has lower performance than full virtualization. 
E) Full virtualization runs the VMM in Ring 3, while para-virtualization runs it in Ring 0.

**Q23:** During the live migration of a virtual machine, what happens in the "Iterative Pre-copy" stage?  

A) The VM on the source host is stopped completely. 
B) A new, empty VM container is reserved on the target host. 
C) Dirty memory pages are copied from the source to the target host in successive rounds while the VM is still running. 
D) The final VM state is committed to the target host and released from the source host. 
E) Network traffic is redirected to the target host using ARP.

**Q24:** What is the primary function of a Certification Authority (CA) within a Public Key Infrastructure (PKI)?  

A) To generate private keys for users. 
B) To encrypt all network traffic between a client and a server. 
C) To issue and manage digital certificates that bind a public key to an identity. 
D) To store all user passwords in a secure database. 
E) To define the firewall rules for an organization.

**Q25:** What is the key difference between authentication and authorization?  

A) Authentication determines _who_ a user is, while authorization determines _what_ that user is allowed to do. 
B) Authorization determines _who_ a user is, while authentication determines _what_ that user is allowed to do. 
C) Authentication is only used in private clouds, while authorization is used in public clouds. 
D) Authentication uses symmetric keys, while authorization uses asymmetric keys. 
E) They are two terms for the same process.

**Q26:** The lecture on cloud security mentions several challenges. Which challenge is directly related to the "pay as you go" model?  

A) Vendor lock-in. 
B) Data deletion and sanitization. 
C) Unexpectedly high charges if usage is not carefully managed. 
D) Software licensing models. 
E) Ensuring physical security of the data center.

**Q7:** What is the primary purpose of Shibboleth, as described in the security lecture?  

A) To provide a centralized firewall service for cloud applications. 
B) To scan Docker containers for known vulnerabilities. 
C) To enable decentralized, federated authentication, allowing users to log in using their home institution credentials. 
D) To encrypt data stored in object storage services like AWS S3. 
E) To manage and orchestrate security policies in a workflow.

**Q28:** The historical evolution from Grid Computing to Cloud Computing represents a shift in focus from:  

A) Individual PC performance to mainframe performance. 
B) Resource sharing between organizations to on-demand service provisioning. 
C) Proprietary software to open-source software. 
D) Data storage to data processing. 
E) Asynchronous communication to synchronous communication.

**Q29:** In an HPC environment like Spartan, which parallel programming model is typically used for distributed-memory applications that run across multiple nodes?  

A) OpenMP 
B) Pthreads 
C) C++ Threads 
D) MPI (Message Passing Interface) 
E) Docker Swarm

**Q30:** Which of the following is a key characteristic of a "monolithic" application architecture, as contrasted with a serverless/microservices architecture?  

A) It is composed of many small, independently deployable services. 
B) A failure in one part of the application is unlikely to affect other parts. 
C) All parts of the application are tightly-coupled and deployed as a single unit. 
D) It scales horizontally with ease. 
E) It is inherently more secure.

**Q31:** In the AWS vs. OpenStack comparison, which AWS service is the conceptual equivalent of OpenStack Nova?  

A) S3 
B) EC2 
C) RDS 
D) Lambda 
E) VPC

**Q32:** Which of the following are valid data models for distributed environments as discussed in the lectures? (Select all that apply)  

A) Key-value store 
B) Relational model 
C) Document-oriented 
D) BigTable 
E) Hierarchical model

**Q33:** A Kubernetes `Deployment` manifest specifies `replicas: 3`. If one of the three running pods crashes, what will the Kubernetes control plane do?  

A) It will terminate the other two pods. 
B) It will automatically create a new pod to replace the crashed one, restoring the total to 3.
C) It will send an alert to the administrator but take no action. 
D) It will reduce the replica count to 2 permanently. 
E) It will wait for the crashed pod to restart itself.

**Q34:** What is a "cold start" in a FaaS environment?  

A) The process of rebooting the entire FaaS platform. 
B) The latency incurred when a function is invoked for the first time and the FaaS platform needs to initialize its runtime environment and load the code. 
C) A security feature that prevents functions from running in an un-trusted environment. 
D) An error state where a function fails to start. 
E) Running a function without any input parameters.

**Q35:** If an ElasticSearch cluster has unassigned replica shards because there are not enough nodes to host them without duplication, what status will the cluster report?  

A) Green 
B) Blue 
C) Yellow 
D) Red 
E) Grey

**Q36:** Which of the following OpenStack components provides a web-based dashboard for users to interact with cloud services?  

A) Keystone 
B) Horizon 
C) Cinder 
D) Heat 
E) Neutron

**Q37:** A developer needs to run a long-running, stateful data processing job. Which of the following would be the most appropriate technology choice based on the lecture material?  

A) A Fission function triggered by an HTTP request. 
B) A containerized application managed by a Kubernetes Deployment. 
C) A simple script running on the HPC login node. 
D) A SaaS application like Gmail. E) None of the above.

**Q38:** Which of the following statements accurately reflects the trade-offs between IaaS and PaaS?  

A) PaaS offers more control over the underlying network and servers than IaaS. 
B) IaaS is simpler for developers as they do not need to manage the operating system or runtime. C) PaaS abstracts away the underlying infrastructure, allowing developers to focus solely on their application code and data, but offers less flexibility than IaaS. 
D) IaaS and PaaS are identical in terms of the separation of responsibilities. 
E) PaaS is generally more expensive for all use cases than IaaS.

**Q39:** Which of the following is an example of a "side-effect" in a FaaS function?  

A) A function that takes two numbers and returns their sum. 
B) A function that takes a string and returns its length. 
C) A function that takes an image and returns a black-and-white version of it in memory. 
D) A function that receives a user ID and writes a record to an external database. 
E) A function that performs a computationally intensive task that takes a long time to complete.

**Q40:** The lecture on cloud costs highlighted that one type of network traffic is typically far more expensive than its counterpart. Which is it?  

A) Ingress (data transfer into the cloud) is more expensive than egress. 
B) Egress (data transfer out of the cloud) is more expensive than ingress. 
C) East-West traffic (between services in the same region) is more expensive than North-South traffic. 
D) Traffic within a single availability zone is the most expensive. 
E) Ingress and egress traffic are always priced identically.

## Essay Question Answer

**Question 1: Rubric (10 points)**

- **(2 points) Architectural Differences:**
    
    - Correctly identifies HPC/Spartan as often using bare-metal or near-bare-metal nodes to minimize overhead and maximize performance for tightly-coupled computations.  
      正确识别 HPC/Spartan，就像经常使用裸机或近裸机节点一样，以最大限度地减少开销并最大限度地提高紧密耦合计算的性能。
        
    - Correctly identifies IaaS/MRC as being fundamentally based on virtualization (using a hypervisor like KVM) to create isolated, multi-tenant environments (VMs/instances).  
      正确识别 IaaS/MRC 从根本上基于虚拟化（使用 KVM 等虚拟机管理程序）来创建隔离的多租户环境（VM/实例）。
        
    - Mentions that HPC systems often feature high-speed, low-latency interconnects (e.g., InfiniBand) which are critical for parallel applications (like MPI), whereas IaaS networking is typically standard Ethernet optimized for general-purpose traffic.  
      提到 HPC 系统通常具有高速、低延迟的互连（例如 InfiniBand），这对于并行应用程序（如 MPI）至关重要，而 IaaS 网络通常是针对通用流量进行优化的标准以太网。
        
- **(3 points) Resource Management and Job Submission:**
    
    - Accurately describes the HPC/Spartan model using a batch queuing system (Slurm) where users submit job scripts (`#SBATCH`) requesting specific resources (`--nodes`, `--cpus-per-task`) for a fixed duration. The focus is on scheduling and resource allocation for background jobs.  
      使用批量排队系统 （Slurm） 准确描述 HPC/Spartan 模型，其中用户提交作业脚本 （'#SBATCH'），请求固定持续时间的特定资源（'--nodes'、'--cpus-per-task'）。重点是后台作业的计划和资源分配。 
        
    - Accurately describes the IaaS/MRC model as on-demand and self-service, where users provision resources (VMs) interactively via a dashboard (Horizon) or programmatically via APIs. The focus is on the lifecycle management of persistent or ephemeral instances.  
      准确地将 IaaS/MRC 模型描述为按需和自助服务，其中用户通过仪表板 （Horizon） 以交互方式或通过 API 以编程方式预置资源 （VM）。重点是持久性或临时实例的生命周期管理。 
        
    - Contrasts the two: Slurm is a _job scheduler_ for a shared pool of static resources, while OpenStack is a _cloud orchestrator_ for dynamic, virtualized resources.
      将两者进行对比：Slurm 是静态资源共享池的_job scheduler_，而 OpenStack 是动态虚拟化资源的_cloud orchestrator_。
        
- **(3 points) Use Cases and Economic Models:**
    
    - Identifies typical HPC use cases from the lectures: large-scale scientific simulations (climate models, molecular dynamics), data processing for physics, and problems requiring massive parallel computation (e.g., breaking the Zodiac cipher). The model is "capability computing."  确定了典型的 HPC 使用案例：大规模科学模拟（气候模型、分子动力学）、物理数据处理以及需要大规模并行计算的问题（例如，破解 Zodiac 密码）。该模型是 “能力计算”。
        
    - Identifies typical IaaS use cases: hosting web applications, scalable data pipelines, development/testing environments, and workloads with variable or unpredictable demand that benefit from elasticity. The model is "capacity computing."  
      确定典型的 IaaS 使用案例：托管 Web 应用程序、可扩展的数据管道、开发/测试环境以及具有可变或不可预测的需求的工作负载，这些工作负载受益于弹性。该模型是 “容量计算”。 
        
    - Contrasts the economic models: HPC is typically project-based, with resources allocated for free (or via grant) to approved research projects (like the COMP90024 project on Spartan). Commercial IaaS is a pay-as-you-go, utility model, while research clouds like MRC/NECTAR are often centrally funded and free at the point of use for researchers.
      对比经济模型：HPC 通常是基于项目的，资源免费（或通过赠款）分配给已批准的研究项目（如 Spartan 上的 COMP90024 项目）。商业 IaaS 是一种即用即付的实用模式，而 MRC/NECTAR 等研究云通常由集中资助，并在使用点免费供研究人员使用。 
        
- **(2 points) Synthesis and Conclusion:**
    
    - Provides a clear synthesis concluding that the choice between the two is not about which is "better" but which is appropriate for the problem domain.
    - 提供了一个清晰的综合结论，即两者之间的选择不是关于哪个“更好”，而是哪个适合问题域。
        
    - A strong answer will connect the concepts, explaining that the architectural choices (bare-metal vs. VM) directly enable the different resource management paradigms (batch vs. on-demand), which in turn are suited to the different use cases (tightly-coupled parallel vs. loosely-coupled scalable).
    - 一个强有力的答案将把这些概念联系起来，解释架构选择（裸机与虚拟机）直接支持不同的资源管理范式（批处理与按需），而这些范式又适合不同的用例（紧密耦合的并行与松散耦合的可扩展）。