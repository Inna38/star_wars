import { Link } from "react-router-dom";
import css from "./PeopleList.module.css";

const PeopleList = ({ people }) => {

  return (
    <ul className={css.list_container}>
      {people?.map(({ id, name, img }) => (
        <li key={id} className={css.list_item}>
          <Link to={`/people/${id}`}>
            <img src={img} alt={name} className={css.person_photo} />
            <p className={css.list_title}> {name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
