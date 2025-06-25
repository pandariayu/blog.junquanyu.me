# Review Part 3: Quality and Risk Management

## Quality Management

### Fundamentals of Quality Management

**Software Quality:** This concept can be viewed from two perspectives. For the end-user, quality is judged by their interaction with the product, which is termed external quality characteristics, as they are typically associated with the external behaviour of the system. For the developer, the perspective also includes the problems inside the system, which are mainly internal quality characteristics, concerned with the quality of the internal structure of the system.

Cost of Software Quality Management: This involves a trade-off between conformance and nonconformance.

Conformance: The cost associated with delivering products that meet requirements and are fit for purpose. Examples include the cost of testing and developing a quality plan.

Nonconformance: The cost associated with taking responsibility for failures or not meeting quality expectations. An example is the cost of fixing a problem after the product has been released.

### Quality Management Processes

**Performing Quality Assurance:** This involves periodically evaluating overall project performance to ensure the project will satisfy the relevant quality standards. Verification and Validation (V&V) are important aspects of quality assurance.

- **Verification:** An attempt to ensure that the product is built correctly. It normally involves comparing two artifacts, such as a requirements specification against a design, or a design against code. It is about ensuring you are building the system right.
    
- **Validation:** An attempt to ensure that the right product is built, meaning the product fulfils its specific intended purpose. It involves going back to the stakeholders to check if the product meets their requirements. It is about ensuring that you are building the right system.
    

**Standard:** A set of rules for ensuring quality.

- **Product Standards:** These standards apply to the product being developed. Examples include the format for a project plan, coding standards to follow, and documentation standards.
    
- **Process Standards:** These standards define the processes that should be followed during software development. Examples include the change control process, the project plan approval process, and documentation process standards.
    

**Documentation Standards:** These standards define the organization of different types of documents as well as their format. They are very important because documents are the tangible manifestation of the software system.

- **Documentation Process Standards:** These are concerned with how documents should be developed, validated, and maintained.
    
- **Documentation Interchange Standards:** These are concerned with how documents are stored and interchanged between different documentation systems.
    
- Other documentation standards are concerned with document identification, structure, presentation, and highlighting changes.
    

**Advantages of Standards:** Standards provide a framework around which the quality assurance process may be implemented. They also provide an encapsulation of best, or at least most appropriate, practice. Furthermore, customers sometimes require a particular quality standard or level when choosing a software vendor.

**Problems with Standards:** Standards may not be seen as relevant and up-to-date by software engineers. They can involve too much bureaucratic form-filling and may be unsupported by software tools, which means tedious manual work is involved to maintain them.

### Types of Testing

Testing needs to be done at every phase of the system development lifecycle.

- **Unit Test:** Used to test each individual component, often a program, to ensure it is defect-free. This is performed before commencing integration testing.
    
- **Integration Testing:** Occurs between unit testing and system testing. It ensures that subsets of the overall system work together correctly.
    
- **System Testing:** Tests the entire system as one entity to ensure that the entire system is working correctly.
    
- **User Acceptance Testing:** Testing performed by end-users prior to accepting the delivered system. It ensures that the system fits the needs of its users.
    

### McCall Quality Model

This model defines software quality criteria across three categories: Operation, Revision, and Transition.

**Operation Criteria:**

- **Correctness:** The extent to which a program satisfies its specifications and fulfils the user's mission objectives.
    
- **Reliability:** The extent to which a program can be expected to perform its intended function with required precision.
    
- **Efficiency:** The amount of computing resources and code required by a program to perform a given function.
    
- **Integrity:** The extent to which access to software or data by unauthorized persons can be controlled.
    
- **Usability:** The effort required to learn, operate, prepare input, and interpret the output of a program.
    

**Revision Criteria:**

- **Maintainability:** The effort required to locate and fix an error in an operational program.
    
- **Testability:** The effort required to test a program to ensure that it performs its intended function.
    
- **Flexibility:** The effort required to modify an operational program.
    

**Transition Criteria:**

- **Portability:** The effort required to transfer a program from one hardware and/or software environment to another.
    
- **Reusability:** The extent to which a program, or parts thereof, can be reused in other applications.
    
- **Interoperability:** The effort required to couple one system with another.
    

### Capability Maturity Model Integration (CMMI)

**CMMI:** A model that describes the key elements of an effective software development process and an approach for software companies to move from an ad-hoc, immature process to a mature, developed process. Organizations are characterized as being at a Level from 1 to 5 based on the processes they follow.

- **Level 1 - Initial:** The software process is characterized as ad hoc, and occasionally even chaotic. Few processes are defined, and success depends on individual effort. The focus is on individual effort with no key processes.
    
- **Level 2 - Repeatable:** Basic project management processes are established to track cost, schedule, and functionality. The necessary process discipline is in place to repeat earlier successes on projects with similar applications. The focus is on project management.
    
- **Level 3 - Defined:** The software process for both management and engineering activities is documented, standardized, and integrated into all processes for the organization. All projects use an approved version of the organization's standard software process for developing and maintaining software. The focus is on the engineering process.
    
- **Level 4 - Managed:** Detailed measures of the software process and product quality are collected. Both the software process and products are quantitatively understood and controlled. The focus is on product and process quality.
    
- **Level 5 - Optimising:** Continuous process improvement is enabled by quantitative feedback from the process and from piloting innovative ideas and technologies. The focus is on continual improvement.
    

### Quality Planning

**Quality Planning:** The process of incorporating quality standards into the project design, identifying which quality standards are relevant to the project, and determining how to satisfy those standards. The outcome is a Software Quality Plan (SQP), sometimes called a Software Quality Assurance Plan (SQAP).

**Quality Plan:** A document that includes a product overview, a product plan outlining critical release dates and responsibilities, quality goals for the product with justification of critical attributes, a description of the quality assurance processes to be used, document and coding standards, and a section on risks and risk management that identifies key risks that might affect product quality.

### Quality Control and Monitoring

**Quality Control and Monitoring:** The process of monitoring specific project results to ensure that they comply with the relevant quality standards, while also identifying ways to improve overall quality. Reviews are a common technique used for verification and validation. Reviewing artifacts helps in identifying problems and seeking ways to address them earlier in the project.

Three Types of Reviews:

Technical Review: A review of artifacts performed by peers in the development team, with the author also involved. The aim is to uncover problems in an artifact and seek ways to improve it.

- **Informal Reviews:** A simple desk check or casual meeting with a colleague which aims to improve the quality of a document. No formal guidelines or procedures are followed. Their effectiveness is considerably less than formal reviews because of the lack of diversity found in a group. A checklist can improve the effectiveness of a review. They are less time and resource-consuming than formal reviews.
    
- **Formal Reviews:** A meeting with multiple stakeholders such as developers, testers, and the client. The group approach has the benefit of bringing out different perspectives. The meeting should adhere to constraints: the review team should be 3-5 members, and the meeting should last no longer than 90 minutes. A review meeting could recommend accepting the artifact without changes, accepting it with proposed changes, or rejecting it, which requires a re-review after modifications.
    
- **Walkthroughs:** A review process where the author leads a group of reviewers through the code or document. The main differences from a formal review are that the moderator is the author of the artifact, and reviewers do not need preparation. When defects are found, possible solutions are discussed.
    
- **Code Inspections / Code Review:** These are very similar to formal reviews, except that the focus is on the code.
    

**Audits:** Reviews of processes and products to determine if they conform to standards. It is a type of technical review where the authors of the artifact being audited are not involved in the audit process at all. Audits are typically performed by a team that is completely external to an organization.

- **Product audits:** To confirm that the product meets the standards.
    
- **Process audits:** To ensure that the team follows processes.
    

**Advantages of technical reviews:** They can be performed on any software artifact, unlike methods like testing which only work on executable artifacts. Earlier detection of problems leads to lower resolution costs. Reviews can find types of faults that testing may fail to find. They find the actual faults in source code, whereas testing merely indicates a fault exists somewhere. Programmers also tend to make fewer mistakes when correcting faults found during review compared to those found during testing.

**Disadvantages of technical reviews:** They can be time and resource-consuming and should be carefully planned and executed to get the desired outcomes.

**Business Reviews:** The goal is to ensure that the IT solution provides the functionality specified in the project scope and requirements document. It can include all project deliverables to ensure they are complete, provide the needed information for the next phase, and meet the standards.

**Management Reviews:** This review compares the project's actual progress against a baseline project plan. The Project Manager is responsible for presenting project progress and status. Issues are resolved, resources may be reallocated, and changes to the project course can be made if needed. It may involve reviewing if the project meets its scope, schedule, budget, and quality objectives.

### Agile Centric Software Quality Management

**Agile QA Mindset:** This mindset includes principles such as providing continuous feedback, delivering value to the customer, enabling face-to-face communication, having courage, keeping it simple, practicing continuous improvement, responding to change, self-organizing, focusing on people, and enjoying the work.

**Principles of Agile QA:** These include testing early and often with an emphasis on the "Shift Left" approach, the importance of automation, and maintaining open feedback and communication channels.

### Agile QA Methodologies

**Test Driven Development (TDD):** A software development approach that dictates that developers should first write unit tests for a new feature before writing the actual code to implement that feature. The TDD cycle involves writing a test, writing the minimal code to pass the test, running the test, and then refactoring the code.

**Acceptance Test-Driven Development (ATDD):** A software development approach where stakeholders are first engaged to collaboratively discuss acceptance criteria before any code is written. Tests are then written to evaluate these specifications, and only then is the actual code written. The cycle involves writing acceptance criteria, writing acceptance tests, implementing the code, running the tests, and refactoring.

**Behavior-Driven Development (BDD):** A software development approach that is a synthesis and refinement of practices from TDD and ATDD. It focuses on defining the behavior of software through conversation and concrete examples, writing specifications in clear and plain language. Tests are then written to evaluate these specifications before the code is implemented. The cycle includes defining behavior, writing behavior tests, writing test cases, implementing code, running tests, and refactoring.

**CI/CD for Agile QA:** Continuous Integration (CI) and Continuous Delivery/Deployment (CD) are practices that support Agile QA by automating the build, test, and release processes, enabling continuous testing throughout the development lifecycle.

**Quantitative Agile QA metrics:** There are dozens of different potential quantitative metrics that can be used, such as escaped bugs, defects per requirement, and the number of tests run over a certain duration.

## Risk Management

**Risk:** An uncertain event or condition that, if it occurs, has a positive or negative effect on the project objectives. The goal of project risk management is minimizing the impact of potential negative risks while maximizing the impact of potential positive risks.

### Risk Management Process

The process involves planning how to approach risk management activities, identifying possible risks, analyzing and assessing them, selecting response strategies, and then monitoring and controlling them.

**Plan:** The outcome of this step is a Risk Management Plan that documents the procedures for managing risks throughout a project.

Identify: This step involves identifying possible risks that have a probability greater than zero.

Characteristics of Risk:

- **Generic Risks:** Threats or opportunities common to every software project, such as staff turnover or budget pressures.
    
- **Product-specific Risks:** Threats or opportunities specific to the product, which can only be identified by people with a clear understanding of the product and technology.
    

**Kinds of Risk:**

- **Project risks:** Affect the planning of the project (e.g., budget, schedule, scope).
    
- **Product risks:** Affect the quality or performance of the outcome (e.g., design problems, implementation problems).
    
- **Business risks:** Affect the economic success of the project (e.g., no demand for the product, loss of management support).
    

**Identification Techniques:** These include pondering (individual thinking), interviewing stakeholders, brainstorming with a risk framework, using checklists from past experience, the Delphi Technique (using a group of experts), and SWOT Analysis (Strengths, Weaknesses, Opportunities, and Threats).

**Analyse and Assess (Qualitative and Quantitative):** This step identifies the relative priorities of the identified risks. Risk analysis involves identifying each risk's probability and impact, while risk assessment prioritizes risks to formulate an effective strategy. This can be done qualitatively, based on experience, or quantitatively, using mathematical techniques like Decision Tree Analysis. A common qualitative tool is the Risk Matrix, which defines the level of risk by considering probability and impact.

**Respond (Action):** This step involves selecting appropriate response strategies.

- **Strategies for threats:** Accept or Ignore the risk if the exposure is acceptable; Avoid the risk by preventing it from occurring; Mitigate the risk by reducing its probability or impact; or Transfer the burden of the risk to another party.
    
- Strategies for opportunities: Exploit the opportunity by adding work to ensure it occurs; Share ownership with a third party; Enhance the opportunity by increasing its probability and positive impact; or Accept it if the cost to exploit or enhance is not justifiable.
    
    Risk Register: A document used to log risks, their triggers, owners, responses, and required resources.
    

**Monitor and Control:** This step involves detecting the ongoing status of risks and controlling them. Triggers must be monitored. New threats and opportunities that arise must be identified, analyzed, and responded to. Risk monitoring must be part of the overall project monitoring and control. Tools for this include Risk Audits (external reviews), Risk Reviews (internal periodic reviews), and Risk status meetings.

### Risk Management in Agile

Agile risk management focuses on continuous adaptation and collaboration and is integrated inside the framework. It breaks up the risk management response into smaller components and encourages collaboration. Transparency, collaborative planning, and customer involvement are key principles. The risk level is embedded in the product and sprint backlogs. The scrum master manages risk daily by removing impediments, and the product owner manages business risk by adding risk items to the backlog. A risk register is still used to identify and mitigate risks.

**Agile Risk Management Process:**

- **Plan/Identify:** Risk Registers are documented. Risk assessment workshops are conducted by the Product Owner, and risks are added as user stories and prioritized in the Product Backlog.
    
- **Analyse/Assess:** Team members analyze, assess, and plan for these risks during sprint planning and can add new risks as they are discovered.
    
- **Respond:** Mitigation strategies are defined for risk items and are completed within a sprint.
    
- **Monitor/Control:** Product Owners receive regular updates on the risk register, and the Scrum Master monitors risks in daily stand-ups.