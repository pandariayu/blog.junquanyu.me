# User Stories
## **Process Followed  遵循的流程**

The user stories for the For Humanity AI Auditing System Project were developed through a structured process to ensure alignment with stakeholder needs and project goals. First, we created [personas](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/33554870 "https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/33554870")—Internal Compliance Manager, Internal Auditor, AI Systems Developer, and Senior Board Member—based on our understanding of key roles involved in AI auditing, informed by project requirements and initial discussions with Elle.  
For Humanity AI 审计系统项目的用户故事是通过结构化流程开发的，以确保与利益相关者的需求和项目目标保持一致。首先， [我们根据对](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/33554870 "https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/33554870") AI 审计中涉及的关键角色的理解，根据项目要求和与 Elle 的初步讨论，创建了角色——内部合规经理、内部审计师、AI 系统开发人员和高级董事会成员。

Next, we designed a [motivational model](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/45973807 "https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/45973807") to visually map system features to user tasks, stakeholder roles, and desired outcomes (both functional and emotional), providing a foundation for user-centric design. These deliverables were refined through client meeting minutes captured during our discussions with the client, where we presented and validated our work. In Sprint 2, during a [review meeting](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/51811894 "https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/51811894"), the client reviewed the personas, motivational model, and initial user stories, offering feedback that shaped this table (e.g., suggesting an escalation feature for risk conflicts).  
接下来，我们设计了一个[激励模型](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/45973807 "https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/45973807") ，将系统功能直观地映射到用户任务、利益相关者角色和预期结果（功能和情感），为以用户为中心的设计奠定基础。这些可交付成果通过我们与客户讨论期间捕获的客户会议记录进行提炼，我们在会议中展示并验证了我们的工作。在 Sprint 2 中，在[审查会议](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/51811894 "https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/51811894")期间，客户审查了角色、激励模型和初始用户故事，提供了形成此表的反馈（例如，建议风险冲突的升级功能）。

While she initially provided high-level input during the sprint review, we have since received more detailed feedback from her and her colleague regarding the user stories. Based on their input, we have updated the user stories accordingly, as documented in the changelog below. The current priorities reflect this feedback, while the estimations represent the team’s assessment of the time and effort required for each story.  
虽然她最初在 sprint 评审期间提供了高层次的意见，但后来我们从她和她的同事那里收到了关于用户故事的更详细的反馈。根据他们的意见，我们相应地更新了用户故事，如下面的更新日志中所述。当前的优先级反映了这些反馈，而估计值则代表了团队对每个故事所需的时间和精力的评估。

## **User Story Table  用户故事表**

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|**Epic  史诗**|**User Story ID  用户情景 ID**|**As a/an  作为 a/an**|**I want to   我想**|**So that I can  这样我就可以**|**Priority  优先权**|**Size Estimation  大小估计**|
|**Evidence Management and Preparation  <br>证据管理和准备**|1.1|Internal Compliance Manager  <br>内部合规经理|Upload evidence like risk assessments and ethics policies into pre-set categories  <br>将风险评估和道德政策等证据上传到预设类别中|Prepare for audits faster and cut preparation time from months to weeks  <br>更快地为审计做准备，并将准备时间从几个月缩短到几周|Must Have  必须具备|M|
|1.2|Internal Compliance Manager  <br>内部合规经理|Receive alerts if the uploaded evidence was done incorrectly or in the wrong format  <br>如果上传的证据处理不正确或格式错误，则接收警报|Fix issues before submission  <br>在提交之前修复问题|Should Have  应该有|M|
|1.3|Internal Compliance Manager  <br>内部合规经理|Upload multiple evidence files at once and assign them to categories in bulk  <br>一次上传多个证据文件并将其批量分配到类别|Save time on repetitive tasks  <br>节省重复性任务的时间|Could Have  本来可以|L|
|1.4|Internal Auditor  内部审计师|See a history of evidence submissions with timestamps  <br>查看带时间戳的证据提交历史记录|Ensure transparency during the audit process  <br>确保审计过程中的透明度|Must Have  必须具备|L|
|**Guided Compliance Workflow  <br>引导式合规性工作流程**|2.1|Internal Compliance Manager  <br>内部合规经理|Have different categories with clear instructions for compliance requirements  <br>具有不同的类别，并针对合规性要求提供明确的说明|Visualise the requirement clearly  <br>清楚地可视化需求|Must Have  必须具备|L|
|2.2|Internal Compliance Manager  <br>内部合规经理|See a progress bar or checklist showing what’s done and what’s left  <br>查看进度条或核对清单，其中显示已完成的内容和剩余的内容|Track my completion status  <br>跟踪我的完成状态|Must Have  必须具备|M|
|2.3|Internal Compliance Manager  <br>内部合规经理|View help text next to each step explaining what evidence is needed and why  <br>查看每个步骤旁边的帮助文本，说明需要哪些证据以及原因|Understand requirements without extra research  <br>无需额外研究即可了解需求|Should Have  应该有|S|
|2.4|AI Systems Developer  AI 系统开发人员|Upload documentation relevant to my project, including the description and features  <br>上传与我的项目相关的文档，包括描述和功能|Provide information about my system  <br>提供有关我的系统的信息|Must Have  必须具备|M|
|2.5|AI Systems Developer  AI 系统开发人员|Receive a checklist of evidence requirements specific to my system’s risk level  <br>收到一份特定于我的系统风险级别的证据要求清单|Provide the correct documents  <br>提供正确的文件|Must Have  必须具备|M|
|2.6|Internal Compliance Manager  <br>内部合规经理|I want to be able to add/modify the categories and checklist  <br>我希望能够添加/修改类别和清单|Tailor the requirements based on current regulatory environment and specific AI systems  <br>根据当前的监管环境和特定的 AI 系统定制要求|Must Have  必须具备|M|
|2.7|Internal Compliance Manager  <br>内部合规经理|See the documentation added by the AI developer  <br>请参阅 AI 开发人员添加的文档|Better understand the AI system in question.  <br>更好地了解有问题的 AI 系统。|Must Have  必须具备|M|
|**Collaboration and Task Management  <br>协作和任务管理**|3.1|Internal Compliance Manager  <br>内部合规经理|Assign compliance tasks and see team members' progress  <br>分配合规性任务并查看团队成员的进度|Ensure we meet audit deadlines  <br>确保我们满足审计期限|Must Have  必须具备|L|
|3.2|Internal Auditor  内部审计师|Add comments directly on evidence documents  <br>直接在证据文档上添加注释|Collaborate without using other tools  <br>无需使用其他工具即可协作|Must Have  必须具备|M|
|3.3|AI Systems Developer  AI 系统开发人员|Receive notifications when assigned tasks or get feedback  <br>在分配任务时接收通知或获取反馈|Respond quickly and keep the audit on track  <br>快速响应并保持审计正常进行|Should Have  应该有|S|
|**Audit Assessment and Navigation  <br>审计评估和导航**|4.1|Internal Auditor  内部审计师|View a dashboard showing uploaded evidence with compliance status indicators  <br>查看显示上传证据和合规性状态指示器的控制面板|Spot non-compliant areas and give clear feedback  <br>发现不合规区域并提供明确反馈|Must Have  必须具备|L|
|4.2|Internal Auditor  内部审计师|Switch between category tabs on the home screen.  <br>在主屏幕上的类别选项卡之间切换。|Quickly review the uploaded evidence for the specific category of interest  <br>快速查看特定感兴趣类别的上传证据|Must Have  必须具备|S|
|4.3|Internal Auditor  内部审计师|To be able to view and open the uploaded evidence that is submitted for each auditing checklist points/question inside the selected category tab.  <br>为了能够查看和打开为所选类别选项卡中的每个审核清单要点/问题提交的上传证据。|Assess if the evidence satisfies the specific auditing (sub)criteria or not  <br>评估证据是否满足特定的审计（子）标准|Must Have  必须具备|M|
|4.4|AI Systems Developer  AI 系统开发人员|See auditor feedback on my evidence  <br>查看审计师对我的证据的反馈|Fix issues quickly  快速解决问题|Should Have  应该有|S|
|4.5|Internal Auditor  内部审计师|I want to be able to set the compliance status of the evidence.  <br>我希望能够设置证据的合规性状态。|Conduct   进行|||
|**Reporting and Oversight  报告和监督**|5.1|Senior Board Member  高级董事会成员|View a simple report summarizing compliance status and risks  <br>查看汇总合规性状态和风险的简单报告|Make decisions about AI deployment without technical confusion  <br>做出有关 AI 部署的决策，而不会造成技术混淆|Should Have  应该有|M|
|5.2|Senior Board Member  高级董事会成员|View the overall audit completion percentage on the dashboard  <br>在控制面板上查看总体审计完成百分比|Understand the overall progress of the audit activities  <br>了解审计活动的整体进度|Must Have  必须具备|S|
|5.3|Senior Board Member  高级董事会成员|Filter and sort audit records on the dashboard by time period, department/project, and audit stage  <br>按时间段、部门/项目和审计阶段对仪表板上的审计记录进行筛选和排序|Efficiently focus on specific audits and monitor targeted compliance efforts  <br>有效地专注于特定审计并监控有针对性的合规性工作|Could Have  本来可以|M|
|5.4|Internal Auditor  内部审计师|Generate a final report with clear graphs and summaries  <br>生成带有清晰图表和摘要的最终报告|Quickly prepare it for the client  <br>为客户快速准备|Must Have  必须具备|M|
|5.5|AI Systems Developer  AI 系统开发人员|View a simple summary of compliance requirements without jargon  <br>查看不带行话的合规性要求的简单摘要|Design my system to meet standards  <br>设计符合标准的系统|Should Have  应该有|M|
|**Authentication and Authorization  <br>身份验证和授权**|6.1|User*  用户*|Login into the system  登录系统|Access the application  访问应用程序|Must Have  必须具备|M|
|6.2|User*  用户*|Register an account with appropriate responsibility(e.g. auditor).  <br>注册一个具有适当职责的帐户（例如审计师）。|Login into system and gain access to the features I need  <br>登录系统并访问我需要的功能|Must Have  必须具备|M|

* The User represents all four personas  
* 用户代表所有四个角色

## Change Log  更改日志

### Sprint 3   冲刺 3

User Story 1:  用户故事 1：

- **1.2**: Modified. Changed to "Receive alerts if the uploaded evidence was done incorrectly or in the wrong format" for clarity.  
    **1.2**：修改。为清楚起见，更改为“如果上传的证据处理不正确或格式错误，则接收警报”。
    
- **1.4**: Modified. Priority changed to "Must Have." Simplified to "See a history of evidence submissions with timestamps." Size changed to L.  
    **1.4**：修改。优先级更改为 “必须拥有”。简化为“查看带有时间戳的证据提交历史记录”。大小更改为 L。
    

User Story 2:  用户故事 2：

- **2.1**: Modified. Changed to "Have different categories with clear instructions" and "Visualise the requirement clearly." Priority changed to "Must Have."  
    **2.1**：修改。更改为“具有不同的类别和明确的说明”和“清楚地可视化需求”。优先级更改为 “必须拥有”。
    
- **2.2**: Modified. Priority changed to "Must Have."  
    **2.2**：修改。优先级更改为 “必须拥有”。
    
- **2.3**: Modified. Priority changed to "Should Have."  
    **2.3**：修改。优先级更改为“应该有”。
    
- **2.4**: Modified. Changed to "Upload documentation relevant to my project, including the description and features" and "Provide information about my system." Priority changed to "Must Have."  
    **2.4**：修改。更改为“上传与我的项目相关的文档，包括描述和功能”和“提供有关我的系统的信息”。优先级更改为 “必须拥有”。
    
- **2.5**: Added. "As an AI Systems Developer, I want to receive a checklist of evidence requirements specific to my system’s risk level, so that I can provide the correct documents." Priority: Must Have, Size: M.  
    **2.5**：已添加。“作为一名 AI 系统开发人员，我希望收到一份针对我系统风险级别的证据要求清单，以便我能够提供正确的文件。”优先级：必须有，尺码：M。
    
- **2.6**: Added. "As an Internal Compliance Manager, I want to be able to add/modify the categories and checklist, so that I can tailor the requirements based on current regulatory environment and specific AI systems." Priority: Must Have, Size: M.  
    **2.6**：已添加。“作为内部合规经理，我希望能够添加/修改类别和清单，以便能够根据当前的监管环境和特定的 AI 系统定制要求。”优先级：必须有，尺码：M。
    
- **2.7**: Added. "As an Internal Compliance Manager, I want to see the description and features documents added by the AI developer, so that I can highlight specific compliance requirements for the AI developer to focus on." Priority: Must Have, Size: M.  
    **2.7**：已添加。“作为内部合规经理，我希望看到 AI 开发人员添加的描述和功能文档，以便我可以突出 AI 开发人员需要关注的特定合规性要求。”优先级：必须有，尺码：M。
    

User Story 3:  用户故事 3：

- **3.1**: Modified. Priority changed to "Must Have."  
    **3.1**：修改。优先级更改为 “必须拥有”。
    
- **3.2**: Modified. Simplified to "Add comments directly on evidence documents." Priority changed to "Must Have."  
    **3.2**：修改。简化为“直接在证据文档上添加注释”。优先级更改为 “必须拥有”。
    
- **3.4**: Removed. "Reassign tasks or skip steps with a record of changes."  
    **3.4**： 已删除。“重新分配任务或跳过包含更改记录的步骤。”
    
- **3.5**: Removed. "Escalate conflicting risk assessments to senior management."  
    **3.5**： 已删除。“将相互矛盾的风险评估上报给高级管理层。”
    

User Story 4:  用户故事 4：

- **4.2**: Modified. Changed to "Switch between category tabs on the home screen."  
    **4.2**：修改。更改为“在主屏幕上的类别选项卡之间切换”。
    
- **4.4**: Modified. Role changed to AI Systems Developer. Changed to "See auditor feedback on my evidence" and "Fix issues quickly." Priority changed to "Should Have." Size changed to S.  
    **4.4**：修改。角色更改为 AI Systems Developer。更改为“查看审计员对我的证据的反馈”和“快速解决问题”。优先级更改为“应该有”。Size 更改为 S。
    
- **4.5**: Removed. "See auditor feedback on my evidence in real-time."  
    **4.5**： 已删除。“实时查看审计师对我的证据的反馈。”
    

User Story 5:  用户故事 5：

- **5.1**: Modified. Priority changed to "Should Have."  
    **5.1**：修改。优先级更改为“应该有”。
    
- **5.3**: Modified. Priority changed to "Could Have."  
    **5.3**：修改。优先级更改为“可能”。
    
- **5.4**: Modified. Role changed to Internal Auditor. Changed to "Generate a final report with clear graphs and summaries" and "Quickly prepare it for the client." Priority changed to "Must Have."  
    **5.4**：修改。角色更改为 Internal Auditor。更改为“Generate a final report with clear graphs and summaries”和“Fast prepare it for the client”。优先级更改为 “必须拥有”。
    
- **5.5**: Modified. Role changed to Internal Auditor. Changed to "Generate a final report with clear graphs and summaries" and "Quickly prepare it for the client." Size changed to M.  
    **5.5**：修改。角色更改为 Internal Auditor。更改为“Generate a final report with clear graphs and summaries”和“Fast prepare it for the client”。大小更改为 M。
    
- **5.6**: Modified. Size changed to M.  
    **5.6**：修改。大小更改为 M。
    
- **5.7**: Removed. "Switch between detailed and summary views in the report."  
    **5.7**： 已删除。“在报表中的详细视图和摘要视图之间切换。”
    

User Story 6 (newly added):  
用户故事 6（新增）：

- **6.1**: Added. "As a User, I want to login into the system, so that I can access the application." Priority: Must Have, Size: M.  
    **6.1**：已添加。“作为用户，我想登录系统，以便我可以访问应用程序。”优先级：必须有，尺码：M。
    
- **6.2**: Added. "As a User, I want to register an account with appropriate responsibility (e.g., auditor), so that I can login into system and gain access to the features I need." Priority: Must Have, Size: M.  
    **6.2**：已添加。“作为用户，我想注册一个具有适当责任的帐户（例如审计员），以便我可以登录系统并访问我需要的功能。”优先级：必须有，尺码：M。
    

### Sprint 4  冲刺 4

Improved how table looks visually by merging cells.  
通过合并单元格改进了表格的视觉外观。

Epic 2:  史诗 2：

- **2.7:** Modified to make meaning for “I want to” and “So that I Can” sections clearer  
    **2.7：** 修改以更清晰地显示“I Wanna ”和 “So that I Can” 部分的含义