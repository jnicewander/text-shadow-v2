import React, { useState } from 'react'
import { FaCopy } from 'react-icons/fa'
import './Code.css'

const Code = ({ result }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = e => {
    e.preventDefault()
    navigator.clipboard.writeText(`text-shadow: ${result};`)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000);
  }
  
  return (
    <div
      className="Code_Container"      
    >
      <code>
        <span>text-shadow:</span> {result};
      </code>
      <button
        onClick={e => handleCopy(e)}
      >
        <FaCopy />
        {
          isCopied ? "Copied!" : "Copy CSS"
        }
      </button>
    </div>
  )
}

export default Code