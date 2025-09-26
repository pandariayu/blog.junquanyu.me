# Week 5: Module and object-oriented testing
## Module Testing & The Challenge of State

So far, you've mostly looked at testing single functions. This lecture moves up a level to **modules**, which are collections of related functions, methods, and variables that work together. Think of a class in an object-oriented language. 到目前为止，您主要研究了测试单个函数。本讲座将上一个级别升级到 **模块**，它们是协同工作的相关函数、方法和变量的集合。想想面向对象语言中的类。

The key challenge with modules is that they often have an internal, **hidden state**. The correctness of a method call can depend entirely on the state of the module _before_ the call was made. This introduces two major problems for testing: 模块的主要挑战是它们通常具有内部的**隐藏状态**。方法调用的正确性可能完全取决于调用之前模块的状态。这给测试带来了两个主要问题：

1. **Low Controllability**: It can be difficult to get the module into the specific state you need for a test. For example, in `BankAccount` class, you can't just set the balance to `-$400`; you have to perform a sequence of deposits and withdrawals to get it there. 将模块置于测试所需的特定状态可能很困难。例如，在“BankAccount”类中，您不能只将余额设置为“-$400”;您必须执行一系列存款和取款才能到达那里。
2. **Low Observability**: It can be hard to see the internal state of the module to verify if a test passed. If the`BankAccount` methods all return `void`, how do you check what the balance is after a withdrawal? 可能很难看到模块的内部状态来验证测试是否通过。如果“BankAccount”方法都返回“void”，您如何查看提款后的余额是多少？

These two issues define the **testability** of a program: how easy it is to control its state and observe its behavior. 这两个问题定义了程序的**可测试性**：控制其状态和观察其行为的难易程度。

---

### Intrusive vs. Non-Intrusive Testing

To deal with low observability, you might need to add code specifically for testing, like a `getBalance()` method. This leads to different testing approaches: 为了处理低可观测性，您可能需要添加专门用于测试的代码，例如 'getBalance（）' 方法。这导致了不同的测试方法：

- **Non-Intrusive Testing**: You can test the module effectively without changing its source code.
  **非侵入式测试**：您可以在不更改其源代码的情况下有效地测试模块。
- **Intrusive Testing**: You must change the production code to make it testable, for example, by changing a `private` field to `public`. This should be avoided as you are no longer testing the _real_ code.
  **侵入式测试**：您必须更改生产代码以使其可测试，例如，通过将“私有”字段更改为“公共”。应避免这种情况，因为您不再测试 _real_ 代码。
- **Semi-Intrusive Testing**: A compromise where you slightly relax encapsulation just for testing, like changing a field from `private` to `protected` so a special test-only subclass can access it.**半侵入式测试**：一种折衷方案，仅为了测试而稍微放宽封装，例如将字段从“private”更改为“protected”，以便特殊的仅测试子类可以访问它。

---

## Using Finite State Machines (FSMs) for Testing

A great way to manage and test stateful modules is to model them as a **Finite State Machine (FSM)**. An FSM makes a system's behavior more predictable by defining:管理和测试有状态模块的一个好方法是将它们建模为**有限状态机 （FSM）**。FSM 通过定义以下内容使系统的行为更可预测：
![](images/Pasted%20image%2020250926230114.png)
- **States**: A set of distinct conditions the module can be in. These are identified by applying equivalence partitioning to the module's internal variables (e.g., for the bank account, states are based on the `balance`: `b > 0`, `b = 0`, `-490 < b < 0`, etc.).
  模块可能处于的一组不同条件。这些是通过对模块的内部变量应用等效分区来识别的（例如，对于银行账户，状态基于“余额”：“b > 0”、“b = 0”、“-490 < b < 0”等）。
- **Transitions**: The operations (method calls) that cause the module to move from one state to another. 导致模块从一种状态移动到另一种状态的行为（方法调用）。

Once you have an FSM, you can apply coverage criteria similar to what you did for control-flow graphs: 拥有 FSM 后，您可以应用与控制流图类似的覆盖率标准：

- **State Coverage**: Write tests that visit every state in the FSM at least once.
  **状态覆盖范围**：编写至少访问 FSM 每个状态一次的测试。
- **Transition (Arc) Coverage**: Write tests that execute every possible transition between states at least once.
  **转换 （Arc） 覆盖率**：编写测试，至少执行一次状态之间每个可能的转换。
- **Path Coverage**: Write tests to cover paths through the FSM. Since FSMs often have loops, full path coverage is usually infeasible, so the "0-1-Many" rule is used to test loops a limited number of times.
  **路径覆盖**：编写测试以覆盖通过 FSM 的路径。由于 FSM 通常具有循环，因此全路径覆盖通常是不可行的，因此“0-1-多”规则用于测试有限次数的循环。

---

## Testing Object-Oriented (OOP) Programs

Testing OOP code can be viewed as a form of module testing, where each class is a module. However, core OOP features like inheritance and dynamic binding introduce unique challenges.
测试 OOP 代码可以被视为模块测试的一种形式，其中每个类都是一个模块。然而，继承和动态绑定等核心 OOP 功能带来了独特的挑战。
### OOP Testing Challenges

- **Encapsulation**: Hiding internal state is the primary cause of low observability. Protected or private fields can't be directly inspected by a test.
  隐藏内部状态是可观测性低的主要原因。受保护或专用字段无法通过测试直接检查。
- **Inheritance & Overriding**: A subclass can change the behavior of an inherited method. This means a method call `p.validMove()` can behave completely differently depending on whether `p` is a `King` or a `Rook`. 
  子类可以更改继承方法的行为。这意味着调用“p.validMove（）”的方法可以表现得完全不同，具体取决于“p”是“King”还是“Rook”。
- **Dynamic Binding**: The specific version of a method that gets called is determined at runtime, which can create many possible execution paths from a single line of code.
  **动态绑定**：调用的方法的特定版本在运行时确定，这可以从单行代码创建许多可能的执行路径。

> You **must re-run tests from a parent class on its subclasses**. A change in a subclass might seem isolated, but it can cause subtle interactions that break the inherited, unchanged methods.>
>  **必须从父类的子类重新运行测试**。子类中的更改可能看起来是孤立的，但它可能会导致细微的交互，从而破坏继承的、未更改的方法。

### OOP Testing Strategies

To manage testing in the presence of inheritance, a few strategies can be used:

- **Flattened Re-Testing**: A simple but brute-force approach. You re-run the _entire_ parent test suite on every single subclass. This is safe but can lead to a massive number of redundant or irrelevant tests.
  **扁平化重新测试**：一种简单但暴力破解的方法。在每个子类上重新运行 _entire_ 父测试套件。这是安全的，但可能会导致大量冗余或不相关的测试。
- **Incremental Re-Testing**: A more efficient strategy. You only test the _new or overridden_ methods in the subclass. This is focused but risks missing subtle interaction bugs between new and inherited code.
  **增量重新测试**：更有效的策略。您只测试子类中的_new或overridden_方法。这是重点的，但可能会遗漏新代码和继承代码之间的细微交互错误。
- **Binding Analysis**: A static analysis technique that determines which specific subclass methods can actually be called from a certain point in the code. This helps eliminate impossible scenarios and reduces the number of required tests.
  **绑定分析**：一种静态分析技术，用于确定哪些特定的子类方法实际上可以从代码中的某个点调用。这有助于消除不可能的情况并减少所需测试的数量。