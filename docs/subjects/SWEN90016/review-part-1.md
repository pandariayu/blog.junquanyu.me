# Review Part 1: Agile and Project

## Agile Software Development Life Cycle (SDLC)

### Process Control

**Defined Process Control:** A process with a well-defined set of steps. Given the same inputs, a defined process should produce the same output every time based on its repeatability and predictability nature. It is great when in an environment with relatively low volatility that can be easily predicted.

**Empirical Process Control:** A process where you expect the unexpected and learn as you progress. You should expect and embrace change, and inspect and adapt using short development cycles. In this model, estimates are indicative only and may not be accurate.

### Agile Manifesto

The Agile Manifesto values individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan.

### Agile Principles

1. **Customer Satisfaction:** Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
    
2. **Embrace Change:** Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.
    
3. **Frequent Delivery:** Deliver working software frequently, from a couple of weeks to a couple of months, with a preference for shorter timeframes.
    
4. **Collaboration:** Business people and developers must work together daily throughout the project.
    
5. **Motivated Individuals:** Build projects around motivated individuals. Give them the environment and support they need and trust them to get the job done.
    
6. **Face-to-Face Communication:** The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
    
7. **Working Software:** Working software is the primary measure of progress.
    
8. **Sustainable Pace:** Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
    
9. **Technical Excellence:** Continuous attention to technical excellence and good design enhances agility.
    
10. **Simplicity:** Simplicity—the art of maximizing the amount of work not done—is essential.
    
11. **Self-Organizing Teams:** The best architectures, requirements, and designs emerge from self-organising teams.
    
12. **Continuous Improvement:** At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behaviour accordingly.
    

### Agile Frameworks

#### Kanban

**Kanban:** A framework focused on visualizing work, limiting work in progress, and maximizing efficiency. The main focus is on reducing the time taken to take a project from start to finish.

#### eXtreme Programming (XP)

**eXtreme Programming (XP):** An agile framework characterized by frequent releases in short development cycles. It is intended to improve productivity and introduce checkpoints at which new customer requirements can be adopted. A key practice within XP is Pair Programming.

#### Scrum

**Scrum:** A lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems.

**Scrum Pillars:** The three pillars of Scrum are Transparency, Inspection, and Adaptation.

**Scrum Team / Accountabilities:**

- **Scrum Master:** This role is responsible for fostering communication, protecting the team, tool maintenance, reporting, meeting facilitation, Agile coaching, team support, and removing blockers.
    
- **Product Owner:** This role is responsible for acting as a primary liaison, anticipating client needs, overseeing development stages, prioritizing needs, managing the product backlog, defining the vision, terminating a sprint if necessary, participating in the daily scrums, and evaluating product progress.
    
- **Dev Team:** The development team is characterized by self-organization and being cross-functional. It is responsible for estimating the possible release date of features.
    

**Scrum Ceremonies:**

- **Sprint Planning:** An event where the team selects and commits to user stories for the upcoming sprint. Preparation for this involves Product Backlog Refinement/Grooming, where the backlog is reviewed for relevance, completeness, and priority. The team defines a clear, achievable sprint goal, selects user stories from the product backlog based on that goal, provides story point estimates, breaks down stories into tasks, and finalizes the sprint backlog as team members select tasks.
    
- **Sprint Review:** An informal meeting where the team presents what it accomplished during the sprint, which typically takes the form of a demo of new features or underlying architecture. The whole team participates.
    
- **Sprint Retrospective:** An event attended by the Scrum Master and Dev team to periodically look at what is and is not working. The discussion often revolves around what to Start Doing, Stop Doing, and Continue Doing.
    
- **Daily Stand-ups:** A short daily meeting where only the team members, Scrum Master, and Product Owner can participate to clarify any questions about the User Stories.
    

**User Story:** A short description of a feature from the perspective of the person who needs it, typically a user of the product. The standard format is: As a [user role], I want to [goal/action], so that [reason/benefit]. Stories can be broken down from an Epic user story to a feature user story, then to a sprint user story, and finally into tasks.

**Characteristics - INVEST:** A good user story is Independent, Negotiable, Valuable, Estimable, Small, and Testable.

**Conditions of Satisfaction/Acceptance Criteria:** A high-level acceptance test that will be true after the user story is complete. Acceptance Criteria are specific for each feature and often follow the format: (Given) some context, (When) some action is carried out, (Then) a set of observable consequences should obtain.

**Scrum Artefacts:**

- **Product Backlog:** A list of epics and features in priority order. It is managed and owned by the Product Owner. The Product Goal is the commitment for the product backlog.
    
- **Sprint Backlog:** The set of User Stories and tasks that are to be undertaken within a sprint. It represents the features selected for the current iteration and is often visualized on a Kanban board. The Sprint Goal is the commitment for the sprint backlog.
    
- **Increment:** The sum of all the Product Backlog items completed during a sprint plus the value of all previous increments. It must be in a usable condition. At the end of a sprint, the increment must be "Done" according to the Scrum Team's criteria, known as the Definition of Done (DoD).
    

**Definition of Done (DoD):** The exit criteria used to determine whether a product backlog item is complete. It is a list of activities that add verifiable or demonstrable value to the product and focuses on the quality of a feature, not its functionality. The DoD is intended to be universally applicable across user stories. Its goals are to build a common understanding within the Team about Quality and Completeness, to serve as a checklist that User Stories are checked against, and to ensure the increment shipped at the end of the Sprint has high quality that is well understood by all involved. For example, a DoD item could be that all regression tests should be successful.

## Agile Estimation

**Story Points:** A relative measure of the size of a user story.

**Estimation Technique:** A method used to estimate the level of effort associated with each story in story points. Common techniques include Planning Poker and T-shirt Sizes.

### Agile Estimation Guidelines

Estimate by analogy: A guideline suggesting we base our measures on other stories. If story A is about the same size as story B, they should have the same number of story points.

Decompose a story: A guideline suggesting we decompose a story into tasks, measure the tasks, and then combine them to provide a total measure.

Use the right units: A guideline encouraging the use of a pattern-based scale, such as the Fibonacci sequence (1, 2, 3, 5, 8, 13), where measures can only be selected from the sequence.

Use group-based estimations: A guideline where the estimation is implemented by the whole team.

### Issues with Agile Estimations

Analysis Paralysis: An issue where a team spends too much time attempting to develop detailed estimates, delaying commitments until all information required to make a decision has a high level of certainty.

Cavalier approach: An issue where a team does not worry about managing uncertainty and risk at all and just starts the project with no planning. It assumes that whatever uncertainty and risk is inherent in the project will be discovered and somehow work itself out as the project succeeds. Balancing the management of uncertainty is therefore very important.

**Velocity:** An estimate of the amount of work a Scrum team can complete within a given time frame, typically a single sprint. It determines the team's capacity in story points based on the number of story points completed in a sprint. The formula is: velocity = # of team members * # of story points completed per day per member * # of days. To calculate how many sprints are needed, you sum the total number of story points and divide by the average velocity of the team per sprint.

### Agile Estimation Process

The process involves developing user stories, estimating the number of story points for each, using velocity to estimate the delivery time, measuring the actual velocity of the team during development, and using this measured velocity to re-estimate the time it will take to deliver the remaining scope.

### Burndown Chart

**Burndown Chart:** A chart used to track work completed against time. The Scrum Master updates the actual Sprint Burndown chart after every Daily Standup. There are two main types: the Release Burndown Chart, which tracks progress over an entire release, and the Sprint Burndown Chart, which tracks progress within a single sprint.

### Scope and Timeboxing

Finishes early: When a team completes its planned work before the end of the sprint, they have several options. They can pull in additional user stories if they fit, perform work outside the sprint in preparation for the next one, undertake additional work on the planned scope like more testing or review to improve quality, or perform refactoring to improve non-functional characteristics.

Cannot finish everything: If a team cannot finish all planned work, they can reduce the planned work (e.g., less testing, but still meeting the DoD and QA standards) or push user stories to a later sprint.

Changes to user stories: If there are changes to user stories in the planned sprint scope during the sprint, a reduced scope offers the same options as finishing early. An increased scope requires reducing the plan back to its original size, using the same options as when the team can't finish everything.

## Planning & Release in Agile

**The last responsible moment / Rolling Wave:** The latest point in time that a decision can be made without impacting the outcome of the overall project.

### MoSCoW Technique

A prioritization technique used to categorize requirements.

- **Must have:** Requirements labelled as "MUST" have to be included in the current delivery time box for it to be a success. If even one "MUST" requirement is not included, the project delivery should be considered a failure.
    
- **Should have:** Requirements labelled as "SHOULD" are also critical to the success of the project but are not necessary for delivery in the current time box.
    
- **Could have:** Requirements labelled as "COULD" are often seen as nice to have.
    
- **Won't have:** Requirements labelled as "WON'T" are either the least-critical, lowest-payback items, or not appropriate at that time.
    

### Release Level

**Release:** A set of product increments that is released to the customer. In bigger agile projects, there can be multiple releases. In small projects, the product backlog alone can provide enough of a project overview; the size, duration, and deliverables are easily recognized, and there is no need to synchronise or group deliverables or teams.

**Characteristics of a Release:** A release is defined by a date, a theme, and a planned feature set. It is defined at the system or program level by the Product Owner. Scope is the variable, while date and quality are not, adhering to the triple constraint. All teams must commit to the same rhythm of iterations, allowing for the discovery and management of dependencies to occur automatically during planning activities. There are fixed release dates across all teams of the program with a typical interval of two to four months.

### Plan Progressively

Planning in agile is a progressive activity. It starts with a Vision & Scope document specifying product features. The Product Backlog then specifies the Product Backlog Items (PBIs), often as user stories, which detail the "what" of a feature. These user stories must be small enough to be completed within a sprint. Finally, the Sprint Backlog specifies the tasks, detailing the "how" of the PBIs. Tasks should be small, requiring no more than one day of work.

## Scaled Agile Framework (SAFe)

**SAFe:** A popular framework for scaling Agile development to large organizations. It is based on core principles of Agile such as iterative development, continuous delivery, and empowering teams. SAFe provides a set of roles, responsibilities, and artifacts to help organizations scale Agile practices effectively across multiple teams working on large, complex products.

**SAFe Benefits:** The framework aims to improve Engagement, Productivity, Quality, and Time-To-Market.

**SAFe Levels:**

- **Essential SAFe:** The foundation of SAFe, providing the core principles and practices for agile development.
    
- **Large Solution SAFe:** For organizations that need to scale agile across multiple teams or solutions.
    
- **Portfolio SAFe:** For organizations that need to scale agile across multiple portfolios.
    
- **Full SAFe:** The most comprehensive level of SAFe, providing guidance for scaling agile across the entire organization.
    

### Essential SAFe

**Agile Release Train (ART) Roles:**

- **Release Train Engineer (RTE):** Acts as the Chief Scrum Master for the train.
    
- **Product Management:** Owns, defines, and prioritizes the Program Backlog.
    
- **System Architect:** Provides architectural guidance and technical enablement to the teams on the train.
    
- **Business Owners:** Key stakeholders on the train who ensure the value delivered by the ART meets customer and organizational needs.
    

**Team Roles:**

- **Scrum Master:** Facilitates team Scrum events, removes blockers, and supports Agile practices within the team.
    
- **Product Owner:** Owns the Team Backlog, defines and prioritizes User Stories, and aligns with Product Management.
    
- **Agile Team:** Delivers working software every iteration, breaks down Features into Stories, and estimates effort.
    

**Essential SAFe - Key Areas:**

- **Product Increment (PI) Planning:** A collaborative event where all teams in the Agile Release Train (ART) align on a shared plan.
    
- **Agile Release Train (ART):** A team of Agile Teams (50-125 people) working together to deliver value in a synchronized manner.
    
- **Dependency Management (Scrum of Scrums):** A mechanism to coordinate work and resolve dependencies across multiple teams.
    
- **Program Backlog:** Contains prioritized features that guide the work of the ART during a Program Increment (PI).
    
- **System Demonstration:** A regular event where teams demonstrate the integrated work completed during the iteration to stakeholders.
    
- **Inspect and Adapt (I&A) Workshop:** A structured event at the end of the PI to review progress, identify improvements, and plan for the next increment.
    

**Essential SAFe - Product Increment (PI) Planning:** A regular, timeboxed event where all teams in the ART plan together. Product Management decides the priority of features. Agile Teams break features into stories and estimate the effort. System Architects/Engineers guide technology decisions and help manage dependencies.

**Features:** A service or capability valuable to the user. They include both functional and non-functional aspects and represent larger functionalities valuable to users or customers. A feature includes a Benefit Hypothesis, explaining why it is worth building, and Acceptance Criteria, defining what makes it done. A feature should be delivered within a single Program Increment. During PI Planning, features are broken down into User Stories, which are then distributed across teams based on capacity, expertise, and dependencies.

**Essential SAFe - Agile Release Train (ART):** A virtual organization of about 5-12 teams (approximately 50-125 individuals) that plans, commits, and executes together. It typically consists of 4-5 iterations and repeats a cycle of defining new functionality, implementing it, conducting acceptance tests, and deploying. All teams work on the same cadence to ensure alignment and coordination, following the same sprint time. They are aligned to a common mission via a single Program Backlog and operate under architectural and UX guidance from the System Architect. The ART frequently produces valuable and evaluable System Level Solutions, which are demonstrated during the System Demo. It identifies and manages dependencies between teams for smooth delivery of value and is facilitated by the Release Train Engineer (RTE), who ensures alignment across teams.

**Essential SAFe - Dependency Management (Scrum of Scrums):** An event to manage dependencies across teams, which is crucial as teams with a common goal will depend on each other to complete features or share components. Unmanaged dependencies can lead to delays, rework, or integration issues. The purpose of the Scrum of Scrums is to coordinate between multiple Agile teams within the ART. Participants include Scrum Masters (or team representatives) from each team, and it is facilitated by the RTE. It occurs weekly or more often during critical times. Topics discussed include cross-team dependencies, risks or blockers, and progress updates. The outcome is a shared understanding, aligned priorities, and early risk mitigation.

**Essential SAFe - Program Backlog:** The single source of truth for upcoming work at the Agile Release Train level. It contains features, including their Benefit Hypothesis and Acceptance Criteria, and is owned and prioritized by Product Management. It typically spans across multiple Program Increments. Its importance lies in aligning all teams on the ART with a common set of priorities and driving PI Planning, as teams select Features from this backlog for implementation in the next Program Increment. It helps answer what to build next and what features deliver the most value to customers.

**Essential SAFe - System Demonstration:** An event where all the teams come together to demonstrate the integrated work they have completed during the Program Increment (PI). It shows how the features delivered by all the teams are integrated into a working solution. The purpose is to demonstrate the integrated system and validate the current progress of the PI. It occurs at the end of each PI (typically every 8-12 weeks). Participants include all teams within the ART, Product Management, Business Owners, RTE, and other key stakeholders. The focus is on demonstrating the value delivered by the ART and showing integrated work. The format typically includes demos of completed features, and real-time feedback from stakeholders is gathered to refine further development.

**Essential SAFe - Inspect and Adapt (I&A) Workshop:** An event held at the end of each Program Increment (PI) to reflect on the PI's progress, identify areas for improvement, and adjust the approach moving forward. The purpose is to review the PI's progress, reflect on the product, process, and people, and make adjustments to ensure the ART is aligned with business goals. It occurs at the end of every PI. Participants include all teams within the ART, Product Management, Business Owners, the RTE, and other stakeholders. The structure includes the PI System Demo, which demonstrates the fully integrated work from the ART, and a Problem Solving Workshop, which focuses on solving problems identified during the PI. The outcome is refined processes, tools, and techniques for future PIs, leading to continuous improvement of the ART and alignment with organizational goals.

### ART vs. Team Comparison

**Events:** The time cycle for an ART is 8-12 weeks (a PI), whereas for a team it is 2-3 weeks (a Sprint).

**Planning:**

- **Product Increment (PI) Planning:** An all-team event to plan which features will be completed.
    
- **Sprint Planning:** A single-team event to plan which user stories will be completed.
    

**Review:**

- **System Demonstration (SAFe):** Demonstrates the integrated system from all teams in the ART to show alignment with program goals. It occurs at the end of a PI (8-12 weeks) and covers work from all teams. The audience includes Business Owners, Product Management, RTE, and stakeholders. The focus is on high-level feedback to refine the PI's goals.
    
- **Sprint Showcase (Scrum):** Showcases the results of a single sprint, demonstrating a single team's incremental work. It occurs at the end of each sprint (2-3 weeks) and covers only that specific team's work. The audience includes the Scrum Master, Product Owner, team members, and stakeholders. The focus is on detailed feedback for a specific set of features.
    

**Retrospective:**

- **Inspect and Adapt (I&A) Workshop (SAFe):** Reflects on the entire Program Increment to make adjustments for the next PI, focusing on product and process improvements at the ART level. It happens at the end of a PI with all teams, Product Management, Business Owners, and RTE participating. It addresses systemic issues that impact the entire ART.
    
- **Sprint Retrospective (Scrum):** Reflects on the work of a single team during a single sprint to improve the team's processes and collaboration. It happens at the end of each sprint with just the Scrum Master, Product Owner, and team members. It focuses on the team's outcomes for improvement in subsequent sprints.
    

**Artifacts:**

- **Program (ART) Backlog:** Managed by Product Management, it contains features and spans multiple Program Increments.
    
- **Product (Team) Backlog:** Managed by the Product Owner, it contains user stories and spans multiple sprints.
    
- **Feature:** A service or capability that fulfills a stakeholder need. It fits within a PI, is decomposed into Stories, and represents larger functionalities with a benefit hypothesis and acceptance criteria.
    
- **User Story:** A small, testable unit of work that fits into one Iteration (Sprint) and delivers part of a Feature. It represents smaller functionalities with a description from the user's perspective and acceptance criteria. The hierarchy flows from Features down to sprint user stories and then to tasks.
    

## Project Schedule

**Project Schedule:** A document that is used and maintained throughout the project to monitor and track project progress. It contains the duration and dependencies for each task, the people and physical resources required by each task, milestones and deliverables, and the project timeline.

### Developing a Project Schedule

1. **Breakdown the task:** The first step is to break down the work into small, manageable chunks using a Work Breakdown Structure (WBS), as planning and executing large tasks is challenging. The Fishbone Diagram is a tool that can help teams systematically investigate the factors that might affect a project's outcome, supporting problem solving, visualization, team collaboration, and a focus on these factors.
    
2. **Identify interdependencies:** The second step is to identify the interdependencies between the broken-down tasks and develop a task network. Dependencies can be unconstrained or constrained, and tasks can be successors or predecessors. Dependencies are caused by a task needing the work product of another or needing resources used by another task.
    
    - **Finish-to-Start:** Predecessor must finish before Successor can start.
        
    - **Start-to-Start:** Predecessor must start before Successor can start.
        
    - **Finish-to-Finish:** Predecessor must finish before the Successor can finish.
        
    - Start-to-Finish: Predecessor must start before the Successor can finish.
        
        Task Network: A useful mechanism for depicting inter-task dependencies and determining the critical path.
        
3. **Estimate effort and time:** The third step is to estimate the effort and time allocation for each task. A common measure for estimating the effort for software is person-months.
    
    - **Putnam-Norden-Rayleigh (PNR) curve:** This provides a way to estimate the distribution of effort over the duration of a project. The curve indicates a minimum value that represents the least cost for delivery. It also indicates that the project delivery time cannot be compressed much beyond 0.75 of the nominal delivery time. The variable 'm' represents the average rate at which effort increases as the project duration deviates from its ideal duration.
        
    - **Three-Points Estimating:** A technique used in project management to estimate the duration or cost of a task, considering uncertainty and the risk of potential variation. It uses three time estimates: Optimistic (O), Pessimistic (P), and Most Likely (M) to calculate an expected time (TE​).
        
        - **Triangular Distribution:** Calculates the average of the three estimates: TE​=(O+M+P)/3.
            
        - **PERT Distribution:** Weights the most likely estimate more heavily: TE​=(O+4M+P)/6.
            
4. **Allocate resources:** The fourth step is to allocate resources for tasks and validate the effort, considering the relationship between effort, number of personnel, and time duration.
    
5. **Develop the project schedule:** The final step is to develop the schedule to answer how long the system will take to develop and how much it will cost.
    
    - **Term - Activity (Task):** Is part of a project that requires resources and time.
        
    - **Term - Milestone:** Is the completion of an activity that provides evidence of a deliverable completion or end of a phase; it is an event that takes zero time. A milestone marks a specific point along a project timeline, whereas a deliverable is a specific artifact of interest.
        
    - **Term - Free float (free slack):** Is the amount of time that a task can be delayed without causing a delay to subsequent tasks.
        
    - **Term - Total float (total slack):** Is the amount of time that a task can be delayed without delaying project completion.
        
    - **Term - Critical path:** Is the longest possible continuous path taken from the initial event to the terminal event.
        
    - **Term - Critical activity:** Is an activity that has a total float equal to zero.
        
    
    **PERT (Program Evaluation and Review Technique) charts:** An activity network that shows the dependencies among tasks and the critical path. They are used to understand project characteristics for scheduling trade-offs, perform critical path analysis, and monitor project progress and re-plan.
    

### Critical Path and Crashing

Critical Path: The path with the longest duration. Activities on the critical path have a total float of 0. A delay in any of the activities in the critical path will cause the project to delay.

Crashing the project schedule: The process of shortening the total duration of the project by shortening the critical path. This can be done by removing dependencies between activities in the critical path or by shortening the duration of activities in the critical path.

### Project Tracking and Control - Earned Value Analysis

**Earned Value Analysis (EVA):** A method used to report current and past project performance and to predict future project performance based on that performance data.

- **Planned Value (PV):** That portion of the approved cost estimate planned to be spent on the given activity during a given period.
    
- **Earned Value (EV):** The value of the work completed. Also calculated as EV=PV to date×RP (where RP is the rate of performance).
    
- **Actual Cost (AC):** The total of the costs incurred in accomplishing work on the activity in a given period.
    

**Schedule Variance Analysis:** Uses EV and PV to calculate a variance to the project schedule.

- **Schedule Variance (SV):** SV=EV−PV.
    
- **Schedule Performance Index (SPI):** SPI=EV/PV.
    

**Cost Variance Analysis:** Uses EV and AC to calculate a variance to the project budget.

- **Cost Variance (CV):** CV=EV−AC.
    
- **Cost Performance Index (CPI):** CPI=EV/AC.
    

**Forecasting Formulas:**

- **Estimate at Completion (EAC):** EAC=BAC/CPI (where BAC is Budget at Completion).
    
- **Estimated Time to Complete:** Original time estimate / SPI.