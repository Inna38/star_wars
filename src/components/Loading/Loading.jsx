import css from "./Loading.module.css";
import cn from "classnames"
import loaderWhite from "../../assets/svg/loader_white.svg";
import loaderBlack from "../../assets/svg/loader_black.svg";
import loaderBlue from "../../assets/svg/loader_blue.svg";

const Loading = ({ theme = "white", isShadow =  true, classes}) => {
  return (
    <>
      {
        <img
          src={
            theme === "blue"
              ? loaderBlue
              : theme === "black"
                ? loaderBlack
                : loaderWhite
          }
          alt="loader"
          className={cn(css.loader, isShadow && css.shadow , classes)}
        />
      }
    </>
  );
};

export default Loading;
