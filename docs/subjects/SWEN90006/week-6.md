# Week 6: Test oracles; and testing & integration
## Test Oracles: The Judge of Your Tests

Every test case needs a way to decide if the program's actual output is correct. A **test oracle** is the mechanism—whether it's a program, a process, or a set of data—that makes this pass/fail decision.每个测试用例都需要一种方法来确定程序的实际输出是否正确。**测试预言机**是做出通过/失败决策的机制——无论是程序、进程还是一组数据。

There are two main categories of oracles:

- **Active Oracle**: This type of oracle actively computes the full, expected output for a given test input. You then compare the program's actual output directly to this expected output.
  **主动预言机**：这种类型的预言机主动计算给定测试输入的完整预期输出。然后，将程序的实际输出直接与此预期输出进行比较。
- **Passive Oracle**: Instead of computing the exact output, a passive oracle checks whether the actual output satisfies a certain property or predicate. For example, it doesn't need to know _what_ the sorted list should be, only that the output list _is sorted_.
  **被动预言机**：被动预言机不是计算确切的输出，而是检查实际输出是否满足某个属性或谓词。例如，它不需要知道排序列表应该是什么，只需要知道输出列表_is sorted_。

Generally, **passive oracles are preferred** because they are easier to implement and are better at handling cases where multiple different outputs could be correct (non-determinism).通常，**被动预言机是首选**，因为它们更容易实现，并且更擅长处理多个不同输出可能是正确的情况（非确定性）。

### Types of Test Oracles

The lecture outlines several practical types of oracles:

- **The Golden Program**: Uses a trusted previous version of the software as the oracle.
  **黄金计划**：使用可信的软件早期版本作为预言机。
- **Alternate Implementations**: Uses a second, often simpler, implementation of the same logic to check the results
  **替代实现**：使用相同逻辑的第二个（通常更简单的）实现来检查结果
- **Human Oracles**: A person manually checks the results against the requirements. This is slow and expensive.
  **人类预言机**：一个人根据要求手动检查结果。这既缓慢又昂贵。
- **Heuristic Oracles**: Uses rules of thumb or approximations to check if an output is "reasonable." For example, a GPS routing algorithm's path should not be shorter than the straight-line distance. These oracles can sometimes produce false alarms.
  **启发式预言机**：使用经验法则或近似值来检查输出是否“合理”。例如，GPS 路由算法的路径不应短于直线距离。这些预言机有时会产生误报。
- **Metamorphic Oracles**: A very powerful type that doesn't check a single output but rather the **relationship between the outputs of multiple test runs**. For example, a metamorphic test for a sorting function would be: "If I sort a list, and then I sort a shuffled version of the same list, the two outputs must be identical."
  **Metamorphic Oracles**：一种非常强大的类型，它不检查单个输出，而是检查**多个测试运行的输出之间的关系**。例如，排序函数的变质测试是：“如果我对一个列表进行排序，然后对同一列表的打乱版本进行排序，则两个输出必须相同。
	- - **示例 1（排序）：** 关系是，如果您对列表进行排序，然后对同一列表的打乱（排列）版本进行排序，则两个排序的输出必须相同 。
	-   **示例 2（最短路径）：** 如果找到从 A 到 B 的最短路径，然后找到位于第一条路径上的两个点 C 和 D 之间的最短路径，则第二条路径必须是第一条路径的子路径

---

## Property-Based Testing (PBT)

Traditional testing relies on hand-picked examples. The problem is, it's hard to know which examples to choose and if you've chosen enough.传统测试依赖于精心挑选的示例。问题是，很难知道该选择哪些示例以及您是否选择了足够的示例。

**Property-Based Testing (PBT)** is a modern approach that flips this around. Instead of writing tests for specific inputs, **you define a general property that your code must always satisfy**, and then you let a tool automatically generate hundreds or thousands of random inputs to try and prove that property wrong. **基于属性的测试 （PBT）** 是一种扭转这一局面的现代方法。您无需为特定输入编写测试，而是定义代码必须始终满足的通用属性，然后让工具自动生成数百或数千个随机输入来尝试证明该属性是错误的。

In PBT, the tester writes:

- **Generators** to create random, valid inputs. **生成器** 用于创建随机、有效的输入。
- A **Property** that must hold true for any valid input. This property acts as a passive oracle.
  对于任何有效输入，必须为true的**属性**。此属性充当被动预言机。

For example, for a `sort()` function, a property would be: "for any list of integers `L`, the output of `sort(L)` must be a permutation of `L` and must be in ascending order." PBT then generates many different lists 例如，对于 'sort（）' 函数，属性将是：“对于任何整数 'L' 列表，'sort（L）' 的输出必须是 'L' 的排列，并且必须按升序排列。然后，PBT 生成许多不同的列表

`L` and checks if this property holds for every single one. 
'L' 并检查此属性是否适用于每个属性。

---

## Testing and Integration

Software is built from many different components or modules that must work together. **Integration testing** is the phase where you combine these individual units and test them as a group to find errors in their interactions. 软件由许多必须协同工作的不同组件或模块构建而成。**集成测试** 是将这些单独的单元组合起来并将它们作为一个组进行测试以发现其交互中的错误的阶段。

### Test Stubs and Drivers

When integrating, you often don't have all the components ready at once. To solve this, we use test doubles 集成时，您通常不会立即准备好所有组件。为了解决这个问题，我们使用测试替身：

- **Stubs**: A "fake" version of a module that is _called by_ the component you're testing. It provides canned responses so the calling module can be tested in isolation. _called by_ 您正在测试的组件的模块的“假”版本。它提供预设响应，因此可以单独测试调用模块。
- **Drivers**: A "fake" version of a module that _calls_ the component you're testing. It's a temporary harness to feed inputs to the module being tested when its real caller isn't available yet. 模块的“假”版本，它调用您正在测试的组件。它是一个临时工具，用于在真正的调用者尚不可用时向正在测试的模块提供输入。：

| 测试场景                 | **被测试的模块** | **缺失的模块**     | **需要创建的测试替身**                            |
| -------------------- | ---------- | ------------- | ---------------------------------------- |
| 1. 测试**前端**，后端API还没好 | **前端界面**   | 后端 API (被调用者) | **Stub (存根)** - 一个假的、返回固定数据的API服务器。      |
| 2. 测试**后端API**，前端还没好 | **后端 API** | 前端界面 (调用者)    | **Driver (驱动程序)** - 一个模拟前端、主动调用API的测试脚本。 |

### Integration Strategies

There are several strategies for how you combine modules:

- **Big Bang**: Wait for all modules to be ready, then integrate and test them all at once. This is simple to plan but makes it very hard to find the root cause of a bug when a test fails.
  等待所有模块准备就绪，然后一次性集成和测试它们。这很容易计划，但当测试失败时很难找到错误的根本原因。
- **Top-Down**: Start by testing the top-level modules of the system, using **stubs** to simulate the lower-level modules they depend on.
  首先测试系统的顶级模块，使用**Stubs**来模拟它们所依赖的较低级别模块。
- **Bottom-Up**: Start by testing the lowest-level modules, using **drivers** to simulate the higher-level modules that call them. 
  首先测试最低级别的模块，使用 **Driver** 来模拟调用它们的更高级别的模块。
- **Mixed**: A hybrid approach that combines top-down and bottom-up strategies to balance the need for stubs and drivers. 
  一种混合方法，结合了自上而下和自下而上的策略，以平衡对存根和驱动程序的需求。

Finally, after any change or new integration, it's crucial to perform **regression testing**, which means re-running existing tests to make sure the new code hasn't broken anything that used to work. 
最后，在任何更改或新集成之后，执行**回归测试**至关重要，这意味着重新运行现有测试以确保新代码没有破坏任何过去有效的内容。