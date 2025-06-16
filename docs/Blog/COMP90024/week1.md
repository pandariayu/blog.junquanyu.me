# Information Session & How we got here

## Compute Scaling

### Vertical Computational Scaling 垂直计算扩展 

- Have faster processors 拥有更快的处理器
	- Switch your  n GHz CPU for a  2n GHz one = 2x faster  把频率搞高一点
	- **Easy to do, but costs more** **做起来容易，但成本更高**
- Limits of fundamental physics/matter (nanoCMOS)

### Horizontal Computational Scaling 水平计算扩展 

-  Have more processors  
   拥有更多处理器
-  Easy to add more; cost increase not so great  
   易于添加更多;成本增加不是那么大 
- But harder to design, develop, test, debug, deploy,  manage, understand
  但更难设计、开发、测试、调试、部署、管理、理解

> [!note] 
> HTC far more important than HPC  

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