import css from "./NotFoundPage.module.css";
import notFound from "../../assets/img/not-found.png";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <>
      <img src={notFound} alt="notFound" className={css.img} />
      <p className={css.text}>No match for {location.pathname}</p>
    </>
  );
};

export default NotFoundPage;
