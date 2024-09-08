import { Link } from "react-router-dom";
import css from "./SearchPageInfo.module.css";

const SearchPageInfo = ({ people }) => {
  return (
    <>
      {people.length ? (
        <ul className={css.list_container}>
          {people?.map(({ id, name, img }) => (
            <li key={id} className={css.list_item}>
              <Link to={`/people/${id}`}>
                <img src={img} alt={name} className={css.person_photo} />
                <p className={css.person_title}> {name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={css.person_comment}>No results</h2>
      )}
    </>
  );
};

export default SearchPageInfo;
