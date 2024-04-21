import React, { useContext } from 'react'

const Context = React.createContext()

export function PageContextProvider({ pageContext, children }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

export const usePageContext = () => useContext(Context)
