# Inventory Management System

## Overview
An inventory management system that features barcode scanning for accurate stock tracking and real-time inventory monitoring, designed to enhance operational efficiency in retail environments.

## Technologies Used
- **Node.js**: For server-side logic
- **Express**: To build the web application
- **Mongoose**: For MongoDB object modeling
- **Handlebars**: For templating and rendering dynamic HTML

## Features
- **Barcode Scanning**: Streamlines product entry and tracking
- **Real-Time Inventory Monitoring**: Keeps track of stock levels dynamically
- **User-Friendly Interface**: Intuitive design for easy navigation and management

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yanivlogi/storage-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd storage-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your MongoDB database and update the connection string in the config file.
5. Start the server:
   ```bash
   npm start
   ```

## Usage
Access the application by navigating to `http://localhost:3000/stock` in your web browser. Use the barcode scanner to add or manage inventory.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Express](https://expressjs.com/) for the web framework
- [Mongoose](https://mongoosejs.com/) for MongoDB object modeling
- [Handlebars](https://handlebarsjs.com/) for templating
