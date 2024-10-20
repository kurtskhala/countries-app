import Header from "@/components/header"
import PageContainer from "@/components/page-container/PageContainer"
import { Outlet } from "react-router-dom"

const DefaultLayout: React.FC<React.PropsWithChildren> = ({language, setLanguage, content}) => {
  return (
    <>
        <Header language={language} setLanguage={setLanguage} content={content}/>
        <PageContainer>
            <Outlet />
        </PageContainer>
    </>
  )
}

export default DefaultLayout