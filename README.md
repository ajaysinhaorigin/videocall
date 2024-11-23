# Video Calling App

This repository contains a **Video Calling Application** developed using **Next.js 13**, **Socket.IO**, **PeerJS**, and **WebRTC**. It allows users to engage in real-time video and audio communication seamlessly.

## Features

- **Real-Time Video and Audio Communication**  
  Enables smooth peer-to-peer video calls.
  
- **Socket.IO for Signaling**  
  Facilitates communication between users to establish connections.
  
- **PeerJS Integration**  
  Simplifies the WebRTC connection process.
  
## Tech Stack

- Next.js 13
- Socket.IO
- WebRTC
- PeerJS

## Setup and Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
# 1. Clone the repository
git clone https://github.com/ajaysinhaorigin/videocall.git
cd videocall

# 2. Install project dependencies
npm install

# 3. Install PeerJS globally
npm install -g peer

# 4. Start the PeerJS server on port 3001
peerjs --port 3001

# 5. Start the Next.js development server
npm run dev
```
## How to Use It
- Navigate to http://localhost:3000 in your browser.
- Create a new room by clicking the "Create Room" button.
- Share the generated room ID with your friend.
- Your friend can join the room by entering the shared room ID.
- Start communicating via video and audio with your friend

