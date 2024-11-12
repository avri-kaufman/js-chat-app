# Chat Application

This is a simple real-time chat application built with Node.js, Express, and Socket.IO. Users can log in with a name, see a list of connected users, and send messages in real-time.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/avri-kaufman/js-chat-app.git
   cd js-chat-app-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node serverSide/chatServer.js
   ```
2. Open a web browser and navigate to `http://localhost:3000` to access the chat application.

## Features

- **User Login**: Users enter their name and connect to the chat.
- **Real-Time Messaging**: Messages appear instantly for all connected users.
- **User Typing Indicator**: Displays "typing..." while a user is typing.
- **User Connection/Disconnection Notifications**: Shows when a user connects or disconnects.

## Dependencies

- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Socket.IO](https://socket.io/) - Enables real-time bidirectional event-based communication.
