# Assignment

## Problem statement
1. Use `mongodb+srv://learning:learning123@learning.zejua.mongodb.net/mongodb?retryWrites=true&w=majority` to connect to the mongodb server
2. Create a database with your name i.e. `arun`
3. Create a practitioner collection with some data fields.
    ```yaml 
        {title, name, degree, address: {street, city, country, pincode}, email, specialization: ['cardiologist', 'general physician', 'gastroentrologist']}
    ```
4. Write a express route to create a physician. Take the data in request body
5. Write a express route to find the physician. Take the filter query in query parameters.
    GET /practitioners?city=Mumbai