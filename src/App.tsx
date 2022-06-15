import React from 'react'
import { useActions } from './hooks/useActions'
import { useSelectorTypes } from './hooks/useSelectorTypes'

const App = () => {
  const { wallet: {walletAddress} } = useSelectorTypes(state => state)
  const {metamask} = useActions()

  return (
    <>
      <button onClick={metamask}>Connect Metamsk</button>
      <div>{walletAddress}</div>
    </>
  )
}

export default App