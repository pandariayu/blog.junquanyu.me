# Practice Exam made by AI

## Part A: Multiple Answer Questions (35 marks total)

**Questions 1-6: 5 marks each**  
**Questions 7-8: 3 marks and 2 marks respectively**

### Question 1 (5 marks)

Which of the following are essential characteristics of complex systems? **Select all that apply.**

a) Centralized control with a single leader  
b) Emergence of properties not present in individual parts  
c) Self-organization without external intervention  
d) Completely predictable behavior  
e) Interactions between many components  
f) Non-linear interactions between parts

### Question 2 (5 marks)

In the Lotka-Volterra predator-prey model with equations:

- dR/dt = αR - βRF
- dF/dt = δRF - γF

Which of the following statements are correct? **Select all that apply.**

a) The rabbit population grows exponentially when there are no foxes  
b) The fox population declines exponentially when there are no rabbits  
c) The equilibrium point (R*, F*) = (γ/δ, α/β) is always stable  
d) The system exhibits periodic oscillations around the non-trivial equilibrium  
e) The amplitude of oscillations depends on initial conditions  
f) Both populations can coexist indefinitely at the equilibrium point

### Question 3 (5 marks)

For a Petri net system S = (N, M₀), which of the following statements about boundedness are true? **Select all that apply.**

a) A system is bounded if the set of all reachable markings is finite  
b) A 1-bounded system is also called safe  
c) If a system is k-bounded, it is also (k+1)-bounded  
d) The boundedness problem for ordinary Petri nets is decidable  
e) An unbounded system necessarily has infinite reachable markings  
f) Every live system must be bounded

### Question 4 (5 marks)

In the logistic map xt+1 = rxt(1-xt), which behaviors can be observed for different values of r? **Select all that apply.**

a) For r < 1, the population goes extinct  
b) For 1 < r < 3, the system converges to a stable fixed point  
c) For r ≈ 3.2, the system exhibits a period-2 cycle  
d) For r = 4, the system displays chaotic behavior  
e) Bifurcations occur at specific values of r  
f) The system is always bounded between 0 and 1

### Question 5 (5 marks)

Which of the following are properties of workflow nets? **Select all that apply.**

a) They have exactly one source place with empty pre-set  
b) They have exactly one sink place with empty post-set  
c) Every element is on a path from source to sink  
d) They can have multiple source places  
e) The initial marking puts one token at the source place  
f) They are a special class of ordinary Petri nets

### Question 6 (5 marks)

In agent-based models, which of the following describe agent characteristics? **Select all that apply.**

a) Agents must have goals they are trying to achieve  
b) Agents are self-contained modular components  
c) Agents operate autonomously in their environment  
d) Agents have dynamic state that changes over time  
e) Agents must be able to learn and adapt  
f) Agents interact socially with other agents

### Question 7 (3 marks)

For a cellular automaton implementing the SIR disease model, which update rules are appropriate? **Select all that apply.**

a) Susceptible individuals become infected with probability β when in contact with infectious neighbors  
b) Infectious individuals recover with probability γ  
c) Recovered individuals can become susceptible again  
d) The infection spreads deterministically to all neighbors

### Question 8 (2 marks)

Which of the following are types of long-term behavior in dynamical systems? **Select all that apply.**

a) Fixed points  
b) Limit cycles  
c) Chaotic attractors  
d) Exponential growth

---

## Part B: Multiple Choice Questions (25 marks total)

**Questions 9-19: 2 marks each**  
**Question 20: 3 marks**

### Question 9 (2 marks)

What is the defining characteristic of deterministic chaos?

a) Random behavior with no underlying patterns  
b) Predictable behavior that repeats exactly  
c) Deterministic rules producing aperiodic, bounded behavior with sensitive dependence on initial conditions  
d) Linear growth over time

### Question 10 (2 marks)

In a Petri net, a transition t is enabled in marking M if:

a) All places in the post-set of t contain at least one token  
b) All places in the pre-set of t contain at least one token  
c) The transition t has fired before  
d) All transitions in the net are enabled

### Question 11 (2 marks)

The "butterfly effect" refers to:

a) The mathematical study of insect populations  
b) Periodic oscillations in dynamical systems  
c) Sensitive dependence on initial conditions  
d) The emergence of patterns in cellular automata

### Question 12 (2 marks)

A workflow system is sound if it satisfies which combination of properties?

a) Liveness and boundedness only  
b) Option to complete, proper completion, and no dead transitions  
c) Reachability and deadlock-freedom only  
d) Safeness and liveness only

### Question 13 (2 marks)

In the Ant Colony Optimization algorithm, ants choose paths based on:

a) Random selection only  
b) Shortest distance only  
c) Pheromone concentration and distance, weighted by parameters α and β  
d) Central coordination from the colony

### Question 14 (2 marks)

The logistic growth model xt+1 = rxt(1-xt) differs from exponential growth by including:

a) A random component  
b) A carrying capacity limitation  
c) Multiple species interactions  
d) Time delays

### Question 15 (2 marks)

In a Petri net, the marking graph (reachability graph):

a) Shows only the initial marking  
b) Represents all reachable markings and transitions between them  
c) Only shows final markings  
d) Displays the net structure

### Question 16 (2 marks)

Which of the following best describes emergence in complex systems?

a) Properties that can be predicted from individual components  
b) Properties of the whole that arise from but cannot be reduced to the properties of the parts  
c) Random behavior of system components  
d) Central control mechanisms

### Question 17 (2 marks)

In cellular automata, synchronous updating means:

a) All cells update their state at the same time  
b) Cells update one at a time in sequence  
c) Only active cells update their state  
d) Updates occur randomly

### Question 18 (2 marks)

A Petri net system is live if:

a) No transition ever becomes disabled  
b) Every transition can potentially fire from every reachable marking  
c) All markings are reachable  
d) The system is bounded

### Question 19 (2 marks)

The three rules in Reynolds' boids model of flocking are:

a) Speed, direction, and altitude  
b) Separation, alignment, and cohesion  
c) Avoidance, following, and hunting  
d) Birth, death, and migration

### Question 20 (3 marks)

In agent-based modeling, what is the primary difference between agents and the components in cellular automata?

a) Agents are always more intelligent than CA cells  
b) Agents can move while CA cells are fixed to grid positions  
c) Agents allow more flexibility in behavior representation and interaction structure  
d) Agents always learn while CA cells do not  
e) There is no significant difference

---

## Answer Key

**Part A: Multiple Answer Questions**

1. b, c, e, f
2. a, b, d, e, f
3. a, b, c, d, e
4. a, b, c, d, e, f
5. a, b, c, e, f
6. b, c, d, f
7. a, b, c
8. a, b, c

**Part B: Multiple Choice Questions**  
9. c  
10. b  
11. c  
12. b  
13. c  
14. b  
15. b  
16. b  
17. a  
18. b  
19. b  
20. c