import { CopyToClipboard } from "react-copy-to-clipboard"
import { Copy, Check } from "lucide-react"

import styles from "./index.module.css"
import { useState } from "react"

const CopySection = (props) => {
  const { roomId } = props
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div className={styles.copyContainer}>
      <div className={styles.copyHeading}>Copy Room ID:</div>
      <hr />
      <div className={styles.copyDescription}>
        <span>{roomId}</span>
        <CopyToClipboard text={roomId}>
          {isCopied ? (
            <Check className="ml-3 cursor-pointer" />
          ) : (
            <Copy
              className="ml-3 cursor-pointer"
              onClick={() => setIsCopied(true)}
            />
          )}
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default CopySection
