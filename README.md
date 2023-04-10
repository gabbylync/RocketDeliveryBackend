# RocketDeliveryBackend
Week 11 Project 

MVC: 
Modal —> Classes Representative of the database
Controller —> Application Logic (actions) 
View —> Presentation of data to user 

## What is SQL?

SQL (Structured Query Language) is a programming language designed for managing and manipulating relational databases. SQL is used to create, modify, and query databases, as well as to retrieve and update data within them. Basically, SQL is a way to talk to a computer to ask it questions about information it knows. The computer gives you the answers to your questions by looking at the information it has stored in its memory. A good way to think of it is to recall a time you asked a teacher a question and they respond with to you the answer!

## What is the main difference between SQLite and MySQL?

Both SQLite and MySQL are dynamic database management systems that can be used to store and manage data, however, they have many differences that set them apart. SQLite is a file-based database system, which means that the database is stored in a single file on disk, while MySQL is a server-based database system, which means that the database is stored on a separate server that manages the data. Also, MySQL handles larger scale applications and can manage large datasets. On the other side of the coin, SQLite handles smaller applications with smaller datasets. Overall, SQLite is a lightweight, file-based database system that is ideal for small-scale applications and MySQL is a more powerful, server-based database system that is better suited for larger applications.


## What are Primary and Foreign Key? Give an example for each.

Entity Keys uniquely define an entity (person, object, event, etc..) in that entity set. A primary key is a candidate key chosen by the web developer that uniquely defines a record in an entity set. If there is more than 1 record that shares the same value, then that extra primary key is invalid. For example, when looking at the ID’s of different products in a record, you should see a unique ID for each item. If two products like the “frying pan” and the “spatula” have the same ID, then the “spatula” will be void. A foreign key identifies the relationship between different entities. It is basically referencing a different entity. Because of this, foreign keys don’t have to be unique and multiple records can share the same value without any issues. Going back to our kitchen appliance records example; the “frying pan” and “wooden spoon” both have manufacture ID’s that identify the product entity. These ID’s are also used in another entity called the manufacture entity that identifies the product ID’s along with the name of the manufacture of those products. 

## What are the different relationship types that can be found in a relational database? Give an example for each type.
First off, a relationship between entities is how they are connected/ associated with each other even though they are 2 different things. One common relationship seen is a recursive relationship. The best way to explain this would be through a good example. Imagine 2 different Codeboxx students taking the course right now. One might be a girl and the other is a boy and they might not live in the same area, but what makes them similar? They are both taking the same bootcamp class! The action that these two students both had to enroll in the course connects them and creates that relationship.
You will also see cardinal relationship which defines the total number of occurrences that one entity is connected with another. 3 common cardinal relationships are one-to-one, one-to-many, and many-to-many. 
A one-to-one relationship consists of an entity spilt into 2 to help make them more comprehensible. An example would be having one Codeboxx student associating with one primary email address. 
A one-to-many relationship consists of 2 separate entities. Entity #1 may be linked to many instances of entity #2, but entity #2 is linked to only one instance of entity #1. Going back to our Codeboxx example, the students in the bootcamp get grades each week for the projects they complete. Each student (entity #1) can have many grades associated with them, but each grade (entity #2) can only be associated with one student.
A many-to-many relationship consists of two entities #1 and #2 in which #1 may be linked to many instances of #2 and vice versa. In a University database, a many-to-many relationship can occur between students and classes. Each student can enroll in many classes, and each class can have many students.
	
Entity Relationship Diagram (ERD) - ER diagrams are made up of entities, relationships and attributes
Entity: nouns (person, object, event ..) that has data stored in it 

## Identify a pair of tables that have a one-to-one relationship. Explain why they have such a relation.

One to One:

1. Users and employees: A user can be an employee and a employee can be a user, but only one user can be one employee!

## Identify a pair of tables that have a many-to-one relationship. Explain why they have such a relation.

One to many: 

1. Customers and orders: A customer can make many different orders for many different items. For example, a customer orders a pizza then places another order for a pasta dish, and then another for a chocolate cake. The order for the pizza can only “belong to” that one customer that ordered it. 

## Identify a many-to-many relationship in the diagram. Which tables are involved and why?

Many to Many: 

n/a




