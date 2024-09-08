import css from "./ErrorMessage.module.css";
import video from "../../assets/video/han-solo.mp4"
import Video from "./video/Video";

const ErrorMessage = () => {
  return (
<>
      <p className={css.text}>
        The dark side of the force has won. <br /> We cannot display data.
        <br />
        Come back when we fix everything.
      </p>

      <Video src={video} />
</>
  );
};

export default ErrorMessage;
