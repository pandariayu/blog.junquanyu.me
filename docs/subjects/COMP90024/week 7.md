# Serverless(SaaS) and Fission

## Serverless(SaaS)

- **SaaS vs. FaaS:** FaaS 也被称为“无服务器计算”，这是一个更吸引人但不太精确的术语。
- **核心思想:** 无服务器/FaaS 的目标是开发应用程序时无需操心管理底层基础设施，特别是根据负载增减来伸缩服务器。 云提供商负责处理所有服务器和容量管理。
- **“不见服务器”，而非“没有服务器”:** 因为服务器仍然在被使用（只是由提供商管理），所以“不见服务器 (Server-unseen)”这个词比“无服务器 (Server-less)”更准确。
- **FaaS 环境:** FaaS 环境提供了添加、移除、更新、执行和自动扩展函数的能力。
- **与微服务的关系:** FaaS 可以被视为微服务架构的一种极端形式。 函数被独立执行，并且只在需要时才加载到内存中。

> [!question]
> 为什么“函数”是 FaaS 的核心单元?

### Definition

函数是一段接收参数并返回值的一段代码。‘

- **FaaS 的理想属性:** 
	- 无副作用的(free of side-effects) 不修改全局变量/写入文件/发起网络请求时
	- 短暂的(ephemeral)
	- 无状态的
	
- **FaaS 函数 vs. 编程语言中的函数:** 此页区分了编程语言中的函数和 FaaS 函数：
    
    - **Python 函数**是单个进程内的一组语句。
    - **FaaS 函数**是一个独立的进程，通常作为 Docker 容器运行，其返回值供其他进程消费。

### Pros

1. **部署简单** 用户只需要编写函数的code上传
2. 计算成本低 FaaS只计算函数执行时间
3. **架构松耦合** 函数间相互独立 应用程序复杂性低

### Application

- **事件驱动event driven:** 函数由事件触发。
- **组合Composition:** 函数可以调用其他函数，通过组合函数和事件，可以构建复杂的软件应用。
- **触发器示例:** 函数可以由各种事件触发，例如：
    
    - 定时器（例如，每小时压缩一次日志）。
    - 基础设施变更（例如，添加了一个新节点）。
    - 代码仓库事件（例如，在 GitHub 中合并了一个拉取请求）。
    - 消息到达队列mq。
        
- **与 UI 的类比:** 这种事件驱动模型类似于用户界面 (UI) 软件的构建方式，其中用户的操作会触发特定代码段的执行。

### Side-effect

- **无副作用 (Side-effect Free):** 如果一个函数不修改其自身范围之外的系统状态，那么它就是无副作用的。 给出的例子是一个接收一张图片并返回其缩略图的函数；它只产生输出而不改变任何其他东西。 这类函数保证对相同的输入返回相同的输出，并且可以轻松地并行运行。
    
- **有副作用:** 如果一个函数确实改变了系统，那么它就有副作用。 例如，一个创建缩略图_并_将其写入文件系统的函数。
    
- **最佳实践:** 在复杂系统中，副作用通常是不可避免的。 然而，一个好的做法是尽量减少有副作用的函数的数量，并将改变系统状态的代码部分隔离开来，因为这使得管理并行执行和避免死锁等问题变得更容易。

### Stateful/Stateless Function

- **有状态函数 (Stateful Function):** 如果一个函数的输出依赖于其内部存储的信息，那么它就是有状态的。 这意味着它的输出不能仅凭其输入来预测。 例子是一个将商品添加到购物车并在内部保留该购物车信息的函数。
    
- **无状态函数 (Stateless Function):** 如果一个函数不在内部存储信息，那么它就是无状态的。 使用相同的例子，如果函数将商品添加到一个存储在外部数据库（DBMS服务）中的购物车，那么该函数本身就变成了无状态的（尽管它仍然有副作用，因为它修改了数据库）。
    
- **在 FaaS 中的重要性:** 这种区分至关重要，因为在 FaaS 环境中，同一个函数可以有多个实例在运行，并且无法保证用户的后续请求会被路由到同一个实例。 依赖内部状态会导致行为不一致。

### Synchronous/Asynchronous Function

- **同步 (Synchronous):** 默认情况下，FaaS 函数是同步的。 这意味着它们会立即（或非常快地）返回结果，客户端会等待这个结果。
    
- **异步 (Asynchronous):** 对于需要很长时间才能完成的函数，同步方法会产生问题，因为它可能导致超时并占用客户端连接。 异步方法则更好。
    
    - 异步函数会立即向客户端返回一个代码（例如，HTTP 状态码 202 Accepted），以表示执行已开始。
    - 然后在耗时长的任务实际完成时，它会触发一个事件。

- **复杂情况:** 对于更复杂的工作流，通常使用包含消息队列系统的发布/订阅模式来管理异步函数通信。

### Monolithic Application
#### Original version
![](images/Pasted%20image%2020250621212314.png)

- **可扩展性:** 该应用只能_垂直_扩展（通过使用更强大的虚拟机），而不能_水平_扩展（通过将工作分散到多个节点）。
- **资源效率低下:** 应用的所有部分都同时加载到内存中，即使只有一个部分正在使用，导致资源消耗效率低下。
- **缺乏弹性:** 如果应用的一个部分发生故障（例如，内存溢出错误），整个应用程序都会崩溃。
- **紧密耦合:** 应用的所有部分都是紧密耦合的，很可能用同一种语言编写。 一个地方的改动（比如更新一个库）可能会引发整个代码库的连锁改动，使其变得脆弱且难以维护。

#### Serverless Version

![](images/Pasted%20image%2020250621212704.png)

- **分解:** 每个功能（例如，采集天气数据、处理数据）都被实现为一个独立的函数（例如，`wharvester`, `wprocessor`）。
- **异步通信:** 函数之间不直接对话。相反，它们通过队列中的消息（本例中为 `kafka topic`）进行异步通信。 例如，一个采集函数将原始数据放入队列，另一个独立的处理函数从那里获取数据。
- **优点:**
    - 函数仅在需要时加载。
    - 一个函数的失败不会导致整个应用程序崩溃。
    - 应用可以通过在不同节点上运行同一函数的多个副本来实现水平扩展。
    - 函数可以用不同的语言编写或使用不同的库版本，并且仍然可以协同工作。
- **总体结果:** 应用程序变得更易于更改、更健壮，并且使用更少的资源。

## Fission

- **Function (函数):** 一个可独立调用的、返回一个值的软件模块，在 Docker 容器内运行。
- **Environment (环境):** 函数运行所基于的基础 Docker 镜像。 它是特定于语言的，包含一个 HTTP 服务器和一些基础库。
```sh
 fission env create --name python --image fission/python-env
 ```
- **Package (包):** 一组用于自定义环境的文件（源代码或二进制文件），例如通过添加新库。
```sh
fission package create --sourcearchive ./fission/...zip\ 
	--env python\
	--name functionName\
	--buildcmd './build.sh'
```
- **Trigger (触发器):** 导致函数执行的事件，例如 HTTP 请求、定时器或队列中的消息。
- **Router (路由器):** 将传入的 HTTP 请求定向到正确函数的组件。
```sh
fission route create --url /health --function health
```
- **Specifications (Specs, 规约):** 一组 YAML 文件，以声明方式定义 Fission 应用程序的所有组件，与使用 CLI 命令相比，这使得部署和维护更容易。

### fission MQ

![](images/Pasted%20image%2020250621214352.png)
- **目的:** Fission 可以与消息队列系统集成，以实现异步函数调用。 一个函数可以将消息放入队列，另一个函数可以在稍后的时间消费它。
- **持久化:** 队列由像 Apache Kafka 或 Redis 这样的持久化机制支持。
- **图表:** 图表显示了`生产者 (Producer)`函数和其他生产者将消息（`Message 1`, `Message 2` 等）放入一个（由 `Redis` 支持的）队列中。 在另一端，`消费者函数 (Consumer Function)`实例从队列中取出消息进行处理。 这将生产者与消费者解耦。

#### Fission websocket


- **问题:** 标准的同步 HTTP 请求不适合可能需要几分钟才能完成的任务。
    
- **解决方案模式:** 概述了一个针对 JavaScript 客户端启动长时间运行的机器学习任务的可能解决方案：
    
    1. 客户端发送一个标准的 HTTP POST 请求来启动任务。
    2. Fission 立即将任务请求存储在消息队列中，并返回一个`HTTP 202 Accepted`状态，从而释放客户端。
    3. 客户端随后与服务器建立一个 **websocket** 连接。websocket 是一种持久的、双向的通信通道。
    4. 一个独立的 Fission 消费者函数从队列中取出任务并执行它。
    5. 任务完成后，函数使用已建立的 websocket 通道将结果直接发回给客户端。

- 这种模式使 Fission 能够处理长时间运行的后端任务，同时为 Web 前端提供响应迅速的体验。 websocket 在 Node.js 环境中可用

## Test

### Test Taxonomy

- **单元测试 (Unit Tests):** 在与系统其余部分隔离的情况下，测试单个模块（如单个函数或类）。
- **集成测试 (Integration Tests):** 测试不同软件组件如何协同工作。 例如，测试应用程序如何与数据库集成。 为了测试特定的错误条件（如数据库宕机），可以使用**模拟对象 (mock)**。 模拟对象是一个模拟的组件，可以被控制以按需产生特定的行为或错误。
- **系统测试 (System Tests) (端到端测试):** 从客户端或最终用户的角度，测试整个系统的整体行为。


- `/students` (用于所有学生的列表)
- `/students/{studentid}` (用于特定学生)
- `/courses` (用于所有课程的列表)
- `/courses/{courseid}` (用于特定课程)
- `/courses/{courseid}/students`

## Exam quetions

> [!question|closed] In a serverless environment (FaaS), you wrote a function that converts a JPEG image into a PDF document. A user uploads an image that is in a format that your function does not recognize and since you have been a little sloppy with your exception handling, this causes the function to crash. What happens to the cluster the function runs on?
> 
> 1. The cluster keeps on converting images into PDFs, although that specific request is lost.
>     
> 2. The cluster stops converting images into PDFs.  
>     应该选 1，因为 FaaS 的特性有 free of side effect 以及 stateless，并且函数按需在容器中触发，即使函数失败也不影响到整个系统。每个函数仅针对单个请求进行返回，函数间相互独立。如果一个请求失败导致 cluster 停止工作，这种类似单点失效的 feature 不是一个系统应该具有的特性1。

> [!question|closed] Discuss the role of functions in serverless computing. Your answer should include key properties of functions that make them suitable for serverless environments.  
> 函数是 serverless 的最小执行单元，具有无状态、短暂、可快速部署和弹性伸缩等特性，适合高并发和事件驱动的场景4。

> [!question|closed] OpenFaaS is an open source framework that can be used to deliver serverless computing solutions. Discuss the role of container technologies such as Docker in OpenFaaS and their relationship with functions and how they might be used to support auto-scaling.  
> 容器技术为 FaaS 提供运行环境，函数以容器为单位部署和隔离，支持弹性伸缩和高可用。Docker 等容器技术可实现函数的快速启动和自动扩容，提升系统的灵活性和可维护性4。

> [!question|closed] In the context of Cloud, what is meant by serverless computing?  
> serverless 是一种云计算模型，对应 FaaS，开发者只进行代码层面的开发，将业务交付给云平台进行运行和管理，包括函数的增删、更新执行，是一种微服务架构4。

> [!question|closed] List three reasons why it may be beneficial to choose a serverless solution.
> 
> 无需运维底层基础设施，开发者专注于业务逻辑。
> 按需计费，资源利用率高，节省成本。
> 易于扩展，自动弹性伸缩。
