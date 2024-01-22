# User Addresses Project

## Project Description

This project is developed using Sequelize, PostgreSQL, and NestJS. It is designed to allow users to have multiple addresses. Users can add, update, delete, and view information related to their addresses.

The application provides a set of API endpoints that can be accessed and tested using the provided Postman collection. Below is the output from the Postman collection, which provides information on the basic usage of the APIs.

# Postman Collection: userAdreses

## createUser

- **Method:** POST
- **Endpoint:** http://localhost:3000/api/user/createUser
- **Body:**
  - firstName: mehmet
  - lastName: yilmaz
  - email: test1@gmail.com
  - phoneNumber: 5555555554
  - gender: male
  - password: test123
- **Response:**
  - [Example Response](#example-response)

## updateUser

- **Method:** PUT
- **Endpoint:** http://localhost:3000/api/user/updateUser
- **Body:**
  - email: test2@gmail.com
  - firstName: updateZeynep
  - lastName: updateYilmaz
  - gender: female
- **Response:**
  - [Example Response](#example-response)

## deleteUser

- **Method:** DELETE
- **Endpoint:** http://localhost:3000/api/user/deleteUser
- **Body:**
  - email: test@gmail.com
- **Response:**
  - [Example Response](#example-response)

## addAddresses

- **Method:** POST
- **Endpoint:** http://localhost:3000/api/user/addAddresses
- **Body:**
  - address: izmir
  - email: test1@gmail.com
- **Response:**
  - [Example Response](#example-response)

## Example Response

```json
{
    "code": 200,
    "error": false,
    "success": true,
    "data": [...]
}
