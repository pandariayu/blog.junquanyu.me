---
sticker: lucide//save
---
# Java

## Java Thread

## Atomic Operation, Interference, Race Condition

- **Atomic event** 指一次不可再分割的读/写/测试,这些操作是不可被中断的，要么执行，要么不执行.

　　- `x=10`是直接将数值10赋值给x，也就是说线程执行这个语句的会直接将数值10写入到工作内存中。
　　- `y=x`实际上包含2个操作，它先要去读取x的值，再将x的值写入工作内存，虽然读取x的值以及 将x的值写入工作内存 这2个操作都是原子性操作，但是合起来就不是原子性操作了。
　　- 同样的，`x++`和 `x = x+1`包括3个操作：读取x的值，进行加1操作，写入新的值。所以上面4个语句只有语句1的操作具备原子性。

- 当多个线程在非原子区读-改-写共享数据，若缺少同步，将产生 **race condition**，表现为 **interference**（结果依时间序列不同而不同）。

## Mutual Exclusion

### `synchronized` 

- **方法级**：在方法签名前加 `synchronized`，线程进入前必须拿到monitor lock
- **块级**：`synchronized(obj) { … }`，可对任一对象加锁，实现细粒度控制
- `synchronized` 保证**Visibility**与**Mutual Exclusion**

### `volatile` 

- 声明共享变量为 `volatile`，禁止 JVM 将其值缓存在寄存器或 CPU cache，需要每次从主内存读取，保证**可见性**但不保证**原子性**。

```java
public class Test {

    public volatile int inc = 0;
    public void increase() {
        inc++;
    }
    
    public static void main(String[] args) {
        final Test test = new Test();
        for(int i=0;i<10;i++){
            new Thread(){
                public void run() {
                    for (int j= 0;j< 1000 ;j++)
                        test.increase();
                };
            }.start();
        }
        while(Thread.activeCount() > 1) //保证前面的线程都执行完`
            Thread.yield();
        System.out.println(test.inc);
    }

}
```

假如某个时刻变量inc的值为10，

线程1对变量进行自增操作，线程1先读取了变量inc的原始值，然后线程1被阻塞了；

然后线程2对变量进行自增操作，线程2也去读取变量inc的原始值，**由于线程1只是对变量inc进行读取操作，而没有对变量进行修改操作**，所以不会导致线程2的工作内存中缓存变量inc的缓存行无效，所以线程2会直接去主存读取inc的值，发现inc的值时10，然后进行加1操作，并把11写入工作内存，最后写入主存。

然后线程1接着进行加1操作，由于已经读取了inc的值，注意此时在线程1的工作内存中inc的值仍然为10，所以线程1对inc进行加1操作后inc的值为11，然后将11写入工作内存，最后写入主存。那么两个线程分别进行了一次自增操作后，inc只增加了1。

## Wait-Notify

- 每个对象自带一个 **monitor**（锁 + **wait set**）。
- 线程在同步块/方法内可调用 `wait()` 释放锁并进入对象的 wait set；
- 其他线程更新状态后调用 `notify()` 唤醒单个等待线程或 `notifyAll()` 唤醒全部。
- 必须用 `while (条件不满足) wait();` 包装，防止 **spurious wake-up** 与 **lost wake-up**

1. 如果线程调用了对象的wait（）方法，那么线程便会处于该对象的等待池中，等待池中的线程不会去竞争该对象的锁。 
2. 当有线程调用了对象的notifyAll（）方法（唤醒所有wait线程）或notify（）方法（只随机唤醒一个wait线程），被唤醒的的线程便会进 入该对象的锁池中，锁池中的线程会去竞争该对象锁。 
3. 优先级高的线程竞争到对象锁的概率大，假若某线程没有竞争到该对象锁，它还会留在锁池中，唯有线程再次调用wait（）方法，它 才会重新回到等待池中。而竞争到对象锁的线程则继续往下执行，直到执行完了synchronized代码块，它会释放掉该对象锁，这时锁池中的线程会 继续竞争该对象锁。

####  spurious wake-up

JVM 允许线程出现——`wait()` 可能在没有收到任何 `notify/notifyAll` 的情况下返回。`while` 循环能再次检查条件并在条件仍不满足时继续 `wait()`，而 `if` 一旦被跳过就会直接向下执行，导致 **underflow/overflow**。

## Semephore and Monitor

### Bounded Buffer（Producer-Consumer）

- 用两个 semaphore：`notFull` 初值 n、`notEmpty` 初值 0，保持不变量 `notFull.v + notEmpty.v = n`
- Java 可直接用 `java.util.concurrent.ArrayBlockingQueue`，其内部正是 monitor + condition 组合

### Bank-Account Demo

- 第一版只用 `synchronized`，会导致 **busy-waiting** 或 **逻辑漏洞**；
- 改进版将余额设 `volatile` 仍需主动轮询；
- 终极版以 monitor 封装，彻底消除**busy-waiting**等与错误复制。

## 并发错误形态

- **Deadlock**：互持资源、相互等待。
- **Livelock**：线程并未阻塞而是持续修改状态，却始终无法前进。
- **Starvation**: 线程长期得不到执行机会或资源。

## Coffman Condition

1. serially reusable resources: each thread shares the two objects, and (due to the synchronized keyword) accesses these objects using mutual exclusion;
2. incremental acquisition: each thread obtains a lock on each of the two objects in turn;
3. no pre-emption: once a thread has obtained a lock on an object, it only releases it once swap has completed executing; 
4. wait-for cycle: each thread may hold the lock on one of the two shared objects, and be waiting on the lock for the other.
