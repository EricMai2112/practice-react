import React from 'react'
import websiteUI from './test.jpg'

export default function Ads({ x, y }: { x: number; y: number }) {
  return (
    <div>
      <img src={websiteUI} alt='' style={{ width: '100rem', height: 'auto' }} />
      <ul>
        <li>x: {x}</li>
        <li>y: {y}</li>
      </ul>
    </div>
  )
}
