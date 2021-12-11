# Assignment

## Problem statement - Part I
1. Use `mongodb+srv://learning:learning123@learning.zejua.mongodb.net/mongodb?retryWrites=true&w=majority` to connect to the mongodb server
2. Create a database with your name i.e. `arun`
3. Create a practitioner collection with some data fields.
    ```yaml 
        {title, name, degree, address: {street, city, country, pincode}, email, specialization: ['cardiologist', 'general physician', 'gastroentrologist']}
    ```
4. Write an express route to create a physician. Take the data in request body
5. Write an express route to find the physician. Take the filter query in query parameters.
    GET /practitioners?city=Mumbai

## Problem statement - Part II
6. Write an express route to update a document based on it's id. Receive updated data in request body.
    `PUT /practitioner/:practionerId`
7. Write an express route to delete a document based on it's id.
    `DELETE /practitioner/:practionerId`

## Problem statement - Part III
8. Create a patients collection with below fields.
    ```yaml
    {title, name, phone, email, address: {street, city, country, pincode}, allergies: [], medications: []}
    ```
9. Write an express route to create a patient document. Receive patient data in request body.
    `POST /patients`
10. Write an express route to retrieve patient documents. Receive filter values as query params.
    `GET /patients`
11. Write an express route to update a patient document based on id. Receive updated data in request body.
    `PUT /patients/:patientId`
12. Write an express route to delete a patient document based on id.
    `DELETE /patients/:patientId`

## Problem statement - Part IV
Think of a way to save patient~practitioner relationship in the mongodb.