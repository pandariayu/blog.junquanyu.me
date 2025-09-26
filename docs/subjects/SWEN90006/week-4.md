## Data-Flow Analysis

Last week, you learned about control-flow analysis, which checks that your tests execute the various statements and branches in your code. However, just running a line of code isn't enough. We also need to ensure that the _data_ being computed is used correctly
上周，您了解了控制流分析，它检查您的测试是否执行了代码中的各种语句和分支。但是，仅仅运行一行代码是不够的。我们还需要确保正确使用正在计算的 _data_。

**Data-Flow Analysis** focuses on tracking the lifecycle of variables to find bugs related to how data is created, used, and destroyed.
**数据流分析**专注于跟踪变量的生命周期，以查找与数据的创建、使用和销毁方式相关的错误。

### Variable Actions

To analyze data flow, we categorize every action on a variable into one of three types:
为了分析数据流，我们将变量上的每个作分为以下三种类型之一：

- **d (define):** A value is assigned to a variable (e.g., `x = 5;` or `scanf("%d", &x);`).
- **r (reference):** The value of a variable is accessed or used (e.g., `y = x + 1;` or `if (x > 0)`).
- **u (undefine):** A variable's value becomes unknown (e.g., after `free(x)` in C).

### Dynamic Data-Flow Coverage Criteria

This type of analysis involves executing the code to satisfy certain coverage criteria related to definition-reference pairs (`d-r` pairs). The goal is to create tests that cover the paths from where a variable is defined to where it is used.这种类型的分析涉及执行代码以满足与定义-引用对（“d-r”对）相关的某些覆盖标准。目标是创建涵盖从定义变量到使用变量的路径的测试。

Here are the main criteria, from weakest to strongest:

1. **All-Defs Coverage:** For every place a variable is defined, your test suite must execute at least one path from that definition to one of its references.
   **全定义覆盖率：** 对于定义变量的每个位置，您的测试套件必须至少执行一条从该定义到其引用之一的路径。
   ![](images/Pasted%20image%2020250926150604.png)
2. **All-Uses Coverage:** For every variable definition, your test suite must execute paths to _all_ possible references of that definition.**所有用途覆盖率：** 对于每个变量定义，您的测试套件必须执行该定义的 _all_ 可能引用的路径。
   ![](images/Pasted%20image%2020250926150527.png)

3. **All-DU-Paths Coverage:** This is the strongest criterion. For every variable definition, your test suite must execute _all possible simple paths_ to all of its references.
   **All-DU-Paths 覆盖范围：** 这是最强的标准。对于每个变量定义，测试套件必须执行_all可能的简单paths_到其所有引用。
   ![](images/Pasted%20image%2020250926150512.png)

- **C-Uses (Computational):** The variable is used in a calculation (e.g., `y = x / 2`).
  **C-Uses （Computational）:** 该变量用于计算（例如，'y = x / 2'）。
- **P-Uses (Predicate):** The variable is used in a decision or condition (e.g., `if (x == 0)`).
  **P-使用（谓词）:** 变量用于决策或条件（例如，'if （x == 0）'）。

As shown in the **subsumption hierarchy**, stronger criteria (higher up the chart) technically cover everything below them. However, a stronger criterion isn't always better, as it requires more tests and higher effort to achieve.
如**包含层次结构**所示，从技术上讲，更强的标准（图表的较高位置）涵盖了它们下面的所有内容。然而，更强的标准并不总是更好，因为它需要更多的测试和更高的努力才能实现。

---

## Mutation Analysis

Mutation analysis is a powerful white-box technique used to evaluate and improve the quality of your test suite. The core idea is to ask: "If I introduce a small bug into my code, are my current tests good enough to find it?" 突变分析是一种强大的白盒技术，用于评估和提高测试套件的质量。核心思想是问：“如果我在代码中引入一个小错误，我当前的测试是否足以找到它？

### The Process

1. **Create Mutants:** The original program is modified in small, specific ways to create faulty versions called **mutants**. This is done automatically using **mutation operators** that change one small thing (e.g., replacing `low <= high` with `low < high`).
   原始程序以小的、特定的方式进行修改，以创建称为**突变体**的错误版本。这是使用**突变运算符**自动完成的，这些运算符会改变一件小事（例如，将“低<=高”替换为“低<高”）。
2. **Run Tests:** Your existing test suite is run against the original program and then against each mutant.您现有的测试套件针对原始程序运行，然后针对每个突变体运行。
3. **Kill or Survive:**
    
    - If a test case fails for a mutant (i.e., the mutant's output is different from the original's), the mutant is considered **killed**. This is good—it means your test suite is effective.
      如果突变体的测试用例失败（即突变体的输出与原始突变体的输出不同），则该突变体被视为**被杀死**。这很好，这意味着您的测试套件是有效的。
    - If all your tests pass for a mutant, the mutant has **survived**. This indicates a weakness in your test suite that needs to be improved.如果您对突变体的所有测试都通过了，则该突变体已**存活**。这表明您的测试套件中存在需要改进的弱点。

The quality of your test suite is measured by the **Mutation Score**:
Mutation Score = (# of Killed Mutants) / (Total # of Mutants - # of Equivalent Mutants)
### Challenges

- **Equivalent Mutants:** This is a major problem. An equivalent mutant is one that is syntactically different but behaves exactly the same as the original program. It's impossible to "kill" these mutants, which makes achieving a 100% mutation score very difficult.
  这是一个主要问题。等效突变体是指语法不同但行为与原始程序完全相同的突变体。“杀死”这些突变体是不可能的，这使得实现 100% 的突变分数变得非常困难。
- **High Computational Cost:** Creating and testing thousands of mutants can be very time-consuming.创建和测试数千个突变体可能非常耗时。

---

## Static Data-Flow Analysis

This is a different approach that finds potential bugs by analyzing the source code **without executing it**. Its goal is to find **anomalies**—suspicious patterns in the code that often indicate a fault. 这是一种不同的方法，它通过分析源代码**而不执行它**来发现潜在的错误。它的目标是发现**异常**——代码中通常表明存在故障的可疑模式。

The three main anomalies are based on the variable actions (`d`, `r`, `u`):

1. **`u-r` Anomaly (Undefine-Reference):** A variable is referenced _after_ it has been undefined or before it has been defined. This is a serious fault that can cause crashes. 变量在未定义之后或定义之前被引用。这是一个可能导致崩溃的严重故障。
2. **`d-d` Anomaly (Define-Define):** A variable is defined, and then defined again, with no reference in between. This is often harmless but might point to a logic error or redundant code.
   定义了一个变量，然后再次定义，中间没有引用。这通常是无害的，但可能指向逻辑错误或冗余代码。
3. **`d-u` Anomaly (Define-Undefine):** A variable is defined and then immediately undefined without ever being used. This indicates useless code.
   定义了一个变量，然后立即取消定义，而从未被使用过。这表示无用的代码。

Static analysis is fast and automatic, but it cannot verify if a program is functionally correct and must be combined with other testing methods.
静态分析是快速和自动的，但它无法验证程序在功能上是否正确，必须与其他测试方法相结合。