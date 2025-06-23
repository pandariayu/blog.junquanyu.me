# Security and Clouds

## Importance

- If systems are not secure:
	- 不利于用户群体的增长和高价值用户的引入
	- 某些实验可能难以重复或代价高昂
	- 引发法律和道德问题
	- Trust is easily lost and hard to re-establish
		- 用户信息泄漏事件导致失去潜在用户或者当前用户

## Challenge

1. 需求通用的 兼容性高的安全解决方案
2. 存在==资源访问 用户管理访问策略 性能问题==等挑战

## Terminology

> [!quote]
> Key is to make all of this simple/transparent to users

1. *Authentication*: 确认用户或实体的**身份** 不检查用户操作
2. *Authorization*: 确认用户或实体的**操作权限和资源访问权限**
3. *Audit/Accounting*: 记录系统活动 以便追踪操作 检测异常责任认定
4. *Privacy*: 侧重于**个人相关信息**的保护

- **什么是安全？** 它不是一个黑白分明的概念，而是一个灰色地带，其中上下文决定了一切 。 一个系统只有在满足一组特定要求的情况下才是安全的 。
- **防范谁？** 是防范外部攻击者？系统管理员？还是恶意的内部员工 ？
- **安全多久？** 引用自《应用密码学》的一段话说明了从磁性介质中真正删除数据的极端困难，暗示对于足够有价值的数据，物理销毁可能是唯一可靠的方法

## Authentication


- **认证** 是在系统中建立和传播用户身份的过程 。 例如，它允许一个站点检查用户Y是否是他声称的那个人 。 它并*不检查该用户被允许做什么*。
- 传统的本地用户名/密码系统对于大型、动态的用户社区来说，扩展性不佳 。

## Authorization

- **授权** 是基于已定义的策略来控制对资源的访问 。 它回答了这样一个问题：“这个用户能否对这个资源执行这个操作？”。
- 它与认证是互补的：一旦我们知道了用户_是谁_（认证），授权就决定了他们被允许_做什么_ 。

## Public Key Cryptography

### Asymmetric Cryptography

- 它使用一对不同但互补的密钥：一个必须保密的**私钥 (Private Key)**，和一个可以公开分享的**公钥 (Public Key)** 。
- 至关重要的是，私钥不能从公钥中推导出来 。
- 私钥可用于**数字签名 (digitally sign)** 消息，然后任何人都可以用相应的公钥来验证该签名 。 这对于验证数据完整性和实现不可否认性（证明消息发送者）很有用。
- 公钥密码学简化了密钥管理，因为只有私钥需要长期安全保存；公钥可以是短期的，并且可以自由分发

### Public Key Certificate

将公钥与特定用户身份连接起来

- 用户的身份通常由一个**可分辨名称 (Distinguished Name, DN)** 来表示，其中包括姓名、组织单位、组织和国家等信息 。
- 该页用名片作类比：名片上有身份信息，但无法相信它不是伪造的 。
- 为了建立信任，公钥证书必须由一个受信任的第三方，即**证书颁发机构 (Certification Authority, CA)** 来颁发 。

### CA

- CA 是公钥基础设施 (PKI) 的核心组件 。
- 其职责包括：
    - 定义证书使用的策略和程序。
    - **颁发证书**，通常通过将身份验证委托给本地的注册机构 (RA)，用户必须在 RA 证明自己的身份（例如，通过护照） 。
    - **吊销**已过期或已泄露的证书，并将其发布在证书吊销列表 (CRL) 上 。
    - 存储和归档证书信息 。


## Single Sign O

是一种身份认证和访问控制的技术，使得用户只需要一次登录就能访问多个应用程序服务或网站，不需要再每个资源中都输入认证信息，可以==提高用户体验和效率==，减少==安全风险==

## Shibbloeth Augmented Authorization

> [!quote]
> 在不同组织和系统之间安全地传递身份信息和授权属性，有多个资源提供者共同负担

![](images/Pasted%20image%2020250622140045.png)

- 用户将浏览器指向一个受保护的资源（服务提供商） 。
- 服务提供商的 Shibboleth 软件将用户重定向到一个“你来自哪里”(W.A.Y.F.) 服务 。
- 用户选择他们的主机构（身份提供商），本例中为墨尔本大学。
- 主站点对用户进行认证（例如，通过他们的大学用户名和密码） 。
- 用户被重定向回服务提供商，并附带其身份证明，从而获得访问权限 。

## Other Challenges

1. SSO的普及
2. 跨云联合环境中的Auditing信息保存和日志记录
	- 审计涉及日志记录、入侵检测以及对计算机设施的安全审查 。
	- 虽然有适用于单一云环境的工具（例如，AWS CloudWatch, OpenStack Ceilometer），但跨多个联邦云的审计则远不成熟 。
3. 数据的安全删除 时间和资源消耗 
	- 用户缺乏控制权以及意外数据丢失的可能性
	- 用户无法直接访问物理硬盘，因此许多标准的数据删除工具无法工作 。
4. Liability责任和义务的认定
	- AWS 客户协议 - 客户承担了几乎所有的风险。
5. Licensing 模型的选择 (per user/per server/per organization...)
6. 如何定义和开发共享的面向安全的workflow - 整合 SoA服务/数据流
7. 技术和法律的变化

## Exam Questions

> [!question|closed] There are many open challenges in delivering secure Clouds. Describe some of the technical and non-technical issues that currently exist for development and delivery of security-oriented Clouds.  
> 技术层面主要涉及服务标准（如 Web service）、数据共享和迁移困难（网络限制）、数据安全性以及用户权限管理（security）的挑战。非技术层面主要涉及利益分配、工作流程合规、审计过程、责任分配、成本控制、法律法规等4。

> [!question|closed] The Internet2 Shibboleth technology as currently supported by the Australia Access Federation provides federated authentication. Why isn’t Shibboleth used to access Cloud-based systems more generally?  
> Shibboleth 主要面向跨机构协作，而不像普通云平台一样面向广泛用户，所以其应用场景更少。且由于其需兼容多个验证系统，认证生态更加复杂，适配性不足，技术成本更高4。


