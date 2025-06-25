# Cx.01 Introduction to Complex Systems

## 1. 判定标准

- **Many parts** 多组件
- **non-linear interaction** 非线性交互
- **decentralised control** ⇒ **emergent behaviour** 去中心化控制可以导致的涌现行为

## 2. 五大属性

### emergence

系统具有单个部分所不具备的属性。
这些属性不容易被推断或预测。
同样的部分可以产生不同的属性，这取决于环境或安排。
### self-organisation

在没有外部干预的情况下，秩序增加
通常是部分之间相互作用的结果
Decentralisation（分散管理）
### decentralisation

没有一个单一的控制器或 "领导"。
分布：每个部分都携带全局信息的一个子集
有界限的知识：没有一个部分对整体有完整的看法
并行性：各部分可以同时行动
### positive-negative feedback

正反馈放大了系统状态的波动
负反馈抑制了系统状态的波动

## 3. 为复杂系统建模的步骤

1. 首先弄清楚要解决的问题。
2. 设计整个系统的结构（对单个 agent 的设计以及他们之间的交互方式）。
3. 每个agent可能的状态有哪些。
4. 每个agent可能与周围的agent发生哪些交互行为。
5. 确保设计的模型是简洁的，正确的（能按照设计运行），鲁棒的（稳定的）。
6. 当前的模型正确运行后能不能回答我们提出的问题。

# Cx.02 Dynamical Systems & Chaos

What is a Dynamical System

- 明确三要素：
    - **State space**：系统可能状态集合；
    - **Time** ttt：可离散或连续；
    - **Update rule**：确定当前状态 xtx_txt​ 与过去状态关系的 **deterministic** 函数；
- 还需一个 **initial condition** 强调“历史决定现在”这一 determinism。

**Logistic map** $x_{t+1}=rx_t(1-x_t)$：r 控系统行为从稳定 0 → 单点 → 2^n-cycle → chaos (r ≳ 3.57)

## Chaos 四条件

deterministic／aperiodic／bounded／sensitive-dependence

# Cx.04 Dynamical Systems & Chaos
## Stochastic model 

更多的计算->适用于小群体
提供关于结果分布的信息
随着我们人口数量的增加，偶然性的影响也会减少。
如果我们的人口足够大，也许我们可以完全忽略随机性？随机性何时重要？

- Generates distribution of models 生成模型分布
- incorporate the effects of chance 结合偶然性的影响
- Results are different each time we run. -> random seed is different each time.
  每次运行的结果都不同->随机种子每次都不同。
- Estimate the most average future, but averaging the random results
  估计最平均的未来，但对随机结果进行平均

## Deterministic model 

运行效率更高 - 可以探索更多参数
分析可以提供更普遍的简介
只有在某些条件下才适用（更大的人群，更多的感染病人）

- Generates unique outcomes 产生独特的结果
- Based on the parameter and initial conditions 基于参数和初始条件
- Infection rate R0 感染率 R0
- Chance of influence in each generation 每一代的影响力几率
    - R0>1 -> outbreak 爆发
    - R0<1 -> die out 消亡

# Cx.05 Cellular Automata I — 1D & 2D

1. **极限与需求**
    
    - 之前的 **ODE models**（如 **Lotka-Volterra**、**SIR**）用 **macro variables** 描述系统，但必须假设个体 _homogeneous_ 且 _well-mixed_。这与实际中 **heterogeneity** 与 **spatial structure** 不符。
    - **Cellular Automata (CA)** 提供 **bottom-up** 框架：局部规则 + 大量单元 ⇒ **emergent behaviour**。
    
2. **CA 四要素**
    
    1. **Discrete time**
    2. **Discrete space**（通常 1D / 2D grid）
    3. **Finite cell states Σ**
    4. **Local update rule Δ**（由 **neighbourhood** 决定）

> 01011010₂ = **Rule 90**  
> Rule 30、Rule 110 等皆由此得名。

| Rule         | 行为                                                   | 备注                             |
| ------------ | ---------------------------------------------------- | ------------------------------ |
| **Rule 30**  | Aperiodic / chaotic                                  | 图案类似 **textile cone snail** 斑纹 |
| **Rule 110** | Complex, supports **gliders**，已证 **Turing-complete** | 可实现通用计算                        |

#### **Wolfram classes**

1. Class I – static
2. Class II – periodic
3. Class III – chaotic
4. Class IV – complex, edge of chaos（Rule 110 属此类）

# Cx.06 Cellular Automata II — Implementing a Model

**关键词**：design-decisions, stochastic CA, asynchronous update, parameter-sweep

| 维度                 | 需回答的核心问题                        | 常见选项 & 影响                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Space**          | 网格如何表示？Agent 如何定位？              | discrete vs continuous；single vs multiple occupancy；proximate vs long-range interaction                                                                                                                                                          |
| **Time**           | 时间怎样推进？事件顺序如何影响行为？              | synchronous 更新 vs asynchronous（若异步：随机顺序、固定扫描或基于事件队列）；discrete time 步 vs continuous time                                                                                                                                                          |
| **Information**    | Agent 拥有什么信息？如何获取？              | variable scope（global / patch / agent）；neighbourhood 尺度                                                                                                                                                                                          |
| **State updating** | 规则 deterministic 还是 stochastic？ | randomness 可带来 more realistic variability，但也增加实验次数需求2. **CA 四要素**<br>    <br>    1. **Discrete time**<br>    2. **Discrete space**（通常 1D / 2D grid）<br>    3. **Finite cell states Σ**<br>    4. **Local update rule Δ**（由 **neighbourhood** 决定） |

1. **四大设计维度**：**Space / Time / Information / State-updating**，每一维的选择决定模型行为
2. **Lotka-Volterra CA**：随机抽 (cell A, neighbour B)；含概率 α, β, δ, γ 的 reproduction / predation / death / move 更新规则。
3. **SIR CA (Version 1 & 2)**：加入 temporary immunity，演示 state-timer 思维
4. **Parameter sweep**：多次仿真取均值±StdDev；输出热图识别 **phase transition**。
5. **易考点*
    - 列举同步 vs 异步更新对结果的影响。
    - 设计一个包含移动移动 (mobility) 的 SIR CA 规则框架。

MA

1. bcef
2. be *adf*
3. abcde 
4. abdef *c*
5. abcf *e*
6. bcf *d* 
   d: Agents have dynamic state that changes over time
7. *abc*
   a) Susceptible individuals become infected with probability β when in contact with infectious neighbors  
   b) Infectious individuals recover with probability γ  
   c) Recovered individuals can become susceptible again
8. ac**d** *b* 
   d.Exponential growth
   It should be only exist in logistic map

Part B

1. c
2. b
3. c
4. b
5. c
6. b
7. b
8. b
9. a
10. b
11. b
12. c

Part A

1. a**bd** c
2. **a** *b*
3. ? 
4. a
5. a
6. **c** *b*
7. b,*d*
8. **b** *a*
9. **a** *b*
10. a
11. ?
12. b

Part B



assert EVENTUALLY_ALLOCATED = forall[u:T] <>t[u].use[n]
