import { useNavigate } from "react-router";
import css from "./PersonLinkBack.module.css";
import iconBack from "../../../assets/svg/chevron-left.svg";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <a href="#" onClick={handleGoBack} className={css.link}>
        <img src={iconBack} alt="icon_Back" className={css.link_img} />
        <span> Go back</span>
      </a>
    </>
  );
};

export default PersonLinkBack;
