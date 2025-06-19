# Spartan & HPC

## Spartan

> [!quote]
> Spartan is HPC System which can provide above average performance for research computing


### Goal 

用户提交slurm脚本到**login node**， **Management Node**通过读取配置和当前资源情况进行作业分配 由**Compute nodes**执行脚本内容

### Module 用于配置程序用于运行的环境

1. `module load <module_name>` 如果需要使用 Python 3.9，但系统默认的是 Python 2.7，就可以通过运行 `module load python/3.`
2. `module purge` 清除（卸载）所有当前已加载的模块
3. `module spider <module_name>` 搜索可用的模块

### Spartan Command

1. `sbatch script.slurm`  提交一个作业脚本到 Slurm 调度系统
2. `scancel <job_id>`  取消一个正在排队或正在运行的作业
3. `squeue -j <job_id>`  查询特定作业的状态
4. `squeue --me`  查询我（当前用户）的所有作业的状态
5. `my-job-stats -j <job_id> -a`  查询特定作业的统计信息（通常是作业完成后）
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

> [!question|closed] Define Gustafson-Barsis’ law for scaled speed-up of parallel programs.
> 直接给出每个变量的定义 并写出公式+一句话解释

> [!question|closed] A parallel program takes 128 seconds to run on 32 processors. The total time spent in the sequential part of the program is 12 seconds. What is the scaled speedup?
> alpha = $(128-12) /128 116/128$ <br/>
> Scaled speed up = $(1-alpha)+alpha \cdot N$ <br/>
> $= (1-116/128)+116/128\cdot32$ <br/>
> $= -0.9+29$ <br/>
> Scaled speed up = -29.9

> [!question|closed] Discuss the major trends in research and research computing over the last 20 years that have led to the emergence of Cloud computing
> 根据前面讲的Distributed System到Grid Computing到Cloud Computing的演变讲 每个阶段的目标是什么 新的技术解决了什么困难或问题 带来了什么新的挑战

![](./images/Pasted%20image%2020250619215410.png)

> [!question|closed] Explain the role of a job scheduler on a high-performance computing system like the University of Melbourne SPARTAN compute cluster. What commands can be used to influence the behavior of the job scheduler in supporting parallel jobs running on multiple nodes (servers)?
> A job scheduler gets jobs from the users, and it chooses when and ==where to run the jobs according to the parameters set== by the users, such as the wall clock time, the resource it needs, and the number of processes and threads in slurm scripts. The scheduler is also ==responsible for monitoring jobs’ progress==, and informing the user upon completion. One can use the command below to achieve parallel jobs Single job: `#SBATCH --nodes=1` Multiple nodes: `#SBATCH--nodes=4`

> [!question|closed] A researcher has written Python code (myCode.py) using MPI libraries to process a large data file (bigdata.csv). They wish to run the code on SPARTAN and use four nodes with two processes per node through the following script (myScript.sh). Identify the various problems with this script.
> ```
> SBATCH -p cloud
> SBATCH --nodes=4
> SBATCH --ntasks-per-node=2
> myCode.py bigdata.csv
> ```

> [!question|closed] Assume that the script above has been fixed. How should it be executed on SPARTAN and why should care be taken in this step?
>```
>$ sbatch script.slurm Check the status of the job regularly $ squeue –me Monitor the job to ensure it is executed right $ my-job-stats –j 18563731 -a
>```
>结合A1中的实践过程来说 比如先使用小型dataset 不要在logon node直接mpiexec 确认数据软连接等等

> [!question|closed] The message passing interface(MPI) is often on HPC systems such as The University of Melbourne SPARTAN cluster. All MPI programs must use two specific language constructs. What are they and what do they do?
> All MPI programs must use two specific language constructs: MPI_Init: Initializes the MPI environment, sets up communication channels, and allocates necessary resources for the MPI program. MPI_Finalize: Finalizes the MPI environment, cleans up all resources used by the MPI program, and terminates the MPI execution environment.
