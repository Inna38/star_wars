import css from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={css.personInfo_container}>
      <ul className={css.personInfo_list}>
        {personInfo?.map(
          ({
            name = "",
            height = "",
            mass = "",
            skin_color = "",
            eye_color = "",
            gender = "",
            birth_year = "",
          }) => (
            <li key={name} className={css.list_item}>
              <ul className={css.item_title}>
                <li key={name}>
                  <p>birth_year: {birth_year}</p>
                </li>
                <li>
                  <p>height: {height}</p>
                </li>
                <p>mass: {mass}</p>
                <li>
                  <p>skin_color: {skin_color}</p>
                </li>
                <li>
                  <p>eye_color: {eye_color}</p>
                </li>
                <li>
                  <p>gender: {gender}</p>
                </li>
                <li></li>
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PersonInfo;
