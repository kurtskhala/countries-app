import Header from "@/components/header"
import PageContainer from "@/components/page-container/PageContainer"
import { Outlet, useLocation } from "react-router-dom"

const DefaultLayout: React.FC<React.PropsWithChildren> = ({language, setLanguage, content}) => {
  const location = useLocation();
  const lang = location.pathname.slice(1,3);  
  setLanguage(lang?lang:"en");
  
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