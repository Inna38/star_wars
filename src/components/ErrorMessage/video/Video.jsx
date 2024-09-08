import css from "./Video.module.css";

const Video = ({ src }) => {
  return (
    <video loop autoPlay muted className={css.video}>
      <source src={src} />
    </video>
  );
};

export default Video;
