import css from "./PersonFilms.module.css";
import { useEffect, useState } from "react";
import { makeConcurrentRequest } from "../../../utils/network";
import { withErrorApi } from "../../../hoc-helpers/withErrorApi";

const PersonFilms = ({ setErrorApi, films }) => {
  const [filmName, setFilmName] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await makeConcurrentRequest(films);

        if (response) {
          setFilmName(response);
          setErrorApi(false);
        } else {
          setErrorApi(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className={css.personFilms_container}>
      <ul className={css.list_container}>
        {filmName
          ?.sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li key={episode_id} className={css.list_item}>
              <span className={css.item_episode}>Episode {episode_id}: </span>
              <span className={css.item_title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default withErrorApi(PersonFilms);
