import React, { useState } from 'react'
import Code from './Code'
import styles from './Result.module.css'

const DisplayText = ({ result }) => {
  const [isEditing, setEditing] = useState(false)
  const [sampleText, setSampleText] = useState('Edit This Text')
  const testShadowStyle = {
    textShadow: result,
  }

  return (
    <section className={styles.Result}>
      {isEditing ? (
        <div onBlur={() => setEditing(false)}>
          <input
            className={styles.SampleText}
            type='text'
            name='sampleText'
            placeholder='Enter Your Text'
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            autoFocus
          />
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span className={styles.SampleText} style={testShadowStyle}>
            {sampleText || 'Edit This'}
          </span>
        </div>
      )}
      <Code result={result} />
    </section>
  )
}

export default DisplayText
