# Complex System & Dynamic System

## System

### Definition

- set of distinguishable things that interact & work together to achieve a common goal
- in result have features that none of its component has
- ex. body & life

- 一组可区分的事物，它们相互作用并协同工作以实现共同目标
- in result 具有其组件所不具备的特征
- 例如。 身体与生活

### What makes a system complex

#### Definition

- Components 多；
- **interaction** 非线性；
- 可 **self-organization**；
- 整体不可归为完全 regular 亦非完全 random；
- 允许 **emergent behaviour**。

#### Few parts

***simple rules, simple behaviour***
- **Two-body problem**：仅两颗天体 & Newtonian gravity，轨道可用 **analytic solution** 求得 ⇒ 行为 regular。

***simple rules, complex behaviour***
- **Three-body problem**：多一个天体即变为 **chaotic**，无封闭式解析解。
    - 图 6 示范行星在双星系统中的混沌轨迹。
    - 用以说明：**small change in number of components → qualitative change in behaviour**。
- **Low-dimensional chaos**
#### Many parts

***simple rules, simple behaviour***

- **Crystals**：大量分子+简单相互作用 ⇒ emergence 为 highly ordered lattice。
- **Gases**：大量分子+同样简单作用 ⇒ emergence 为 statistically homogeneous randomness。
- 说明“many parts ≠ 必然复杂”，还取决于规则 & 结果形态。

***Simple rules, complex behaviour***

以 **flocking behaviour**（鸟群）展示典型 **complex systems**：

1. **component**：bird（本身简单）；
2. **interaction rule**：Separation / Alignment / Cohesion；
3. **emergence**：宏观 flock 形态，局部规则难以预知整体。

***complicated rules, complex behaviour***

- **biological development / termite mound / brain / immune system / human society**。
- 特征：**异构规则，专业化，等级制度**;宏观行为仍可再现且稳健。

***complicated rules, deterministic behaviour***
- **Classical engineering systems**（飞机、芯片）同样 parts 多、规则复杂，但由 **global design** 保证可预测 ⇒ 不算 complex system（缺乏 “surprise”）。

***Many parts, complicated rules, centralised behaviour***
- **Orchestra / military**：多部件但由 conductor / commander 统一控制。因 **centralised control**，不在 complex-systems 研究范畴。

### Properties of complex systems

#### Emergence

> [!note] 
> 整体属性 > parts 属性之和；不可轻易自底向上推断 

- The system has properties that the individual parts do not 
  系统具有各个部分所不具备的属性
- These properties cannot be easily inferred or predicted  
  这些特性不容易推断或预测
- Different properties can emerge from the same parts, depending upon context or arrangement
  相同的部分可以产生不同的属性，具体取决于上下文或排列

#### Self-organization

> [!note] 
> order 无外部强制而生于 internal interaction
>  - Order increases without external intervention  
>  - Typically as a result of interactions between parts
> 


#### Decentralised

> [!note] 
> 无 single controller；information distributed；**parallelism** 天然。 

There is not a single controller or ‘leader’  
- distribution: each part carries a subset of global information
  每个部分都携带一个全局信息的子集 
- bounded knowledge: no part has a full view of the whole  
  有限知识：没有部分具有整体的完整视图
- parallelism: parts can act simultaneously 
  各部分可以同时作用

#### Feedback

- **Positive feedback** 放大扰动 → 可能导致 instability or phase transition；
- **Negative feedback** 抑制扰动 → 提升 stability

## Modelling complex systems?

- **Model** 定义：为预测与分析而对真实系统进行 **simplified representation**。
- 原因：真实实验可能 **expensive / time-consuming / unethical / impossible**；通过 model 可 “build to understand”。

### Types of model

#### Mathematical model

- 用 **macro-equations** 描述，如 **Lotka–Volterra** predator-prey。
    - 若可求 **analytic solution**（如 exponential GDP growth），直接解析。
    - 若无解析解 → **numerical analysis**（离散化空间/时间）。
    - 用宏观方程式描述全局状态和行为
    - 通过算法（逐步）求解以发现未来的轨迹

#### Computational Model

- 当系统 **heterogeneity / adaptive topology** 强，宏观方程难立 ⇒ 需 **computational model**
    - 系统中的畸形 - 位于空间中的不规则性
    - 在复杂网络中连接 - 差异化/专业化为各种类型的
    - 动态自适应系统
    - 响应环境的交互拓扑变化

***agent-based model (ABM)***

- 将 component 映射为 **agent** 持有 local state & rule；
- 全局行为由 **micro-interaction** + **update rule** 产生。

### Steps in modelling a complex system

- 明确 **research question**；
- 描述 **structure**（components & interactions）；
- 指定每个 component 的 **state space**；
- 规定 **dynamics / update rule**；
- **verification / validation / evaluation**（简单性、正确性、鲁棒性）；
- 设计实验，运行模拟回答问题。

## Dynamic System

### What is a Dynamical System

- 明确三要素：
    - **State space**：系统可能状态集合；
    - **Time** ttt：可离散或连续；
    - **Update rule**：确定当前状态 xtx_txt​ 与过去状态关系的 **deterministic** 函数；
- 还需一个 **initial condition** x0x_0x0​。强调“历史决定现在”这一 determinism。

***Functions and Iteration***

- 用简单函数 $f(x)=3x$ 说明 **function** 的输入输出。
- 介绍 **iteration**：将前次输出作为下次输入形成序列 ${x0,x1,x2,… }\{x_0,x_1,x_2,\dots\}{x0​,x1​,x2​,…}$。该序列即系统随时间的 **trajectory / orbit**。

### Population Growth

To keep things simple, let’s make the following assumptions:  
给出 4 条假设（仅雌狐、一次繁殖等）

- the initial population contained 2 female red foxes
- a female red fox reproduces in its first year of life
- a female red fox only reproduces once in it’s life
- half of newborn kits are female
Therefore, the number of female red foxes will double each year:  
$$x_{t+1} = 2x_t$$
where $xt$ is the number of female red foxes alive in year $t$

### Exponential Curve 

![[Pasted image 20250607161457.png]]
$$x_t=x_0 r^{\,t}$$
- 直接外推会得到荒谬的 $3.37\times10^{66}$ 只狐狸。
- 引导思考 **growth rate r** 取 1 或 < 1 时的含义：

    - $r=1$：**replacement fertility**，种群稳定；
    - $r<1$：衰退
- **resource limitation**（食物/空间）必须纳入模型。提出 “增长快 → resources abundant；增长慢 → scarce” 的现实假设
- 从连续 **logistic growth** 式 $$P_{t+1}=rP_t\bigl(1-\tfrac{P_t}{A}\bigr)$$ 出发，归一化得  
    $$x_{t+1}=r\,x_t(1-x_t)$$
- 这是经典 **logistic map**，state $x_t\in[0,1]$。
![[Pasted image 20250607162052.png]]
- 分解为 **positive feedback** $rx_t​$与 **negative feedback** $(1-x_t)$。前者促增，后者抑制。

### Evaluation

##### Case $r=0.9$

![[Pasted image 20250607162507.png]]

- 所有 $r\in(0,1)$ 时，0 为 **stable fixed point**；种群必灭绝
##### Case $r=1.5$

![[Pasted image 20250607162606.png]]
- 出现新的稳定 **fixed point** $x^\*≈0.5$，0 变成 **unstable fixed point**。系统无论初值趋向 0.5

##### Case $r=3.2-3.8$
![[Pasted image 20250607163027.png]]
- 继续 **period-doubling** 至 **limit-4 cycle**。
- 再翻倍为 **limit-8 cycle**。周期不断裂变预示 chaos 临近。
- 出现 **period-3 window**（Sharkovskii 定理：period-3 implies chaos）。吸引子需若干步才能显现。

##### Case $r=4.0$

- 出现 **period-3 window**（Sharkovskii 定理：period-3 implies chaos）。吸引子需若干步才能显现。

四条件：

### Chaos

#### Definition

1. **Deterministic update rule**； 确定性更新规则
2. **Aperiodicity**； 非周期性
3. **Bounded trajectory**； 有界轨迹
4. **Sensitivity to initial conditions** 对初始条件敏感

### Butterfly Effect


![[Pasted image 20250607163405.png]]

zoom out 显示 r∈[2.4,4.0] 全貌：

- **Self-similar (fractal)** 自相似（分形）结构；
- **windows of periodicity** 周期性窗口嵌在 chaos 区；
- **Feigenbaum constant** Feigenbaum 常数隐含于 period-doubling 间距。

## Lotka-Volterra Mode

- **Lotka–Volterra model** 于 1925–1926 由 **Alfred Lotka** 与 **Vito Volterra** 各自独立提出，灵感来自 **logistic equation**。

设 **predator = red fox**, **prey = rabbit**，核心假设：

1. 兔有充足食物，可自我维持；
2. 若无狐狸，兔以速率 α 呈指数增长；
3. 狐只捕食兔；
4. 若无兔，狐以速率 γ 指数衰减；
5. 环境静态，参数常数

![[Pasted image 20250607165455.png]]

- RRR = rabbit 数量，FFF = fox 数量；
- 参数意义：α (兔增长率)、β (捕食率)、δ (捕食转化率)、γ (狐狸死亡/迁徙率)。

## Solving ODEs

### Euler Method

离散化思想：

$$y_{n+1}=y_n+\Delta t\,f(t_n,y_n)$$

时间步长 Δt 越小越精确但成本增高

### Mid-point Improvement

使用区间中点斜率提高精度：

![[Pasted image 20250607172229.png]]
将 F 对 R 作图得到闭合轨迹 → 表明存在 **limit cycle**。轨迹逆时针：
- 兔多→狐增；
- 狐多→兔减；
- 兔减→狐减；
- 狐减→兔再增，循环往复

设 $\frac{dR}{dt}=\frac{dF}{dt}=0$，得两组 **equilibrium**：

1. $(R=0,\;F=0)$ — 双灭绝；
2. $(R=\gamma/\delta,\;F=\alpha/\beta)$ — 共存。  
    稳定性分析：
    第 1 点为 **saddle**（不稳定）；
    第 2 点为 **neutrally stable**，周围存在无穷多 **periodic orbits** 周期性轨道

### Structural Stability Concern

第一个平衡是所谓的“鞍点”（与山脉中的鞍座相比）。鞍点上的系统将保留在那里。扰动系统“向上”y 轴（增加狐狸的数量，同时将兔子的数量保持为零）将导致系统返回到鞍点（那些狐狸会在没有食物的情况下死亡）。沿 x 轴“向右”扰动系统（增加兔子的数量，同时将狐狸的数量保持为零）将导致系统继续向右移动（到无穷大 - 兔子将在不受控制的情况下繁殖）。同时沿两个轴扰动系统（同时添加 foxes 和 rabbits）将导致系统移动到新的极限循环（周期性）吸引子。这有多现实？周期性轨道的振幅取决于初始条件！在现实世界中，环境不断变化，因此系统在相平面中的位置将不断从一个轨道切换到另一个轨道。这是不现实的——真正的周期往往具有“特征”振幅。我们想要一个模型，其中系统行为稳定到单个稳定的极限循环。这种类型的系统据说在结构上是稳定的。

- 轨道振幅依赖 **initial condition**，模型 **structurally unstable**；
- 现实系统往往收敛到唯一 **stable limit cycle**，需改进。

### Discreteness Issue
![[Pasted image 20250607181959.png]]
相位图中出现 <1 的分数个体 → 生物体实际为 **discrete entity**，低于 1 应视为灭绝，提示 **Lotka–Volterra** 连续近似的局限。
## Model Extensions

在原方程加 **logistic term**：

$$\frac{dR}{dt}= \alpha R - \beta R F - aR^{2},\quad \frac{dF}{dt}= \delta R F - \gamma F - bF^{2}$$

引入 **carrying capacity** 使单一稳定 **limit cycle** 出现，更贴近观测。

###  Numerical Demo

![[Pasted image 20250607182331.png]]
展示加入竞争后 **time-series** 与 **phase plane** 曲线，振幅收敛。
右边的图是limited cycle，是稳定的，有吸引力的，有中心点，中心点是不动点。 还提出了其他的模型改进方案，以提高捕捉观察到的现象的能力
### Multi-species Generalisation

- 两种写法：**α-matrix formulation** 或 **interaction matrix A**；
- 三物种情形给定矩阵 A 与 parameter α，可在 α≥1.5 时产生 **chaotic behaviour**。

## Summary

- **dynamic behaviours**：stable/unstable **fixed points**、**limit cycles**；
- **basin of attraction** 决定随初值落入哪个吸引子；
- **Lotka-Volterra** 提供 predator-prey 动力学启示，但需考虑 **intraspecific competition**、离散性、环境变动等因素方能贴合现实

## SIR

- 同质化人口：每个人都是一样的；
- 同质化混合方式：每个人都有相同的接触机会。
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