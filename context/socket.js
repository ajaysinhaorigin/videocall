import { createContext, useContext, useEffect, useState } from "react"
import { io } from "socket.io-client"

const SocketContext = createContext(null)

export const useSocket = () => {
  const socket = useContext(SocketContext)
  return socket
}

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
      const connection = io()
      console.log("connection", connection)
    setSocket(connection)
    return () => connection.close()
  }, [])
    
    socket?.on("connect_error", async (error) => {
        console.log('connection error', error)
        await fetch('/api/socket')
    })

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
