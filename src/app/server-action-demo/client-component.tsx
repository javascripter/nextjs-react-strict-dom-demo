'use client'
import React from 'react'
import { action } from './action'
import { html, css } from 'react-strict-dom'

export function ClientComponent() {
  return (
    <html.div
      style={styles.div}
      onClick={() => {
        React.startTransition(async () => {
          const result = await action()
          alert(result)
        })
      }}
    >
      Click to run server action.
    </html.div>
  )
}

const styles = css.create({
  div: {
    color: 'green',
  },
})
