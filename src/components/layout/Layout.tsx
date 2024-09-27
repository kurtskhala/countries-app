import { ReactNode } from "react"
import Header from "#/header"

const Layout:React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout