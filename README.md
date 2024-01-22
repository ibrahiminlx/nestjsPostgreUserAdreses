# User Addresses Project

## Project Description

This project is developed using Sequelize, PostgreSQL, and NestJS. It is designed to allow users to have multiple addresses. Users can add, update, delete, and view information related to their addresses.

The application provides a set of API endpoints that can be accessed and tested using the provided Postman collection. Below is the output from the Postman collection, which provides information on the basic usage of the APIs.

# User Addresses

## Create User

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

## Update User

- **Method:** PUT
- **Endpoint:** http://localhost:3000/api/user/updateUser
- **Body:**
  - email: test2@gmail.com
  - firstName: updateZeynep
  - lastName: updateYilmaz
  - gender: female
- **Response:**
  - [Example Response](#example-response)

## Delete User

- **Method:** DELETE
- **Endpoint:** http://localhost:3000/api/user/deleteUser
- **Body:**
  - email: test@gmail.com
- **Response:**
  - [Example Response](#example-response)
 
## Users Find All

- **Method:** GET
- **Endpoint:** http://localhost:3000/api/user/findAllUsers
- **Response:**
  - [Example Response](#example-response)

## User Find One

- **Method:** GET
- **Endpoint:** http://localhost:3000/api/user/findOneUser/test2@gmail.com
- **Query Parameters:**
  - email (disabled): test@gmail.com
- **Response:**
  - [Example Response](#example-response)

## Update User Password

- **Method:** PUT
- **Endpoint:** http://localhost:3000/api/user/updateUserPassword
- **Body:**
  - email: test2@gmail.com
  - oldPassword: test123
  - newPassword: updatePassword
- **Response:**
  - [Example Response](#example-response)

## Update User PhoneNumber

- **Method:** PUT
- **Endpoint:** http://localhost:3000/api/user/updateUserPhoneNumber
- **Body:**
  - phoneNumber: 5555555555
  - email: test2@gmail.com
- **Response:**
  - [Example Response](#example-response)

## Add Addresses

- **Method:** POST
- **Endpoint:** http://localhost:3000/api/user/addAddresses
- **Body:**
  - address: izmir
  - email: test1@gmail.com
- **Response:**
  - [Example Response](#example-response)
## Update Address

- **Method:** PUT
- **Endpoint:** http://localhost:3000/api/user/updateAddress
- **Body:**
  - addressId: d2902dc0-b95f-11ee-ab47-5f398103e3ff
  - address: updateAnkara
- **Response:**
  - [Example Response](#example-response)

## Delete Addresses

- **Method:** DELETE
- **Endpoint:** http://localhost:3000/api/user/deleteAddress
- **Body:**
  - addressId: d2902dc0-b95f-11ee-ab47-5f398103e3ff
- **Response:**
  - [Example Response](#example-response)

## Find All Addresses

- **Method:** GET
- **Endpoint:** http://localhost:3000/api/user/findAllAddresses
- **Response:**
  - [Example Response](#example-response)

## Find One Address

- **Method:** GET
- **Endpoint:** http://localhost:3000/api/user/findOneAddress/d2902dc0-b95f-11ee-ab47-5f398103e3ff
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
