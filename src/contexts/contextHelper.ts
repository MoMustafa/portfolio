import { Context, useContext } from 'react'

function contextHookFactory<P>(context: Context<P>) {
  return () => {
    const contextState = useContext(context)
    if (typeof contextState === 'undefined') {
      throw new Error(`use${context.displayName} must be used within a ${context.displayName}Provider`)
    }

    return contextState
  }
}

export default contextHookFactory
