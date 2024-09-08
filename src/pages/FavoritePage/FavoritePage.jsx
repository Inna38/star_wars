import css from "./FavoritePage.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";

const FavoritePage = () => {
  const storeData = useSelector((state) => state.personFavorite);
  const [favoritePeople, setFavoritePeople] = useState([]);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      setFavoritePeople(res);
    }
  }, []);

  return (
    <>
      {favoritePeople.length ? (
        <PeopleList people={favoritePeople} />
      ) : (
        <h2 className={css.comment}>No data</h2>
      )}
    </>
  );
};

export default FavoritePage;
