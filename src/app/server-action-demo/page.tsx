/**
 * This page is a demo to ensure Server Actions compile and run correctly
 * using our babel.config.js
 * See: https://github.com/vercel/next.js/issues/57966#issue-1975329730
 */
import React from 'react'
import { ClientComponent } from './client-component'

export default function Page() {
  return <ClientComponent />
}
