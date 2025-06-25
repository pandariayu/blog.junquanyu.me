# Requirement Elicitation
## **Limitations Regarding Requirement Elicitation <br/>关于需求获取的限制**

Due to the unique circumstances, there has been one major limitation on the options available for requirement elicitation. The main limitation for us is that AI auditing is a new and emerging field with very few AI auditors(if any at all) in the world that the group can elicit requirements from. This meant that gathering stakeholders necessary for activities involving multiple stakeholders such as workshops, focus groups and questionnaire ends up being beyond the capabilities of the group, especially since the group don’t have any contact with these potential stakeholders. Hence, the current elicitation effort centers around eliciting requirements from client, who are one of the few individuals in the world that have knowledge regarding this field.  
由于特殊情况，可用于需求获取的选项存在一个主要限制。对我们来说，主要限制是 AI 审计是一个新兴的领域，世界上很少有 AI 审计师（如果有的话）可以让该集团从中获得要求。这意味着，为涉及多个利益相关者的活动（如研讨会、焦点小组和问卷调查）召集利益相关者，最终超出了该小组的能力范围，特别是因为该小组与这些潜在的利益相关者没有任何联系。因此，目前的招聘工作集中在向客户提出要求上，他们是世界上为数不多的了解该领域的人之一。

## **Elicitation Plan:  <br/>启发计划：**  
  

To generate User Personas and Do/Be/Feel list, the we plan to use the client meetings to generate functional goals, derive potential stakeholders as well as detailing their pain points and needs. Then, the we to use the second client meeting to confirm the stakeholder roles identified. To generate user stories, the group plans to derive them from the motivational model, the personas and client feedback during the client meeting/interview. Additionally, the group plans to validate the personas, motivational models and user stories with the client to ensure that they match their needs. Detailed description of the elicitation process are show below.  
为了生成用户角色和 Do/Be/Feel 列表，我们计划利用客户会议来生成功能目标，得出潜在的利益相关者，并详细说明他们的痛点和需求。然后，我们使用第二次客户会议来确认确定的利益相关者角色。为了生成用户故事，该小组计划从激励模型、角色和客户会议/访谈期间的客户反馈中得出它们。此外，该小组还计划与客户一起验证角色、激励模型和用户故事，以确保它们符合他们的需求。 激发过程的详细说明如下所示。

## Document Analysis  <br/>文档分析

As part of document analysis we plan to review two main documents, the Australian eSafety assessment tools website([![](https://www.esafety.gov.au/themes/custom/esafety/favicon.ico)Assessment tools | eSafety Commissioner](https://www.esafety.gov.au/industry/safety-by-design/assessment-tools) ) and the Top Management and Oversight Body certification PDF document containing the auditing checklist.  
作为文件分析的一部分，我们计划审查两个主要文件，即澳大利亚电子安全评估工具网站（ [![](https://www.esafety.gov.au/themes/custom/esafety/favicon.ico) 评估工具 | 电子安全专员](https://www.esafety.gov.au/industry/safety-by-design/assessment-tools) ）和包含审计检查表的最高管理和监督机构认证 PDF 文件。

We decided not to analyze the documents containing other AI safety frameworks at this stage, as these documents don't provide the auditing requirements requested by the client nor do they help provide digital solution for AI auditing. Given the limited time available, the group decided to prioritize the more immediately relevant documents.  
我们决定在这个阶段不分析包含其他 AI 安全框架的文件，因为这些文件没有提供客户要求的审计要求，也没有帮助为 AI 审计提供数字解决方案。鉴于可用时间有限，该小组决定优先考虑更直接相关的文档。

#### PDF document analysis  <br/>PDF 文档分析

As the PDF document contains the checklist for auditing which is required to be incorporated into the final product, we aim to extract the following information from it:  
由于 PDF 文档包含需要纳入最终产品的审计清单，我们的目标是从中提取以下信息：

1. The sections which contains the checklist.  
    包含清单的部分。
    
2. General characteristics of the checklist which include how its structured and written(e.g. How verbose it is, is it split into subsections/categories). This will assist in narrowing down potential solution as they need to properly incorporate the checklist whilst providing ability to mitigate issues identified.  
    清单的一般特征，包括它的结构和编写方式（例如，它有多冗长，它是否被分成小节/类别）。这将有助于缩小潜在解决方案的范围，因为他们需要正确整合清单，同时提供缓解已发现问题的能力。
    
3. How would each of the stakeholders react when they viewed the document. By viewing through the perspective of shareholder when using the document to perform the auditing, we would be able to identify the pain points(e.g. the report containing section irrelevant to auditing) and thus their needs. We will use this information for the generation of personas as well as Do/Be/Feel list.  
    每个利益相关者在查看文档时将如何反应。 通过使用文件进行审计时，从股东的角度进行观察，我们将能够识别痛点（例如，报告包含与审计无关的部分），从而确定他们的需求。我们将使用此信息来生成角色以及 Do/Be/Feel 列表。
    

#### ESafety commissioner assessment tools analysis  
ESafety Commissioner 评估工具分析

The eSafety tools shows an existing implementation of an assessment/auditing tool. We aim to analyze this tool to gain the following:  
eSafety 工具显示了评估/审计工具的现有实施。 我们的目标是分析此工具以获得以下内容：

1. An example workflow to guide the group in creating user journeys  
    指导组创建用户历程的示例工作流
    
2. Assists in generating user stories. This can be done through what features the tool contains and what the user achieves from using said tools.  
    协助生成用户故事。这可以通过工具包含的功能以及用户从使用所述工具中获得的效果来完成。
    
3. An inspiration for one of the potential solutions to present to the client.  
    向客户展示的潜在解决方案之一的灵感。
    

## Interview  <br/>面试

We use a conversation-driven elicitation strategy that focuses on understanding the client's current workflows, pain points, and priorities. The techniques we use include：  
我们使用对话驱动的启发策略，专注于了解客户当前的工作流程、痛点和优先事项。我们使用的技术包括：

1. **Open-ended questions  开放式问题**
    

We avoid “yes/no” or overly technical questions from the outset. Instead, we use open-ended prompts that allow the client to express their needs in their own words. This helps us uncover workflows and challenges that our clients may not have thought of.  
我们从一开始就避免“是/否”或过于技术性的问题。相反，我们使用开放式提示，允许客户用自己的话表达他们的需求。这有助于我们发现客户可能没有想到的工作流程和挑战。

As an example, we start with “_Can you walk us through how your team currently performs compliance audits?_ “. This question was a good introduction to the interview and gave us a detailed look at the spreadsheet-based system. At the same time, the customer illustrated how manual tracking can take too much time and cause errors, which is part of the user pain point. If we had simply asked, “Do you need an audit tool?” , there would have been no such findings.  
例如，我们从“ _您能告诉我们您的团队目前如何执行合规性审计吗？_”开始。这个问题很好地介绍了面试，让我们详细了解了基于电子表格的系统。同时，客户说明了手动跟踪如何花费太多时间并导致错误，这是用户痛点的一部分。如果我们简单地问“您需要审计工具吗”，就不会有这样的发现。

2. **Scenario-based discussions  
    基于场景的讨论**
    

To dig deeper, we asked our clients to present us with specific situations they have encountered in the real world, rather than staying at a theoretical level. This allowed us to map out the actual steps and identify pain points in their processes.  
为了更深入地挖掘，我们要求客户向我们展示他们在现实世界中遇到的具体情况，而不是停留在理论层面。这使我们能够绘制出实际步骤并确定其流程中的痛点。

For example, for a specific process that an auditor has worked on, we would look at it like this, “_Let's say we have a visit from an external auditor next week. What steps would you take to prepare?_” Through the client's description, we learned that the external auditor's workflow mainly consists of collecting internal evidence, validating documents, and formatting the report, followed by an assessment and the signing of the final certificate of compliance. Upon this we found that document organization and audit trail are the main bottlenecks and should be addressed in our solution.  
例如，对于审计师参与的特定流程，我们会这样看待它，“ _假设我们下周有一位外部审计师来访。你会采取什么步骤来准备？_ 通过客户的描述，我们了解到外部审计师的工作流程主要包括收集内部证据、验证文件和格式化报告，然后进行评估和签署最终合规证书。在此基础上，我们发现文档组织和审计跟踪是主要瓶颈，应该在我们的解决方案中解决。

3. **Gradual refinement and clarification of requirements through multiple rounds of feedback and discussion  
    通过多轮反馈和讨论，逐步细化和明确需求**
    

We use step-by-step guidance + real-time feedback to help clients transition from vague ideas to clear expressions of their needs. Whenever a client mentions a vague or broad need, we continue to press for specifics and verify that we truly understand what they mean by restating and re-framing what they say.  
我们使用分步指导 + 实时反馈来帮助客户从模糊的想法过渡到清晰地表达他们的需求。每当客户提到模糊或广泛的需求时，我们都会继续追问具体细节，并通过重述和重新构建他们所说的内容来验证我们是否真正理解他们的意思。

For example, when a client says, “_We need better transparency._”We followed up by asking, “_Does this mean you want a dashboard that shows the status of the audit in real time, or a weekly summary report?_”  
例如，当客户说“ _我们需要更好的透明度”时。_ 我们接着问道：“ _这是否意味着您需要一个实时显示审计状态的仪表板，还是每周摘要报告？_  
With this question and the client's answer, it became clear that the client not only wanted real-time progress visualization, but also an efficient and easy-to-use reporting system.  
通过这个问题和客户的回答，很明显，客户不仅需要实时进度可视化，还需要一个高效且易于使用的报告系统。

More specific questions and our meeting process can be viewed in our client meeting minutes:  
更具体的问题和我们的会议流程可以在我们的客户会议记录中查看：

[![spiral notepad](https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/standard/ef8b0642-7523-4e13-9fd3-01b65648acf6/64x64/1f5d2.png)C-18/03/2025](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/13566082)

[![spiral notepad](https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/standard/ef8b0642-7523-4e13-9fd3-01b65648acf6/64x64/1f5d2.png)C-31/03/2025](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/40927725)

[![spiral notepad](https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/standard/ef8b0642-7523-4e13-9fd3-01b65648acf6/64x64/1f5d2.png)C-11/04/2025](https://feit-teaching.atlassian.net/wiki/spaces/SWEN900092025HUKoala/pages/51806925)

## Elicitation Process and Iteration Summary： <br/>启发过程和迭代总结：

So far, our team has gathered initial requirements primarily through client meetings, where we discussed the functional goals of the system and identified potential stakeholders, as well as through document analysis. During these meetings, despite the vagueness of the client’s answers, we still managed to capture key user needs and pain points, laying the groundwork for generating user personas and “DO/BE/FEEL” lists.  
到目前为止，我们的团队主要通过客户会议收集初始需求，在会上我们讨论了系统的功能目标并确定了潜在的利益相关者，以及通过文档分析。在这些会议中，尽管客户的回答含糊不清，但我们仍然设法捕捉到关键的用户需求和痛点，为生成用户角色和“DO/BE/FEEL”列表奠定了基础。

After the initial meeting, we iterated on these insights based on client feedback and refined our understanding of stakeholder personas. We used this iterative approach to validate our assumptions and ensure alignment with client expectations.  
初次会议后，我们根据客户反馈迭代了这些见解，并完善了我们对利益相关者角色的理解。我们使用这种迭代方法来验证我们的假设并确保与客户的期望保持一致。

Then, we performed documented analysis on the PDF document and the eSafety tools website. Through the analysis of the PDF, we found that the document is long, full of jargon(legal and technical) and reference to other documents, making the document verbose and hard to digest for any stakeholders without both substantial legal and technical knowledge. These understanding combined with viewing the document from the perspective the stakeholders helped us to generate pain points and potential motivations for each of the stakeholders which we used to assist in the generation user persona and DO/BE/FEEL list. Through the analysis of the website, we realized that a guided workflow system, similar to the website would be a potential solution to the client.  
然后，我们在 PDF 文档和 eSafety 工具网站上进行了记录分析。通过对 PDF 的分析，我们发现该文件很长，充满了行话（法律和技术）和对其他文件的引用，这使得该文件冗长且难以理解，对于没有大量法律和技术知识的任何利益相关者来说。 这些理解与从利益相关者的角度看待文档相结合，帮助我们为每个利益相关者生成痛点和潜在动机，我们用它来协助生成用户角色和 DO/BE/FEEL 列表。 通过对网站的分析，我们意识到类似于网站的引导式工作流程系统将是客户的潜在解决方案。

Through a second client meeting, we provided the client with different directions for our final solution to view client preferences. This process was actually a further clarification and validation of the requirements. Because the requirements given by the client during the first meeting were not very clear. Based on this, we optimized the User Persona and created “DO/BE/FEEl” lists and Motivational Models based on the further specific requirements obtained, followed by the generation of User Stories.  
通过第二次客户会议，我们为客户提供了不同的指导，以便我们的最终解决方案查看客户偏好。这个过程实际上是对要求的进一步澄清和验证。因为客户在第一次会议时给出的要求不是很清楚。基于此，我们优化了用户角色，并根据获得的进一步特定需求创建了 “DO/BE/FEEl” 列表和激励模型，然后生成了用户故事。

At our third client meeting (Sprint 2 Review meeting), we presented the results of the sprint, including the initial versions of the personas, the “DO/BE/FEEL” list, the motivational model, and the user stories. Through this meeting, we gathered further feedback from our customers and will improve and optimize these results in the next iteration.  
在我们的第三次客户会议（Sprint 2 评审会议）上，我们展示了 Sprint 的结果，包括角色的初始版本、“DO/BE/FEEL”列表、激励模型和用户故事。通过这次会议，我们收集了客户的进一步反馈，并将在下一次迭代中改进和优化这些结果。