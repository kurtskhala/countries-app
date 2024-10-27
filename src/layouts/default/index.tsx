import Header from "@/components/header";
import PageContainer from "@/components/page-container/PageContainer";
import { Outlet, useLocation } from "react-router-dom";
import { FC, PropsWithChildren, Dispatch, SetStateAction } from "react";

interface HeaderContent {
  logo: string;
  navBar: string[];
}

interface DefaultLayoutProps {
  language: "en" | "ka";
  setLanguage: Dispatch<SetStateAction<"en" | "ka">>;
  content: HeaderContent;
}

const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({
  language,
  setLanguage,
  content,
}) => {
  const location = useLocation();
  const lang = location.pathname.slice(1, 3);
  if (lang === "en" || lang === "ka") {
    setLanguage(lang);
  } else {
    setLanguage("en");
  }

  return (
    <>
      <Header language={language} content={content} />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
};

export default DefaultLayout;
