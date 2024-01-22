# User Addresses Project

## Project Description

This project is developed using Sequelize, PostgreSQL, and NestJS. It is designed to allow users to have multiple addresses. Users can add, update, delete, and view information related to their addresses.

The application provides a set of API endpoints that can be accessed and tested using the provided Postman collection. Below is the output from the Postman collection, which provides information on the basic usage of the APIs.

## Postman Collection

### 1. createUser

- **HTTP Method**: POST
- **URL**: `http://localhost:3000/api/user/createUser`
- **Parameters**:
  - `firstName`: ahmet (text)
  - `lastName`: yilmaz (text)
  - `email`: test1@gmail.com (text)
- **Response**: []

### 2. updateUser

- **HTTP Method**: PUT
- **URL**: `http://localhost:3000/api/user/updateUser`
- **Parameters**:
  - `email`: test@gmail.com (text)
  - `firstName`: updateAhmet (text)
- **Response**: []

### 3. deleteUser

- **HTTP Method**: DELETE
- **URL**: `http://localhost:3000/api/user/deleteUser`
- **Parameters**:
  - `email`: test@gmail.com (text)
- **Response**: []

### 4. addAddresses

- **HTTP Method**: POST
- **URL**: `http://localhost:3000/api/user/addAddresses`
- **Parameters**:
  - `address`: test (text)
  - `email`: test1@gmail.com (text)
- **Response**: []

### 5. updateAddress

- **HTTP Method**: PUT
- **URL**: `http://localhost:3000/api/user/updateAddress`
- **Parameters**:
  - `email`: test1@gmail.com (text)
  - `addressId`: c74146d0-b945-11ee-8a08-7d03f83d6d58 (text)
  - `address`: istanbul (text)
- **Response**: []

### 6. deleteAddress

- **HTTP Method**: DELETE
- **URL**: `http://localhost:3000/api/user/deleteAddress`
- **Parameters**:
  - `email`: test1@gmail.com (text)
  - `addressId`: 4495fc70-b94b-11ee-aec1-bfc101b6ad57 (text)
- **Response**: []

### 7. findAllUsers

- **HTTP Method**: GET
- **URL**: `http://localhost:3000/api/user/findAll`
- **Response**: []

### 8. findOneUser

- **HTTP Method**: GET
- **URL**: `http://localhost:3000/api/user/findOne?email=test@gmail.com`
- **Response**: []
