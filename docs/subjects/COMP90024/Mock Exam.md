# Mock Exam

## Part I: Short Essay Questions I

1. Explain Brewer’s CAP Theorem and discuss how it impacts the design of distributed database systems such as CouchDB, PostgreSQL, and ElasticSearch. Provide examples of how each system prioritizes the CAP properties.  
   
   *Your answer should cover the definitions of Consistency, Availability, and Partition Tolerance, and relate these to the architectures and trade-offs in the three systems.*

2. Compare and contrast full virtualization, para-virtualization, and container-based virtualization. Include in your answer the advantages and disadvantages of each approach, and provide examples of technologies or platforms that use each type.

3. Describe the main security challenges in cloud computing environments. Discuss the roles of authentication, authorization, and auditing, and explain how these are typically implemented in cloud systems.

4. Security is a critical challenge in cloud and distributed systems. Analyze the interplay between authentication, authorization, and auditing in a federated cloud environment. How do technologies like PKI, Shibboleth, and RBAC contribute to security, and what are the main unresolved challenges in achieving secure, scalable, and user-friendly access control?

## Part I: Short Essay Questions II

**Question 1**

Compare and contrast the High-Performance Computing (HPC) model, as exemplified by the **Spartan** system, with the Infrastructure-as-a-Service (IaaS) cloud model, as exemplified by the **Melbourne Research Cloud (MRC)**. Your analysis should address architectural differences, resource management and job submission paradigms, typical use cases discussed in the lectures, and the underlying economic and resource allocation models.

**Question 2**

Define the three components of the **CAP Theorem (Consistency, Availability, Partition Tolerance)** and explain the fundamental trade-off it describes for distributed systems. Apply this theorem to analyze the architectural designs of **CouchDB** and **ElasticSearch** as presented in the course. For each system, identify which two properties it primarily optimizes for and discuss the practical consequences of this choice for an application developer using that system.

Couch DB - AP (MVCC) 
Availability and Partion-tolerance 
It allows multiple transaction visiting database concurrently and won't have any conflicts.
Every process carry a timestamp and when reading the data

ElasticSearch - CP (Paxos & Two phase commit)
PostgreSQL - CA (Two phase commit)

**Question 3**

A research team has a monolithic scientific data processing application running on a single, powerful server. This application ingests large data files as they arrive, performs a complex, multi-hour computation on each file, and stores the results. The team is facing challenges with scalability, as the volume and arrival rate of data files are increasing, and the application is difficult to update without risking the entire system.

Propose a modernization strategy for this application using the cloud-native technologies discussed in the course. Your proposed architecture should justifiably incorporate **Containers (Docker)**, **Container Orchestration (Kubernetes)**, and **Serverless/FaaS (Fission)**. Explain how your new design improves scalability, maintainability, and resilience compared to the original monolithic approach.

---

## Part II: Multiple-Choice Questions

_(Select the best answer or answers. 40 questions, 0.5 points each.)_

**Q1:** According to Amdahl's Law, if 90% of a program's execution time can be parallelized, what is the theoretical maximum speedup you can achieve, regardless of how many processors you use? 1

A) 9x

B) 10x

C) 90x

D) 100x

E) The speedup is unlimited.

**Q2:** Which of the following are categories in Flynn's Taxonomy for classifying computer architectures? (Select all that apply) 1

A) Single Instruction, Single Data (SISD)

B) Single Instruction, Multiple Data (SIMD)

C) Multiple Instruction, Single Data (MISD)

D) Multiple Instruction, Multiple Data (MIMD)

E) Multiple Instruction, Variable Data (MIVD)

**Q3:** Which of the following is the Slurm command to submit a job script to the scheduler on an HPC system like Spartan? 1

A) srun

B) squeue

C) sbatch

D) scancel

E) qsub

**Q4:** In the context of the Spartan HPC system, what is the primary purpose of the `module load` command? 1

A) To load a dataset into the memory of a compute node.

B) To dynamically modify the user's environment to make a specific software application and its libraries available.

C) To compile source code into an executable module.

D) To request a specific number of compute modules (nodes) for a job.

E) To transfer a software module from the login node to a compute node.

**Q5:** According to the NIST definition, which of the following are considered essential characteristics of cloud computing? (Select all that apply) 1

A) On-demand self-service

B) Vendor-specific APIs

C) Rapid elasticity

D) Resource pooling

E) Fixed-term contracts

**Q6:** In the "as-a-Service" models, which model gives the user the most control over the operating system and middleware? 1

A) Software as a Service (SaaS)

B) Platform as a Service (PaaS)

C) Infrastructure as a Service (IaaS)

D) Function as a Service (FaaS)

E) All models provide the same level of control.

**Q7:** What is the code-name for the OpenStack Identity service, which handles authentication and authorization? 1

A) Nova

B) Cinder

C) Swift

D) Glance

E) Keystone

**Q8:** Which OpenStack component is responsible for providing persistent block storage to virtual machine instances? 1

A) Swift

B) Cinder

C) Neutron

D) Nova

E) Glance

**Q9:** What is a primary advantage of containerization (e.g., Docker) when compared to traditional virtualization (e.g., VMs)? 1

A) Containers provide stronger security isolation than VMs.

B) Containers can run a different operating system from the host.

C) Containers have significantly lower resource overhead because they share the host OS kernel.

D) Containers have a longer boot time, which allows for more thorough initialization.

E) Containers do not require a network connection.

**Q10:** In Docker, what is the purpose of a `Dockerfile`? 1

A) It is a running instance of an application.

B) It is a configuration file that defines a multi-container application for Docker Compose.

C) It is a script containing a set of instructions to build a Docker image.

D) It is a storage volume that persists data generated by a container.

E) It is a log file that records all commands executed within a container.

**Q11:** Which Docker networking mode would you use if you wanted a container to have its own IP address on the physical network, making it appear like a separate physical machine? 1

A) host

B) bridge

C) overlay

D) macvlan

E) none

**Q12:** According to the lectures, what is the smallest deployable unit in a Kubernetes cluster? 1

A) A Container

B) A Service

C) A Deployment

D) A Pod

E) A Node

**Q13:** In Kubernetes, what is the primary function of a `Service` object? 1

A) To define a set of identical pods and manage their lifecycle.

B) To provide persistent storage for a pod.

C) To expose a set of pods as a network service with a stable IP address and DNS name.

D) To manage external access to services within the cluster, typically for HTTP traffic.

E) To schedule a pod onto a specific node.

**Q14:** Which `kubectl` command is used to apply a configuration defined in a YAML file to a Kubernetes cluster? 1

A) kubectl create -f <file.yaml>

B) kubectl run -f <file.yaml>

C) kubectl apply -f <file.yaml>

D) kubectl exec -f <file.yaml>

E) kubectl config -f <file.yaml>

**Q15:** In the context of Function-as-a-Service (FaaS), what does "stateless" mean for a function? 1

A) The function cannot be called more than once.

B) The function does not retain any information about previous invocations internally.

C) The function runs without an underlying operating system.

D) The function always returns the same value, regardless of its input.

E) The function cannot have any side-effects.

**Q16:** In the Fission FaaS framework, what is the role of an "Environment"? 1

A) It is the YAML file that defines the function's triggers.

B) It is the source code for the function.

C) It is the language-specific Docker image that provides the runtime for a function.

D) It is a message queue used for asynchronous function invocation.

E) It is the set of environment variables passed to the function.

**Q17:** What is the primary benefit of using "Fission Specs"? 1

A) To test a function's performance under heavy load.

B) To enable declarative application management and Infrastructure as Code (IaC).

C) To provide a graphical user interface for managing functions.

D) To automatically generate function source code from a template.

E) To bypass the Kubernetes API for faster deployment.

**Q18:** Which of the "Four Vs" of Big Data refers to the level of trust in the data's accuracy and provenance? 1

A) Volume

B) Velocity

C) Variety

D) Veracity

E) Viscosity

**Q19:** In a distributed database like ElasticSearch, what is a "shard"? 1

A) A full backup copy of an entire index.

B) A log of all transactions performed on an index.

C) A horizontal partition of an index, containing a subset of the documents.

D) A node in the cluster that is eligible to become a master.

E) A type of query used for full-text search.

**Q20:** What is a key limitation of the ElasticSearch SQL dialect mentioned in the lectures? 1

A) It only supports SELECT * queries.

B) It does not support joins between documents.

C) It can only query one index at a time.

D) It is slower than the Query DSL for all use cases.

E) It does not support WHERE clauses.

**Q21:** According to the Popek and Goldberg theorem, a virtual machine monitor (VMM) can be constructed if the set of sensitive instructions is a subset of which set of instructions? 1

A) User-mode instructions

B) Innocuous instructions

C) I/O instructions

D) Privileged instructions

E) Arithmetic instructions

**Q22:** What is the fundamental difference between full virtualization and para-virtualization? 1

A) Full virtualization requires hardware support, while para-virtualization does not.

B) Para-virtualization requires the guest OS to be modified to use a special hypervisor API, while full virtualization runs an unmodified guest OS.

C) Full virtualization can only run Linux guests, while para-virtualization can run Windows guests.

D) Para-virtualization is more secure but has lower performance than full virtualization.

E) Full virtualization runs the VMM in Ring 3, while para-virtualization runs it in Ring 0.

**Q23:** During the live migration of a virtual machine, what happens in the "Iterative Pre-copy" stage? 1

A) The VM on the source host is stopped completely.

B) A new, empty VM container is reserved on the target host.

C) Dirty memory pages are copied from the source to the target host in successive rounds while the VM is still running.

D) The final VM state is committed to the target host and released from the source host.

E) Network traffic is redirected to the target host using ARP.

**Q24:** What is the primary function of a Certification Authority (CA) within a Public Key Infrastructure (PKI)? 1

A) To generate private keys for users.

B) To encrypt all network traffic between a client and a server.

C) To issue and manage digital certificates that bind a public key to an identity.

D) To store all user passwords in a secure database.

E) To define the firewall rules for an organization.

**Q25:** What is the key difference between authentication and authorization? 1

A) Authentication determines who a user is, while authorization determines what that user is allowed to do.

B) Authorization determines who a user is, while authentication determines what that user is allowed to do.

C) Authentication is only used in private clouds, while authorization is used in public clouds.

D) Authentication uses symmetric keys, while authorization uses asymmetric keys.

E) They are two terms for the same process.

**Q26:** The lecture on cloud security mentions several challenges. Which challenge is directly related to the "pay as you go" model? 1

A) Vendor lock-in.

B) Data deletion and sanitization.

C) Unexpectedly high charges if usage is not carefully managed.

D) Software licensing models.

E) Ensuring physical security of the data center.

**Q7:** What is the primary purpose of Shibboleth, as described in the security lecture? 1

A) To provide a centralized firewall service for cloud applications.

B) To scan Docker containers for known vulnerabilities.

C) To enable decentralized, federated authentication, allowing users to log in using their home institution credentials.

D) To encrypt data stored in object storage services like AWS S3.

E) To manage and orchestrate security policies in a workflow.

**Q28:** The historical evolution from Grid Computing to Cloud Computing represents a shift in focus from: 1

A) Individual PC performance to mainframe performance.

B) Resource sharing between organizations to on-demand service provisioning.

C) Proprietary software to open-source software.

D) Data storage to data processing.

E) Asynchronous communication to synchronous communication.

**Q29:** In an HPC environment like Spartan, which parallel programming model is typically used for distributed-memory applications that run across multiple nodes? 1

A) OpenMP

B) Pthreads

C) C++ Threads

D) MPI (Message Passing Interface)

E) Docker Swarm

**Q30:** Which of the following is a key characteristic of a "monolithic" application architecture, as contrasted with a serverless/microservices architecture? 1

A) It is composed of many small, independently deployable services.

B) A failure in one part of the application is unlikely to affect other parts.

C) All parts of the application are tightly-coupled and deployed as a single unit.

D) It scales horizontally with ease.

E) It is inherently more secure.

**Q31:** In the AWS vs. OpenStack comparison, which AWS service is the conceptual equivalent of OpenStack Nova? 1

A) S3

B) EC2

C) RDS

D) Lambda

E) VPC

**Q32:** Which of the following are valid data models for distributed environments as discussed in the lectures? (Select all that apply) 1

A) Key-value store

B) Relational model

C) Document-oriented

D) BigTable

E) Hierarchical model

**Q33:** A Kubernetes `Deployment` manifest specifies `replicas: 3`. If one of the three running pods crashes, what will the Kubernetes control plane do? 1

A) It will terminate the other two pods.

B) It will automatically create a new pod to replace the crashed one, restoring the total to 3.

C) It will send an alert to the administrator but take no action.

D) It will reduce the replica count to 2 permanently.

E) It will wait for the crashed pod to restart itself.

**Q34:** What is a "cold start" in a FaaS environment? 1

A) The process of rebooting the entire FaaS platform.

B) The latency incurred when a function is invoked for the first time and the FaaS platform needs to initialize its runtime environment and load the code.

C) A security feature that prevents functions from running in an un-trusted environment.

D) An error state where a function fails to start.

E) Running a function without any input parameters.

**Q35:** If an ElasticSearch cluster has unassigned replica shards because there are not enough nodes to host them without duplication, what status will the cluster report? 1

A) Green

B) Blue

C) Yellow

D) Red

E) Grey

**Q36:** Which of the following OpenStack components provides a web-based dashboard for users to interact with cloud services? 1

A) Keystone

B) Horizon

C) Cinder

D) Heat

E) Neutron

**Q37:** A developer needs to run a long-running, stateful data processing job. Which of the following would be the most appropriate technology choice based on the lecture material? 1

A) A Fission function triggered by an HTTP request.

B) A containerized application managed by a Kubernetes Deployment.

C) A simple script running on the HPC login node.

D) A SaaS application like Gmail.

E) None of the above.

**Q38:** Which of the following statements accurately reflects the trade-offs between IaaS and PaaS? 1

A) PaaS offers more control over the underlying network and servers than IaaS.

B) IaaS is simpler for developers as they do not need to manage the operating system or runtime.

C) PaaS abstracts away the underlying infrastructure, allowing developers to focus solely on their application code and data, but offers less flexibility than IaaS.

D) IaaS and PaaS are identical in terms of the separation of responsibilities.

E) PaaS is generally more expensive for all use cases than IaaS.

**Q39:** Which of the following is an example of a "side-effect" in a FaaS function? 1

A) A function that takes two numbers and returns their sum.

B) A function that takes a string and returns its length.

C) A function that takes an image and returns a black-and-white version of it in memory.

D) A function that receives a user ID and writes a record to an external database.

E) A function that performs a computationally intensive task that takes a long time to complete.

**Q40:** The lecture on cloud costs highlighted that one type of network traffic is typically far more expensive than its counterpart. Which is it? 1

A) Ingress (data transfer into the cloud) is more expensive than egress.

B) Egress (data transfer out of the cloud) is more expensive than ingress.

C) East-West traffic (between services in the same region) is more expensive than North-South traffic.

D) Traffic within a single availability zone is the most expensive.

E) Ingress and egress traffic are always priced identically.

---

## Answer Key

### Part I: Short Essay Questions

**Question 1: Rubric (10 points)**

- **(2 points) Architectural Differences:**
    
    - Correctly identifies HPC/Spartan as often using bare-metal or near-bare-metal nodes to minimize overhead and maximize performance for tightly-coupled computations.1
        
    - Correctly identifies IaaS/MRC as being fundamentally based on virtualization (using a hypervisor like KVM) to create isolated, multi-tenant environments (VMs/instances).1
        
    - Mentions that HPC systems often feature high-speed, low-latency interconnects (e.g., InfiniBand) which are critical for parallel applications (like MPI), whereas IaaS networking is typically standard Ethernet optimized for general-purpose traffic.1
        
- **(3 points) Resource Management and Job Submission:**
    
    - Accurately describes the HPC/Spartan model using a batch queuing system (Slurm) where users submit job scripts (`#SBATCH`) requesting specific resources (`--nodes`, `--cpus-per-task`) for a fixed duration.1 The focus is on scheduling and resource allocation for background jobs.
        
    - Accurately describes the IaaS/MRC model as on-demand and self-service, where users provision resources (VMs) interactively via a dashboard (Horizon) or programmatically via APIs.1 The focus is on the lifecycle management of persistent or ephemeral instances.
        
    - Contrasts the two: Slurm is a _job scheduler_ for a shared pool of static resources, while OpenStack is a _cloud orchestrator_ for dynamic, virtualized resources.
        
- **(3 points) Use Cases and Economic Models:**
    
    - Identifies typical HPC use cases from the lectures: large-scale scientific simulations (climate models, molecular dynamics), data processing for physics, and problems requiring massive parallel computation (e.g., breaking the Zodiac cipher).1 The model is "capability computing."
        
    - Identifies typical IaaS use cases: hosting web applications, scalable data pipelines, development/testing environments, and workloads with variable or unpredictable demand that benefit from elasticity.1 The model is "capacity computing."
        
    - Contrasts the economic models: HPC is typically project-based, with resources allocated for free (or via grant) to approved research projects (like the COMP90024 project on Spartan).1 Commercial IaaS is a pay-as-you-go, utility model, while research clouds like MRC/NECTAR are often centrally funded and free at the point of use for researchers.1
        
- **(2 points) Synthesis and Conclusion:**
    
    - Provides a clear synthesis concluding that the choice between the two is not about which is "better" but which is appropriate for the problem domain.
        
    - A strong answer will connect the concepts, explaining that the architectural choices (bare-metal vs. VM) directly enable the different resource management paradigms (batch vs. on-demand), which in turn are suited to the different use cases (tightly-coupled parallel vs. loosely-coupled scalable).
        

**Question 2: Rubric (10 points)**

- **(3 points) Definition of CAP Theorem:**
    
    - **Consistency:** Correctly defines consistency as every read receiving the most recent write or an error. All clients see the same data at the same time.1
        
    - **Availability:** Correctly defines availability as every request receiving a (non-error) response, without the guarantee that it contains the most recent write.1 The system is always operational.
        
    - **Partition Tolerance:** Correctly defines partition tolerance as the system continuing to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.1
        
- **(2 points) Explanation of the Trade-off:**
    
    - Clearly explains that in the event of a network partition (P), a system must choose between Consistency (C) and Availability (A).
        
    - To be **Consistent (CP)**, the system must stop accepting writes on the partitioned side to prevent data divergence, thus sacrificing availability.
        
    - To be **Available (AP)**, the system must continue accepting writes on both sides of the partition, but this means the data will become inconsistent between the partitions.
        
- **(2 points) Analysis of CouchDB:**
    
    - Correctly identifies CouchDB as an **AP (Available and Partition-Tolerant)** system.1
        
    - Justifies this by citing its architecture: all nodes can accept writes, and it uses Multi-Version Concurrency Control (MVCC). In case of a partition, both sides can accept writes, prioritizing availability.
      通过引用其架构来证明这一点：所有节点都可以接受写入，并且它使用多版本并发控制 （MVCC）。在分区的情况下，双方都可以接受写入，优先考虑可用性。
        
    - Explains the consequence: This leads to "eventual consistency." If a conflict arises during a partition, CouchDB will store both versions and leave it to the application developer to resolve the conflict later.
    - 解释结果：这导致了 “最终的一致性”。如果在分区期间出现冲突，CouchDB 将存储两个版本，并留给应用程序开发人员稍后解决冲突。
        
- **(3 points) Analysis of ElasticSearch:**
    
    - Correctly identifies ElasticSearch as a **CP (Consistent and Partition-Tolerant)** system.1
        
    - Justifies this by citing its architecture: it has a single active master node that coordinates writes to primary shards. A quorum of master-eligible nodes is required for the cluster to function and elect a new master. This ensures consistency.
    - 通过引用其架构来证明这一点：它有一个活动主节点，用于协调对主分片的写入。集群需要符合 master 条件的节点的 quorum 才能运行并选择新的 master。这确保了一致性。
        
    - Explains the consequence: If a network partition occurs and a quorum cannot be reached, or if the primary shard for a piece of data is on the inaccessible side of a partition, the cluster will sacrifice availability. It will stop accepting writes (or even reads for that data) to ensure no inconsistent data is ever served. This manifests as the cluster entering a "yellow" or "red" state.
      如果发生网络分区并且无法达到指定quorum的数量，或者如果一段数据的主分片位于分区的不可访问端，则集群将牺牲可用性。它将停止接受写入（甚至停止读取该数据），以确保不会提供不一致的数据。这表现为集群进入 “yellow” 或 “red” 状态。
        

**Question 3: Rubric (10 points)**

- **(2 points) Problem Identification and Decoupling:**
    
    - Identifies the key problems with the monolithic approach: poor scalability, difficulty in updating (tight-coupling), and lack of resilience (a single failure brings down the whole system).1
        
    - Proposes decoupling the application's functions: data ingestion, data processing, and results storage/querying.
        
- **(3 points) Justified Use of FaaS (Fission):**
    
    - Correctly assigns the **data ingestion** task to a FaaS/Fission function.
        
    - Justifies this choice by explaining that ingestion is an event-driven, short-lived, and stateless task. FaaS is ideal for this because it is highly scalable for bursty workloads and cost-effective (pay only for invocation time). An event trigger (e.g., new file in object storage) can invoke the function automatically.1
        
- **(3 points) Justified Use of Containers (Docker) and Orchestration (Kubernetes):**
    
    - Correctly assigns the **core data processing** task to a containerized application managed by Kubernetes.
        
    - Justifies this by explaining that the computation is long-running and potentially resource-intensive, making it a poor fit for the short execution limits of FaaS.
        
    - Packaging the processing logic in a Docker container ensures portability and dependency management.1
        
    - Using a Kubernetes `Deployment` allows for horizontal scaling by running multiple replicas of the processing container, which can consume jobs from a queue. Kubernetes provides resilience by automatically restarting failed containers.1
        
- **(2 points) Architectural Synthesis and Benefits:**
    
    - Presents a coherent, hybrid pipeline architecture: e.g., an event triggers a Fission function, which places a processing job onto a message queue. A pool of worker containers managed by a Kubernetes Deployment consumes from the queue, performs the computation, and stores the result in a database.
        
    - Clearly summarizes the benefits of the new architecture:
        
        - **Scalability:** Each component (ingestion, processing) can be scaled independently.
            
        - **Maintainability:** Services are decoupled, so one can be updated without affecting the others.
            
        - **Resilience:** The use of queues and Kubernetes' self-healing capabilities means that the failure of a single processing container does not halt the entire system.
            

### Part II: Multiple-Choice Questions

| Q#      | Correct Answer(s)                 | Rationale                                                                                                                                                                                                                 | Source Snippet(s) | Key Concept Tested              |
| ------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------- |
| **Q1**  | B) 10x                            | Amdahl's Law states max speedup is 1/(1−α), where α is the parallelizable fraction. If α=0.9, speedup is 1/(1−0.9)=1/0.1=10.                                                                                              | 1                 | Amdahl's Law                    |
| **Q2**  | A, B, C, D                        | The lecture explicitly lists SISD, SIMD, MISD, and MIMD as the four categories of Flynn's Taxonomy.                                                                                                                       | 1                 | Flynn's Taxonomy                |
| **Q3**  | C) `sbatch`                       | The lecture on Spartan and Slurm explicitly states that `sbatch [jobscript]` is the core command for job submission.                                                                                                      | 1                 | Slurm Job Submission            |
| **Q4**  | B                                 | Environment modules dynamically modify `$PATH` and other variables to make specific versions of software and their dependencies available in the user's shell session.                                                    | 1                 | HPC Environment Modules         |
| **Q5**  | A, C, D                           | The NIST definition shown in the lecture lists On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service as the five essential characteristics.                              | 1                 | Cloud Computing Definition      |
| **Q6**  | C) IaaS                           | The "Separation of Responsibilities" diagram shows that in IaaS, the user manages the stack from the O/S upwards, providing the most control over these layers compared to PaaS or SaaS.                                  | 1                 | Cloud Service Models            |
| **Q7**  | E) Keystone                       | The OpenStack Components table clearly identifies Keystone as the Identity Service.                                                                                                                                       | 1                 | OpenStack Components            |
| **Q8**  | B) Cinder                         | The lecture identifies Cinder as the Block Storage service, providing persistent volumes for instances, distinct from Swift (Object Storage).                                                                             | 1                 | OpenStack Components            |
| **Q9**  | C                                 | The key advantage highlighted is that containers share the host OS kernel, avoiding the need to boot a full guest OS for each instance, thus saving significant resources (memory, disk) and time.                        | 1                 | Containers vs. VMs              |
| **Q10** | C                                 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. `docker build` uses this file.                                                                 | 1                 | Docker Concepts                 |
| **Q11** | D) macvlan                        | The lecture describes the `macvlan` network driver as the one that allows a container to appear as a physical device on the network, with its own MAC and IP address.                                                     | 1                 | Docker Networking               |
| **Q12** | D) A Pod                          | The lectures on Kubernetes consistently define the Pod as the smallest and most basic deployable object in the Kubernetes object model.                                                                                   | 1                 | Kubernetes Concepts             |
| **Q13** | C                                 | A Kubernetes Service provides a stable abstraction over a set of pods. It gets a stable IP and DNS name, and load balances traffic to the pods in its selector, even as pods are created or destroyed.                    | 1                 | Kubernetes Services             |
| **Q14** | C) `kubectl apply -f <file.yaml>` | `kubectl apply` is the command for declarative management, applying the state defined in a configuration file to the cluster.                                                                                             | 1                 | `kubectl` Commands              |
| **Q15** | B                                 | A stateless function processes requests based only on the information provided in the request itself, without relying on or storing any data from previous interactions.                                                  | 1                 | FaaS Concepts                   |
| **Q16** | C                                 | In Fission, an Environment is the Docker image containing the language runtime (e.g., Python, Node.js) and an HTTP server, which executes the function code.                                                              | 1                 | Fission Concepts                |
| **Q17** | B                                 | Specs (YAML files) allow the entire FaaS application (functions, triggers, etc.) to be defined as code, enabling version control, repeatability, and declarative management.                                              | 1                 | Fission Specs                   |
| **Q18** | D) Veracity                       | The lecture defines Veracity as the level of trust in data accuracy and provenance.                                                                                                                                       | 1                 | Big Data Concepts               |
| **Q19** | C                                 | Sharding is the process of horizontally partitioning an index's data into smaller, more manageable pieces called shards.                                                                                                  | 1                 | Distributed Databases           |
| **Q20** | B                                 | The lecture explicitly states that ElasticSearch SQL is a limited subset and does not support features like joins, which are common in relational DBMSs.                                                                  | 1                 | ElasticSearch SQL               |
| **Q21** | D) Privileged instructions        | The theorem states that for a machine to be virtualizable, all sensitive instructions (those that behave differently in user vs. kernel mode) must also be privileged (cause a trap in user mode).                        | 1                 | Virtualization Theory           |
| **Q22** | B                                 | Para-virtualization's defining feature is the modified guest OS that makes hypercalls to the VMM, improving performance. Full virtualization emulates hardware to run an unmodified OS.                                   | 1                 | Virtualization Types            |
| **Q23** | C                                 | The iterative pre-copy phase is the core of live migration, where memory is copied in rounds from the running source VM to the target, minimizing the final downtime.                                                     | 1                 | Live Migration                  |
| **Q24** | C                                 | The primary role of a CA is to act as a trusted third party that issues certificates, vouching for the identity of the certificate holder.                                                                                | 1                 | Public Key Infrastructure       |
| **Q25** | A                                 | Authentication verifies identity ("Who are you?"). Authorization determines permissions ("What are you allowed to do?").                                                                                                  | 1                 | Security Concepts               |
| **Q26** | C                                 | The "pay as you go" model can lead to unexpectedly high charges if administrators do not monitor and control resource consumption, a challenge highlighted in the lectures.                                               | 1                 | Cloud Economics                 |
| **Q27** | C                                 | Shibboleth is presented as a key technology for federated identity, allowing users to use their single institutional login to access services across different organizations.                                             | 1                 | Federated Authentication        |
| **Q28** | B                                 | Grid computing focused on federating and sharing existing, distributed computational resources between organizations. Cloud computing shifted this to providing abstract, on-demand services to consumers.                | 1                 | History of Distributed Systems  |
| **Q29** | D) MPI                            | MPI is the standard for message passing between processes on different nodes in a distributed-memory system, making it the choice for multi-node HPC applications. OpenMP is for shared-memory on a single node.          | 1                 | Parallel Programming Models     |
| **Q30** | C                                 | A monolithic application is characterized by its tightly-coupled components, which are all developed, deployed, and scaled together as a single unit.                                                                     | 1                 | Application Architectures       |
| **Q31** | B) EC2                            | The comparison tables show that OpenStack Nova (Compute Service) is the direct equivalent of Amazon's EC2 (Elastic Compute Cloud).                                                                                        | 1                 | AWS vs. OpenStack               |
| **Q32** | A, C, D                           | The lecture lists key-value stores, document-oriented databases, and BigTable-style databases as common models for distributed environments. The relational model is presented as the traditional alternative.            | 1                 | Distributed Data Models         |
| **Q33** | B                                 | This demonstrates the self-healing nature of Kubernetes. The Deployment's controller manager will detect that the current replica count (2) is less than the desired state (3) and will schedule a new pod to be created. | 1                 | Kubernetes Deployments          |
| **Q34** | B                                 | A cold start is the initial latency experienced when a FaaS platform has to provision a runtime environment for a function that has not been recently invoked.                                                            | 1                 | FaaS Concepts                   |
| **Q35** | C) Yellow                         | The lecture on ElasticSearch states that a Yellow status indicates all primary shards are active, but some replica shards are not allocated, meaning the cluster is functional but lacks full redundancy.                 | 1                 | ElasticSearch Cluster Health    |
| **Q36** | B) Horizon                        | The OpenStack architecture diagrams and descriptions clearly identify Horizon as the code-name for the dashboard service.                                                                                                 | 1                 | OpenStack Components            |
| **Q37** | B                                 | Long-running, stateful jobs are a primary use case for container orchestration like Kubernetes. FaaS is ill-suited due to execution time limits and stateless nature.                                                     | 1                 | Application Architecture        |
| **Q38** | C                                 | PaaS provides a higher level of abstraction than IaaS, simplifying deployment for developers by managing the OS/runtime. This comes at the cost of the control and flexibility that IaaS provides.                        | 1                 | Cloud Service Models            |
| **Q39** | D                                 | A side-effect is any modification of state outside the function's local scope. Writing to an external database is a classic example. The other options are pure computations.                                             | 1                 | Functional Programming Concepts |
| **Q40** | B                                 | The lecture on cloud costs explicitly states that egress fees (transferring data out of the cloud) are typically far more costly than ingress fees.                                                                       | 1                 | Cloud Economics                 |
