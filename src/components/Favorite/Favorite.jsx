import css from "./Favorite.module.css";
import icon from "../../assets/svg/bookmark.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Favorite = () => {
  
  const storeData = useSelector(state => state.personFavorite)

  const [count, setCount] = useState(0)

  useEffect(() => {
    const length = (Object.keys(storeData).length)
    length.toString().length > 2 ? setCount("...") : setCount(length);



  }, [storeData])


  return (
    <div className={css.favorites_container}>
      <Link to="/favorites">
        <span className={css.counter}>{count}</span>
        <img src={icon} alt="favorites" className={css.icon} />
      </Link>
    </div>
  );
};

export default Favorite;
