---
sticker: lucide//radio
---
## Net Structure 系统静态骨架

| 元素               | 含义                                                                                                                                   | 图形    | 关键词           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------------- |
| **Place p**      | 一个palce ![p](https://latex.csdn.net/eq?p)是一个**被动的系统组件**。<br>用图形表示为一个圆或椭圆。<br>一个palce有离散的状态，可以储存东西                                    | ○ / ⭕ | 资源、条件         |
| **Transition t** | 主动组件、执行动作<br>transition ![t](https://latex.csdn.net/eq?t)是一个**活跃的系统组件**。<br>用图形表示为一个正方形或长方形。<br>一个过渡会消耗、生产或转移事物                      | ■ / ▢ | 事件、活动         |
| **Arc**          | arc**不是一个系统组件**，而是一个系统组件之间的逻辑关系。<br>用图形表示为一个箭头。<br>一个arc把一个palce和一个transition联系起来，或者把一个transition和一个palce联系起来；因此，Petri net是一个有向二边形图。 | →     | flow relation |
Petri net 本质是 **directed bipartite graph**，两类节点不直接相连，只能 Place↔Transition 交替连接。

从图形上看，Petri网中的place可以包含一个离散的标记（token）。标记在地方上的任何分布将代表网的一个配置，称为标记。在与Petri网图有关的抽象意义上，Petri网的一个过渡如果被启用，即在其所有的输入位置上有足够的标记，就可以启动；当过渡启动时，它消耗所需的输入标记，并在其输出位置创建标记。触发是原子性的，即是一个不可中断的单一步骤。

除非定义了执行策略（例如过渡的严格排序，描述优先级），否则Petri网的执行是不确定的：当多个过渡同时被启用时，它们将以任何顺序发射。

由于发射是不确定的，而且多个标记可能出现在网的任何地方（甚至在同一个地方），因此Petri网很适合为分布式系统的并发行为建模。

***为什么需要Petri nets？***

通常不可能预测一个递归函数的计算会消耗多少空间。
如果可用的资源不足以完成计算，进行递归计算的数据处理系统应该是可扩展的。
扩展一个系统比重新开始一个更大的系统更有效率。
如何描述一个可以无限扩展的系统架构？
这种可扩展系统的每一次扩展都扩大了系统的空间。
因此，这样一个可无限扩展的系统必须具有以下特征：没有中心部件；没有中央同步时钟。

![[Pasted image 20250608144804.png]]


### 标识（Markings）
标识是对系统状态的编码，是网状结构中各处tokens的排列。

***Tokens***

Token可以代表现实世界中可以被消费、生产或转移的事物，并通过过渡来实现。
一个token可以表示一个过渡的发生所要满足的条件
Token被放置在描述地点的圆圈和椭圆内，在图形上表示为黑点。
可以用一个符号标记代替黑点来指代一个具体的事物（例如 ）。

![[Pasted image 20250608144936.png]]

 初级网系统只使用黑点token（即token从它们所代表的事物的性质中抽象出来）。

一个初级网络系统![S](https://latex.csdn.net/eq?S)是![\left ( N,M_{0} \right )](https://latex.csdn.net/eq?%5Cleft%20%28%20N%2CM_%7B0%7D%20%5Cright%20%29) 

![M_0](https://latex.csdn.net/eq?M_0)是初始时刻所有place的token的情况。

![[Pasted image 20250608145128.png]]

### Hot vs Cold Transitions

- **Hot transition**：内部动作，若 enabled 一定会 eventually 发生（如“退币 b”）。
- **Cold transition B**：受环境触发，可能永远不发生（如顾客“insert coin a”）09_pn_01 (1)。

> 考试常问：冷/热区分帮助建模“外部输入不确定性”。

### 前序节点集和后序节点集
![](https://i-blog.csdnimg.cn/blog_migrate/e396bd6878464dc37bd57226b2c51669.png)

### Enables的条件

![](https://i-blog.csdnimg.cn/blog_migrate/77b76fb58e3f98ae93e0d2ea0cc379b9.png)

### Step rule

![](https://i-blog.csdnimg.cn/blog_migrate/7b76c66a90e4788d6ae17a5b3a2fd62e.png)

![ABBDDEFFF\rightarrow ^{z}ABBBCDDFF](https://latex.csdn.net/eq?ABBDDEFFF%5Crightarrow%20%5E%7Bz%7DABBBCDDFF)
# Part 2

## 1 语义视角：Interleaving ↔ Concurrency

### Reachable marking & Marking graph

- **Marking graph**（也叫 reachability graph）节点 = 所有 **reachable markings**，边 = **step**（一次或多次 transition 同时 firing）。
- 若 marking graph 无限，就出现 **state-explosion problem**

![](https://i-blog.csdnimg.cn/blog_migrate/dd41b70ec2280c5fc39881f07b0be3d8.png)

- 当前系统可以通过 transition 最终到达的状态

### final marking

不存在 hot transition 的情况即可判定
![[Pasted image 20250609000608.png]]

因为只要 B 不存在 token，那么 b，c 就一定不满足 hot enable 的条件，因此只要 marking 中不含有 B，那么就可以是 final 状态；因此 ACC, ADD, ACDDE 都满足 final 的条件
### 1.2 Sequential run（Interleaving semantics）

- 把并发 firing 排成 **total order**；一个 sequential run = marking graph 上的一条 **directed walk**
- Interleaving 适合大多数模型检查工具，但会把“真正并发”降格为“交叉排列”10_pn_02 (1)。
### 1.3 Distributed run（Concurrency semantics / Process / Occurrence net）

- **Action** = firing 的局部快照：输入 tokens → transition → 输出 tokens。
  ![[Pasted image 20250608163743.png]]
  - 在当前这个 action 中，只有 B,C,A,D,E 参与到转化中，由于 C_prime 是 C 中的另外一个 token，因此在这个 action 中暂时不参与。但是有可能在后面的 action 中会参与 transition
- 可以区分“偶然顺序”vs“必然先后”；代价是结构更大、构造更复杂。

> **易考点**：解释为何同一 net 的 sequential runs 可能相同而 distributed runs 不同。

> [!info] 
> **Interleaving = 顺序**，只问“发生了什么”；**Concurrency semantics = 顺序 + 因果/并发关系 Causality and concurrency relations**，还能回答“为什么能这么发生”。  
因此，同一 Petri net 在排成线性序后可以一样，而在包含因果关系的 distributed runs 上仍显出本质差异。 

### 有界性

如果所有可达标记的集合是有限的，则网络系统是有界的，否则是无界的。

- 只要右边的图的节点数目是有限个的，那么就是 bounded
- ![[Pasted image 20250608171523.png]]

#### 一个 unbounded 例子

- 如果在 c 那里添加一个 epsilon 的条件，那么整个系统就可以不需要任何一条 edge 而无穷的循环到达 acc，acccc，acccccc 等无穷多个状态
- 同样的，在 AD 那里也会产生 add，adddd 等无限多个状态

![](https://i-blog.csdnimg.cn/blog_migrate/26232c80f066e846beefac2b316eef42.png)
#### 如何检验 unbounded

- 通过 converability graph ，当出现了 node 中包含 $\omega$ 的节点，代表这个 node 可以执行任意多次，因此就是 unbounded。
- ![[Pasted image 20250608171647.png]]

#### K-boundness

- 每个 place 中的 token 数最多不超过 k 个
- 下图中的 places 中 最多两个 tokens
- K bound 的系统同时也是 m-bounded，当$m>k$
- 1-bounded 系统是 safe 的

![](https://i-blog.csdnimg.cn/blog_migrate/78f9d7f90efe476563b35e806baa8fad.png)


#### Liveness

- 当一个 transition 可以无限次执行，那么这个 transition 就是 live 的
- 当整个系统的所有 transition 都可以无限次执行，那么系统就是 live 的
- 如果not live的话意味着某些过渡无法再次启用。
![[Pasted image 20250608172459.png]]

- 这个系统中，由于 a, b 可以一直循环触发无限次，但是 c，d节点不行，因此这个系统不是一个 live 系统；也就是说右图中 c,d 都是单向的图，他们都不能无限次执行
- ![[Pasted image 20250608173034.png]]

## Workflow net

源地用于表示工作流程的开始。

流入地用于表示工作流的终止。

工作流网中的每个元素都应该有机会被执

![](https://i-blog.csdnimg.cn/blog_migrate/f3d7a8b039c3035ed37523f166ee3ad8.png)

![](https://i-blog.csdnimg.cn/blog_migrate/90074a99d03eb8a9148793dacd2f763a.png)

#### Soundness

每个案例最终都会终止；当一个案例终止时，在汇合点有一个标记，所有其他地方都是空的。
没有死的过渡；对于每个过渡t，都有一个执行t的案例

 ![[Pasted image 20250608234316.png]]

#### Option to Complete

必须所有的 reachable marking 都能够到达最终的输出 marking o
但是在这个例子中，由于 BB 这个 reachable marking 没有途径到达 o因此不符合

![[Pasted image 20250608234435.png]]

#### Proper completion

当到达 o 状态之后就不能有任何后续的操作，就是 proper completion
下图的例子中，可以首先到达点 a，然后 A 有一个 token，然后通过点 b 多次，就可以得到 Ao, Aoo, Aooo，因此很显然 AO 不是终止状态，因此不满足 proper completion

 ![[Pasted image 20250608234505.png]]

#### Dead transition

如果某个 transition 是永远不可达的，这个 transition 就是 dead transition
下图的 C 是一个 dead transition

![[Pasted image 20250608234621.png]]


#### Sound

如果一个 workflow 系统满足 option to complete，proper completion 以及 no dead transition，那么就说这个 workflow system 是 sound

![[Pasted image 20250608234721.png]]
 
#### Short Circuiting

从终点 o 可以有一个 shortcut 把 token 送回起点，这个 fresh transition 构成了 short circuiting 的 workflow net
并且这个 fresh transition 不属于 workflow 中的任意一个 transition

![[Pasted image 20250608234753.png]]


#### Sound workflow system system

当有 short circuiting 的时候，如果当前的系统是 live 并且 bounded 的，那么这个系统就是 sound的
live 保证的是这个系统中没有 dead transition的状态
bounded 其实是一种限制，因为这个系统在做完一个 case 之后，应该是所有的 place 都是空的，如果此时有一个 place 不为空，那么由于这个系统可以无限次迭代，那么这个 place 经过无限次迭代后就会有 infinite 个 tokens从而变成 unbounded，因此要保证系统是 bounded 才行

![[Pasted image 20250608234830.png]]