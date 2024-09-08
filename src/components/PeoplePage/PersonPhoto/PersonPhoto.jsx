import { useDispatch } from "react-redux";
import css from "./PersonPhoto.module.css";
import iconFavorite from "../../../assets/svg/favorite.svg";
import iconFavoriteFill from "../../../assets/svg/favorite_fill.svg";
import {
  removePersonFromFavorite,
  setPersonToFavorite,
} from "../../../redux/personFavorite/personFavoriteSlice";

const PersonPhoto = ({
  personId,
  personPhoto,
  personName,
  setPersonFavorite,
  personFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
      return;
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <div className={css.img_container}>
      <img
        src={!personFavorite ? iconFavorite : iconFavoriteFill}
        alt="favotite person"
        className={css.favorite_icon}
        onClick={dispatchFavoritePeople}
      />

      <img src={personPhoto} alt={personName} className={css.person_img} />
    </div>
  );
};

export default PersonPhoto;
