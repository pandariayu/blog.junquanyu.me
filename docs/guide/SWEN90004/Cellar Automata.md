# Cellar Automata

## 1. 背景与动机

1. **极限与需求**
    
    - 之前的 **ODE models**（如 **Lotka-Volterra**、**SIR**）用 **macro variables** 描述系统，但必须假设个体 _homogeneous_ 且 _well-mixed_。这与实际中 **heterogeneity** 与 **spatial structure** 不符。
    - **Cellular Automata (CA)** 提供 **bottom-up** 框架：局部规则 + 大量单元 ⇒ **emergent behaviour**。
        
2. **CA 四要素**
    
    1. **Discrete time**
    2. **Discrete space**（通常 1D / 2D grid）
    3. **Finite cell states Σ**
    4. **Local update rule Δ**（由 **neighbourhood** 决定）

## 2. 1-Dimensional CA

| 概念            | 最简设定                          |
| ------------- | ----------------------------- |
| Grid          | 单行格子                          |
| Cell states   | 2 states：0 (dead) / 1 (alive) |
| Neighbourhood | 自身 + 左右各一格，大小 **N = 3**       |
| Update        | 同步更新下一代                       |

### 2.1 Formal definition

- **Transition function** Δ: Σᴺ → Σ
- 可能输入组合 |Σ|ᴺ = 2³ = 8
- 可定义规则数 **Kᴷᴺ = 2²³ = 256**；几何等价后仅 88 条本质不同规则。

### 2.2 Rule 编码

8 位输出视为二进制 → 十进制命名

> 01011010₂ = **Rule 90**  
> Rule 30、Rule 110 等皆由此得名。

### 2.3 典型行为

| Rule         | 行为                                                   | 备注                             |
| ------------ | ---------------------------------------------------- | ------------------------------ |
| **Rule 30**  | Aperiodic / chaotic                                  | 图案类似 **textile cone snail** 斑纹 |
| **Rule 110** | Complex, supports **gliders**，已证 **Turing-complete** | 可实现通用计算                        |

![[Pasted image 20250607202307.png]]


![[Pasted image 20250607202321.png]]

#### Discrete-time dynamics

- 我们对系统的长期行为感兴趣：随着时间的推移会发生什么？
- 我们的状态空间（系统中所有可能状态的集合）是离散和有限的，我们的轨迹是状态的序列 
- 我们可以观察到瞬态、固定点和极限循环吸引子 
- 导致每个吸引子的状态构成了它的吸引盆

- **Transient** → **Fixed point** / **Limit cycle** attractor
- **Basin of attraction** 概念同连续系统。

#### **Wolfram classes**

1. Class I – static
2. Class II – periodic
3. Class III – chaotic
4. Class IV – complex, edge of chaos（Rule 110 属此类）
![[Pasted image 20250607202536.png]]

## 3. 2-Dimensional CA

| 元素            | 选项                                                    |
| ------------- | ----------------------------------------------------- |
| Neighbourhood | **Von Neumann** (4-cell 上下左右) / **Moore** (8-cell 四周) |
| Update        | 同步、deterministic（本课假设）                                |

### 3.1 Game of Life**

- **States**: alive / dead
- **Rules** 
    
    - **Loneliness** (<2) → die
    - **Overcrowding** (>3) → die
    - **Survival** (2 or 3) → stay alive
    - **Reproduction** (exact 3) → born

- Emergence: **oscillators, gliders, glider guns** **振荡器、滑翔机、滑翔机枪**
- 系统 **parallel** 但 **decentralised**，展现 **self-organisation**

![[Pasted image 20250607202836.png]]


## 4. 模型实现的“四大设计决策”

| 维度                 | 需回答的核心问题                        | 常见选项 & 影响                                                                               |
| ------------------ | ------------------------------- | --------------------------------------------------------------------------------------- |
| **Space**          | 网格如何表示？Agent 如何定位？              | discrete vs continuous；single vs multiple occupancy；proximate vs long-range interaction |
| **Time**           | 时间怎样推进？事件顺序如何影响行为？              | synchronous 更新 vs asynchronous（若异步：随机顺序、固定扫描或基于事件队列）；discrete time 步 vs continuous time |
| **Information**    | Agent 拥有什么信息？如何获取？              | variable scope（global / patch / agent）；neighbourhood 尺度                                 |
| **State updating** | 规则 deterministic 还是 stochastic？ | stochasitc 可带来 more realistic variability，但也增加实验次数需求                                    |
**CA 四要素**

1. **Discrete time**
2. **Discrete space**（通常 1D / 2D grid）
3. **Finite cell states Σ**
4. **Local update rule Δ**（由 **neighbourhood** 决定）

四维组合决定 CA 的 **behavioural space**，是建模者的“度量衡”。

## 5 案例一：Lotka-Volterra 捕食-猎物 CA

> 目标：把连续 **Lotka-Volterra ODE**
> 
> $\dfrac{dR}{dt}=αR-βRF,\quad\dfrac{dF}{dt}=δRF-γF$
> 
> 改写成 **bottom-up** CA，显式追踪每只动物。

### 5.1 设计假设

- **Space**：2D lattice，每格最多 1 animal，periodic 边界。
- **Time**：discrete steps；异步更新 → 每回合随机抽 **cell A + neighbour B**。
- **Information**：动物只“看见”自身 Moore 邻域。
- **State**：cell 取 {0 = empty, 1 = rabbit, 2 = fox}。

### 5.2 Stochastic 更新规则

1. **Prey reproduction**：A=rabbit & B=empty ⇒ 以概率 α 复制一只 rabbit 到 B。
2. **Predation & predator reproduction**：A/B 组合含一 fox + 一 rabbit ⇒ 以 β 把 rabbit 吃掉；若吃掉，以 δ 在原 rabbit 位置生成 fox。
3. **Predator death**：A=fox & B=empty ⇒ 以 γ fox 死亡，A 变 empty。
4. **Movement**：A=empty & B=animal ⇒ animal 移动至 A。


> 通过重复采样“随机单元 + 邻居”实现异步、局部、概率交互，既可观察 **population oscillation**，也能显式看到 **spatial pattern**（如 rabbit 聚簇、fox 波前）。

## 6 案例二：SIR 疫情 CA

### 6.1 Version 1 — 永久免疫

- **State**：{0 = Susceptible, 1 = Infectious, 2 = Recovered}.
- **Rules**
    1. 邻域内若存在 Infectious，则 S 以概率 β 变 I。
    2. I 以概率 γ 恢复为 R。

### 6.2 Version 2 — 免疫衰减 (SIRS)

- **State**：用整数计时 0…q+r。1…q 表 Infectious，q+1…q+r 表 Recovered。
- **Rules**
    1. S 若有 I 邻居即被感染；
    2. I 经 q 天变 R；
    3. R 经 r 天免疫消退，回到 S。

> 通过修改 **state space** 与 **update rule**，即可把经典 **SIR ODE** 扩展为能模拟 **waning immunity**、**local clustering** 的离散模型

## 探索模型：Parameter Sweep & Statistics

- **Parameter sweep**：系统地遍历 (p, q, r) 或 (α, β, γ, δ)… 组合。
- 因为规则是 **stochastic**，需多次重复取均值 ± StdDev，常用指标：
    - total infected fraction、peak prevalence、extinction time 等。
- 结果可绘制 **heat-map** 或 **phase diagram**，识别临界阈值。

- 因为我们的模型行为是随机的，我们可能想把每个参数组合运行几次，考虑系统的平均行为。
- 对于轨迹（即随时间变化的状态序列），这可能是困难的。通常情况下，我们确定一些全局测量，记录每次模拟运行的值，并报告平均值和标准差。
## 基本 CA 的扩展方向

1. **Asynchronous CA**：基于 Poisson clocks 或随机队列更新 → 逼近 continuous-time。
   基本的CA在每个时间步骤中同步（在同一时间）更新所有单元。我们也可以在不同时间更新单元。
2. **Probabilistic CA**：规则含随机性（本讲实例）。
   基本CA的更新规则是确定性的（Cx.05例子）。我们也可以使用概率/随机的更新规则（Cx.06的例子）。
3. **Non-homogeneous CA**：不同区域/个体使用不同规则，如 **context-sensitive fire spread**。
   基本CA对每个单元都适用相同的更新规则。我们也可以使用上下文敏感的规则。
4. **Network-structured CA**：用任意 graph 替代 grid，邻域来自 **complex network**。
   基本CA用网格相邻关系来定义邻域。我们也可以使用更复杂的邻居网络拓扑结构。

这些扩展缓解经典 CA 的局限（固定拓扑、同步更新、全规则一致），也为后续 **Agent-Based Model (ABM)** 铺路。


**优势**：

- 它们（相对）简单，容易实现 
- 它们可以表示难以用ODEs建模的相互作用和行为 
- 它们反映了系统组件的内在个性

**缺点**：

- 它们是相对受限制的（拓扑结构、相互作用、个体行为）。
- 全局行为可能难以解释