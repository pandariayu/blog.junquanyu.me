# Spartan & HPC
## Spartan

> [!quote]
> Spartan is HPC System which can provide above average performance for research computing

### Goal 

用户提交slurm脚本到 **login node**， **Management Node**通过读取配置和当前资源情况进行作业分配 由**Compute nodes**执行脚本内容

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

```sh
#!/bin/bash
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --partition=sapphire
#SBATCH --time 0-12:00:00


module load GCC/11.3.0 
module load mpi4py/3.1.4-Python-3.11.3
time mpiexec -n 1 python3 case2.py 

my-job-stats -a -n -s
```
## Exam questions

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
