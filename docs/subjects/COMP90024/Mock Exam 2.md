# Mock Exam 2
### **Question 1 (10 pts)**

A) Describe some of the current challenges associated with large-scale distributed systems.

B) Cloud computing solves some of these issues but not all. Explain.

C) What are availability zones in NECTAR and what restrictions do they impose on NECTAR Cloud-based application developers? 

---

### **Question 2 (10 pts)**

A) Explain Amdahl's law and discuss the challenges of its practical implementation.

B) The actual performance as experienced by users of shared-access HPC facilities such as the Edward cluster at the University of Melbourne can vary – where here performance can be considered as the throughput of jobs, i.e. from the time of first job submission to the time of last job completion. Explain why this can happen.

C) Explain how the Edward cluster has been set up to minimize this. 

D) Explain what users can do to optimize their throughput (use) of the Edward cluster. 

E) Describe some of the challenges with application benchmarking on HPC facilities. 

---

### **Question 3 (10 pts)**

A.) In the context of distributed databases, explain the concepts of:

1. Consistency
2. Availability

B.) Give an example of a database technology that supports Availability in the presence of a (network) partition. 

C.) In the context of CouchDB clusters what is the meaning of: 

1. Replica number
2. Number of shards
3. Read quorum
4. Write quorum

D.) Describe the three different Apache SPARK runtime modes:

1. Local
2. Cluster
3. Client

---

### **Question 4 (10 pts)**

A.) In the context of Cloud, what is meant by _serverless computing_? 

B.) List three reasons why it may be beneficial to choose a serverless solution. 

C.) Discuss the role of functions in serverless computing. Your answer should include key properties of functions that make them suitable for serverless environments. 

D.) OpenFaaS is an open source framework that can be used to deliver serverless computing solutions. Discuss the role of container technologies such as Docker in OpenFaaS and their relationship with functions and how they might be used to support auto-scaling.

---

### **Question 5 (10 pts)**

A. What are container orchestration technologies? What are the main benefits of using container orchestration tools? Name two of the most popular Docker orchestration tools?

B.) A researcher wants to attach to an already running PostgreSQL container and list all of the databases it contains. The command to list all of the database is `psql -U postgres -c "/"`.  The name of the container is Postgres and it exposes the port `5432` to the host. Is the following command correct? If not, please correct it:

```shell
docker exec -p 5432 --name postgres sh -c psql -U postgres -c "" 38
```

C.) The following Docker compose file starts two Docker containers that are used to run a WordPress website. What are the equivalent Docker commands that could be used to start these two containers individually? 

```yaml
version: '3.6'
services:
  wordpress:
    image: wordpress
    restart: always
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: database
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
  database:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
      MYSQL_ROOT_PASSWORD: P@ssword
    [cite_start]volumes: [cite: 41]
      - [cite_start]/data/mysql:/var/lib/mysql [cite: 41]
```

---

### **Question 6 (10 pts)**

A.) The NECTAR Research Cloud is based on the OpenStack technology. Describe the role and features of the following OpenStack components:

1. Nova
2. Horizon
3. Heat
4. Glance
5. Swift
6. Keystone
7. Neutron

B.) Describe the interplay between these components that allows a researcher to create an instance of a virtual machine through a pre-existing snapshot from a non-public NeCTAR Cloud image, e.g. a snapshot created by a user.

---

### **Question 7 (10 pts)**

A) Code versioning systems are frequently used in collaborative software development activities. Name three types of architectures that code versioning systems have adopted and give one example of a solution for each with their respective advantages and disadvantages.

B) Give a short explanation for the following terms that are often used in a code versioning context: 

1. Commit
2. Checkout
3. Branch
4. Tag
5. Rebase

C) What is the main difference between the clone and checkout commands?