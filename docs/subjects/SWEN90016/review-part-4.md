# Review Part 4: Configuration, Formal SDLCs, and Project Fundamentals

## Configuration Management

**Software Configuration:** The total of all the artifacts, the current state of all the artifacts, and the dependencies between them. As a large number of different types of artifacts are generated with dependencies between them, making a change to one artifact can impact all its dependencies, potentially leading to inconsistent states. The aim of configuration management is to manage change properly without losing overall consistency through establishing processes, setting up repositories, and using other appropriate tools and techniques.

### Configuration Management Processes

The aims of configuration management processes are to identify all items that collectively will make up the configuration, to manage changes to one or more of these items so that the collection remains consistent, to manage different versions of the product, and to assure software quality as the configuration evolves over time.

The tasks involved are Identification, Version Control, Change Control, Configuration Auditing, and Configuration Reporting.

Identification: The process where the configuration items necessary for the project are identified.

Configuration items: The set of artifacts that require configuration management. These can be basic, aggregate, or derived. A typical list would include the requirements specification, user stories, and source code modules.

**Version Control:** The processes and tools chosen to manage the different versions of configuration items as they are developed. The requirements for a version control system include the ability to track change history, provide rollback capability, support collaboration, enable reproducibility, and manage releases by tagging and baselining known-good versions.

- **Version:** An instance of a model, document, code, or other configuration item which is functionally distinct in some way from other system instances.
    
- **Variant:** An instance of a system which is functionally identical but non-functionally distinct from other instances of a system.
    
- Release: An instance of a system which is distributed to users outside of the development team.
    
    Derivation History: A record of changes applied to a configuration object, which often uses version numbering to track versions. This history records the change made, the rationale for the change, who made it, and when it was implemented.
    

**Change Control:** A process governed by a Change Management Plan, which is part of an overall configuration management plan to specifically control changes to the configuration. Changes must be made in a way that allows everyone on the project team to understand what changes need to be made, what they need to do to affect the change, why the change is being made, and how it will impact them. The process involves three steps:

1. **Initiate the change:** This involves understanding why the change is being made, what information will be needed to evaluate it, and how it will be evaluated.
    
2. **Evaluate the change:** This step assesses how the change will affect the configuration, which artifacts need to change, the benefits and costs of the change, and who will be impacted.
    
3. **Making the change:** This step determines who will implement the change, how it will be managed, how others will understand the change and be notified, and how they will know when it is completed.
    

**Baseline:** An artifact that is stable. It has been formally reviewed and agreed upon and is now ready for future development. It can only be changed through a formal change management procedure.

**Configuration Auditing:** The process of assuring that what is in the repository is actually consistent and that all of the changes have been made properly.

**Configuration Reporting:** The process of keeping track of the status of the repository. It involves reviewing the configuration objects for consistency with other configuration objects to identify any omissions or to look for potential side effects. The most common aim is to report on the status of the configuration items of interest and the baselines that have been achieved.

## Formal Software Development Life Cycles (SDLC)

### Waterfall Model

The Waterfall model is a sequential development process. Its phases include Requirements, where you find out what stakeholders want; Analysis, where you figure out exactly what this means and create a Software Requirements Specification; Design, where you determine how to build the product; Implementation, where you code and integrate the product; Development, which includes maintenance to repair or enhance the system; and Retirement, where the product is removed from service. A more realistic version of the waterfall model includes feedback loops, allowing for changed requirements to be addressed.

Advantages: The model is simple and easy to understand and use. It is easy to manage due to its rigidity, with phases processed and completed one at a time. Documentation is available at the end of each phase. It works well for projects where requirements are very well understood and remain stable.

Disadvantages: It is difficult to accommodate change after the process is underway. One phase must be completed before moving on to the next. Unclear requirements can lead to confusion. Client approval happens in the final stage. It is also difficult to integrate risk management due to uncertainty.

### Incremental SDLC Model

The Incremental model involves breaking down the project into multiple increments, each of which goes through the phases of analysis, design, implementation, testing, and deployment. Each increment delivers an operational piece of the product.

Advantages: This model allows for the development of major requirements first. The risk of software development is spread across multiple increments, and lessons learned from each increment can complement future ones. Each release delivers an operational increment, leading to faster initial product delivery and a reduced risk of failure.

Disadvantages: It requires good planning and design. Designing the increments may not be straightforward. It also requires an early definition of requirements to identify the increments, and the model is rigid, not allowing for iterations within each "mini waterfall" increment.

### Prototyping

The Prototyping model involves a cycle of building a rapid prototype, having it reviewed by stakeholders, and then refining and iterating on the prototype based on feedback.

### Spiral Model

The Spiral model is a risk-driven process model. Each loop of the spiral represents a phase of the software process and begins with determining objectives, alternatives, and constraints. It then proceeds to evaluate alternatives and identify and mitigate risks through risk analysis and prototyping. After this, the next-level product is developed and verified through activities like design, coding, and testing, before the next phase is planned.

**Characteristics where "Formal" Models make sense:** Formal models are suitable for projects where the customer has a very clear view of what they want and where there will be little or no change to requirements. They are also appropriate when software requirements are clearly defined and documented, when development technologies and tools are well-known, and for large-scale applications and systems development.

**Which SDLC is better? Formal or Agile:** There is no one right answer. The decision can be assisted by asking several questions: How stable are the requirements? Do the end-users need to collaborate? Is the timeline aggressive or conservative? What is the size of the project? Where are the project teams located? What are the critical resources?

## Ethics

Ethics: The principles and values used by an individual to govern his or her actions and decisions.

Organisational ethics: These express the values of an organization to its employees and/or other entities, irrespective of governmental and/or regulatory laws. Ethics can be considered at the micro-level (individual issues) and macro-level (societal issues).

### Australian Computer Society Code of Ethics

1. **The Primacy of Public Interest:** You will place the interests of the public above those of personal, business, or sectional interests.
    
2. **The Enhancement of Quality of Life:** You will strive to enhance the quality of life of those affected by your work.
    
3. **Honesty:** You will be honest in your representation of skills, knowledge, services, and products.
    
4. **Competence:** You will work competently and diligently for your stakeholders.
    
5. **Professional Development:** You will enhance your own professional development, and that of your colleagues and staff.
    
6. **Professionalism:** You will enhance the integrity of the ACS and the respect of its members for each other.
    

### IEEE: Software Engineering Code of Ethics, Professional Practice

This code outlines principles related to Public, Client and Employer, Product, Judgment, Management, Profession, Colleagues, and Self.

## Introduction to Projects

Process: A systematic series of actions or steps taken to achieve a specific goal. It involves planning, executing,monitoring, and controlling all aspects of a project.

Product: The result or output of the process. For a software project, it includes the software system and associated artifacts. We emphasize process because history shows that we cannot work in a straightforward way directly from requirements to the product with a high likelihood of success. A robust process is critical for delivering successful projects.

**What is a project?:** A temporary endeavor to create a unique product, service, or outcome. Key characteristics include having an objective, introducing change, being temporary, being cross-functional, dealing with the unknown, being unique, and varying in size. Organizations use projects to effectively and efficiently manage their limited resources and to ensure everyone has clarity on what needs to be done and when.

**Project Management:** The planning, delegating, monitoring, and controlling of all aspects of a project, and motivating those involved to achieve the project objectives within the expected targets for time, costs, quality, scope, benefits, and risks.

**Project Manager Skills/Attributes:** Project managers are highly skilled knowledge workers and change agents who take accountability and make project goals their own. They use their skills to inspire a sense of shared purpose. Core attributes include working well under pressure, being comfortable with change and complexity, having the right people skills, being able to adapt and resolve issues, being effective communicators, being action-oriented, and having command and control.

**Project Manager Key Activities:** Key activities include Planning, Organising, Leading, and Controlling.

**Project Success/Fail Factors:** Key success factors include executive sponsorship, emotional maturity, user involvement, optimization of requirements, skilled resources, standard architecture, agile processes, modest execution, project management expertise, and clear business objectives.

**Business Case:** The purpose of the Business Case is to establish mechanisms to judge whether the project is (and remains) desirable, viable, and achievable as a means to support decision-making in its initial and continued investment. It provides a factual base for key decision-makers, demonstrates how the project adds value, and has a set of pre-defined standard organizational characteristics (costs, benefits, risk, etc.). It is a living document that should be reviewed and signed off at key stages.

### Roles and Responsibilities

- **Corporate:** Provides the mandate or go-ahead, holds Senior Users accountable for benefits realization, and is responsible for conducting post-project benefits validation.
    
- **Executive / Sponsor:** Owns the Business Case and is responsible for reviewing the benefits throughout the project.
    
- **Senior Users:** Responsible for accepting the benefits and delivering them, ensuring the delivered products are to the appropriate quality standard, and providing on-going actual versus forecasted benefit realization data.
    
- **Project Manager:** Prepares the Business Case, conducts risk assessment and impact analysis, and assesses and updates the Business Case at each defined stage.
    
- **Project Assurance / QA:** Assists in developing the Business Case, ensures value for money and that risks are continuously managed, and monitors and validates changes to the Business Case.
    
- **Project Support:** Responsible for capturing data, preparing management reports, and acting as a key support point for all project stakeholders regarding schedules, cost analysis, minutes, and actions.
    

### Investment Techniques and Financial Models

Return On Investment (ROI): Calculated as (total discounted benefits - total discounted costs) / total discounted costs. A higher ROI is better.

Net Present Value (NPV): A method of calculating the expected net monetary gain or loss from an investment by discounting all future costs and benefits to the present time. Projects with a positive NPV should be considered, and generally, the higher the NPV, the more favorable a project is.

Payback period: The amount of time it takes for a project's accrued benefits to surpass its accrued costs, or how much time an investment takes to recover its initial cost.

**Project Estimation Rough Order of Magnitude (ROM):** An estimation technique where the margin for error is high in the initial project definition phases and narrows as the project progresses through requirements development, architecture, and design.

**Project Charter:** A document that typically includes the project purpose, objectives and scope, major deliverables, an overview, schedule, personnel and stakeholders with their roles and responsibilities, and risk management information including assumptions and risks.