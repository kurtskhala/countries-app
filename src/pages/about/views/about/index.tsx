import { AboutUs } from "@/language/language";
import AboutDescription from "../../components/description";

const AboutView: React.FC<{content: AboutUs}> = ({ content }) => {
  return <AboutDescription content={content} />;
};

export default AboutView;
