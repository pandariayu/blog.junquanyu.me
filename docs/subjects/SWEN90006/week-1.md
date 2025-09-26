# Week 1: Introduction to software testing
## What is Software Testing

Software testing is the process of evaluating a software system
:软件测试是评估软件系统的过程：

- It can be seen as a process to **build confidence** that a program does what it's supposed to 
  它可以看作是一个**建立信心**的过程，即程序会做它应该做的事情。
- A more critical view is that it's the process of running a program with the specific **intent of finding errors**.一个更关键的观点是，它是运行一个程序的过程，其特定目的是查找错误。
- The official IEEE standard defines it as operating a system under specified conditions to observe its results and evaluate some aspect of it.
  官方 IEEE 标准将其定义为在指定条件下运行系统以观察其结果并评估其某些方面。

> Testing isn't just about confirming that the software works; it's an active investigation to find where it _doesn't_ work.
> 测试不仅仅是确认软件是否有效;这是一项积极的调查，以找出它在哪里不起作用

## Anatomy of Test Case

A **test case** is the smallest unit of testing. It's a specific set of actions performed on the system to see if it behaves as expected. **测试用例**是最小的测试单位。它是在系统上执行的一组特定作，以查看其行为是否按预期进行。
![](images/Pasted%20image%2020250926131910.png)
As the diagram on slide 6 shows, every test case is composed of three essential parts:

1. **Test Input (i):** The data or action you provide to the system.您提供给系统的数据或操作。 For a calculator, this would be a sequence of button presses like "5", "+", "3", "=".
2. **Precondition (c):** The state of the system _before_ the test input is executed. For instance, a precondition for a calculator might be that the current value displayed is '0'.执行测试输入之前的系统状态。例如，计算器的先决条件可能是显示的当前值为“0”。
3. **Expected Output (o'):** The specific outcome or behavior you expect from the system after the input is provided. For the input "5 + 3 =", the expected output is "8".提供输入后，您期望从系统获得的特定结果或行为。对于输入“5 + 3 =”，预期输出为“8”。

When the **actual output (o)** doesn't match the **expected output (o')**, you've found a bug!

## Faults vs. Errors vs. Failures

These terms are often used interchangeably, but they have precise meanings in software testing:

- **Fault:** This is the root cause of the problem—the actual mistake in the code. Think of it as a typo in a recipe. 这是问题的根本原因——代码中的实际错误。可以将其视为食谱中的拼写错误。
- **Error:** This is an incorrect internal state within the program caused by a fault. Following the recipe analogy, this is like adding the wrong amount of an ingredient because of the typo. The mistake has happened, but the final dish isn't ruined yet.这是程序中由故障引起的不正确的内部状态。按照食谱类比，这就像因为拼写错误而添加了错误数量的成分。错误已经发生，但最后一道菜还没有毁掉。 
- **Failure:** This is the observable, external incorrect behavior of the software. This is when you taste the dish and realize it's too salty. The fault led to an error, which ultimately caused a failure. 这是软件可观察到的外部错误行为。这时你尝了这道菜，发现它太咸了。故障导致错误，最终导致故障。

## The Tester's Mindset

### The Purpose of Testing

You can't prove a program is 100% bug-free. As computer scientist Edsger W. Dijkstra famously said 您无法证明程序 100% 没有错误。正如计算机科学家 Edsger W. Dijkstra 所说，

> **"Program testing can be used to show the presence of bugs, but never to show their absence!"**.**程序测试可以用来显示错误的存在，但永远不能显示错误的不存在**.

Therefore, the goal of testing is **not to prove correctness**. Instead, your goal should be to **find faults**. If you try to prove the code is correct, you will subconsciously design tests that are likely to pass, and you will miss bugs.
因此，测试的目标是**不证明正确性**。相反，你的目标应该是**找缺点**。如果你试图证明代码是正确的，你会下意识地设计出可能通过的测试，并且会错过错误。

### What is a "Successful" Test?

Based on this mindset, **a successful test case is one that finds a bug (i.e., it fails)**. A test that passes doesn't improve the quality of the software; it only confirms what we thought was already true. A failing test, however, exposes a fault that can then be fixed, directly improving the software's quality.
基于这种心态，**成功的测试用例是发现错误（即失败）**。通过的测试不会提高软件的质量;它只是证实了我们认为已经是真实的事情。然而，失败的测试会暴露出可以修复的故障，从而直接提高软件的质量。

## Core Testing Principles

### Principle 1: Define Expected Output First

A test case must include a precise definition of the expected result **before** you run it. Why? Because this keeps the evaluation objective. If you look at the output first and then decide if it's correct, you might rationalize an incorrect result ("Oh, I guess it's supposed to do that").
测试用例必须在运行之前包含预期结果的精确定义。为什么？因为这保持了评估目标。如果您先查看输出，然后确定它是否正确，您可能会合理化不正确的结果（“哦，我想它应该这样做”）。

Defining a wrong expected output can lead to two major problems
定义错误的预期输出可能会导致两个主要问题：

- **False Negative:** The test passes, but the expected output was wrong, so a real fault is missed.
  测试通过，但预期输出错误，因此错过了真正的故障。
- **False Positive:** The test fails, but only because your expectation was wrong, not because the software is broken.
  测试失败，但只是因为您的期望错误，而不是因为软件损坏。

### Principle 2: Don't Test Your Own Code (Exclusively)

A programmer should avoid being the _only_ person to test their own code. This is because:
程序员应该避免成为测试自己代码的唯一人。这是因为：

- **Blind Spots:** You are likely to repeat the same logical errors and misunderstandings in your tests that you made when writing the code.
  您可能会在测试中重复编写代码时相同的逻辑错误和误解。
- **Psychological Conflict:** Programming is a creative, **constructive** process. Testing is an attempt to break things, which is a **destructive** process. It's difficult for the human mind to switch effectively between these two opposing goals.
  编程是一个创造性的、**建设性的**过程。测试是一种破坏事物的尝试，这是一个**破坏性**的过程。人类的思维很难在这两个对立的目标之间有效切换。

### Principle 8: Bugs Cluster Together

The probability of finding more faults in a section of code is proportional to the number of faults you've already found there. This might seem counter-intuitive, but experience shows that errors tend to "clump" in complex or poorly written modules. This means it's a smart strategy to focus more testing effort on the parts of the system that are already known to be "fault-prone".
在代码部分中发现更多错误的概率与您已经在那里发现的错误数量成正比。这似乎有悖常理，但经验表明，错误往往会“聚集”在复杂或编写不当的模块中。这意味着将更多的测试工作集中在已知“容易出现故障”的系统部分是一种明智的策略。