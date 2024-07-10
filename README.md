# ProductApp

A React Native application for managing products, with phone number authentication via Firebase and Google Maps integration.

## Features

1. Phone number authentication using Firebase.
2. Product list fetched from a fake store API.
3. Detailed product view with Google Maps integration to show current location.
4. Add new products.
5. Display total price of all products.


## Screenshot and Previews

<img src="https://github.com/Riser17/ProductsListingApp/assets/91198103/fc510583-31ac-4279-86bc-23622e1e877c" width="500" height="500">


## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Riser17/ProductsListingApp
cd ProductApp
```

2. **Install dependencies:**
   
```bash
npm install
```

2. **Set up Firebase:**

 - Go to the Firebase Console.
 - Create a new project.
 - Add an Android app to your project and follow the instructions to download the google-services.json file.

## Custom Components

### CustomPhoneInputField

A custom phone input field component used for entering the phone number.

### CustomInputField
A custom input field component used for entering the OTP.

## Screens

### LoginScreen
Handles phone number authentication and OTP verification.

### ProductListScreen
Displays the list of products fetched from the API.

### ProductDetailScreen
Displays the details of a selected product along with a map showing the current location.

### AddProductScreen
Allows users to add a new product.

### TotalPriceComponent
Displays the total price of all products.

## APIs

### Get Products
- URL: https://fakestoreapi.com/products
- Method: GET
  
### Add Product
- URL: https://fakestoreapi.com/products
- Method: POST





