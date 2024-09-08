import css from "./PersonPage.module.css";
import { useParams } from "react-router-dom";
import { getApiResource } from "../../utils/network";
import { lazy, useEffect } from "react";
import { API_PERSON } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { useState } from "react";
import { getPeopleImg } from "../../services/getIdApi";
import PersonInfo from "../../components/PeoplePage/PersonInfo/PersonInfo";
import PersonLinkBack from "../../components/PeoplePage/PersonLinkBack/PersonLinkBack";
import { Suspense } from "react";
import Loading from "../../components/Loading/Loading";
import PersonPhoto from "../../components/PeoplePage/PersonPhoto/PersonPhoto";
import { useSelector } from "react-redux";

const PersonFilms = lazy(
  () => import("../../components/PeoplePage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const params = useParams();
  const storeData = useSelector((state) => state.personFavorite);

  const [personId, setPersonId] = useState("");
  const [personInfo, setPersonInfo] = useState([]);
  const [personPhoto, setPersonPhoto] = useState("");
  const [personFavorite, setPersonFavorite] = useState(false);

  useEffect(() => {
    const getData = (async () => {
      const res = await getApiResource(API_PERSON + params.id);
      const id = params.id;
      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      // console.log(res);
      if (res) {
        const img = getPeopleImg(params.id);

        setPersonInfo([res]);
        setPersonId(params.id);
        setPersonPhoto(img);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <ul className={css.list_container}>
        {personInfo?.map(({ name, films }) => (
          <li key={name} className={css.person_item}>
            <span className={css.person_name}>{name}</span>
            <div className={css.person_container}>
              <PersonPhoto
                personPhoto={personPhoto}
                personName={name}
                personId={personId}
                setPersonFavorite={setPersonFavorite}
                personFavorite={personFavorite}
              />
              <PersonInfo personInfo={personInfo} />
              {films.length > 0 && (
                <Suspense fallback={<Loading />}>
                  <PersonFilms films={films} />
                </Suspense>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withErrorApi(PersonPage);
