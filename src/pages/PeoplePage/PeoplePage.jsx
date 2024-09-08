import css from "./PeoplePage.module.css";
import { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";

import { getPeopleId, getPeopleImg } from "../../services/getIdApi";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import { useSearchParams } from "react-router-dom";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation/PeopleNavigation";

const PeoplePage = ({ setErrorApi }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [people, setPeople] = useState([]);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const queryParams = searchParams.get("page");

  useEffect(() => {
    const getData = (async () => {
      const res = await getApiResource(API_PEOPLE + queryParams);

      if (res) {
        const peopleList = res.results.map(({ name, url }) => {
          const id = getPeopleId(url);
          const img = getPeopleImg(id);

          return { id, img, name };
        });

        setPeople(peopleList);
        setPrevPage(res.previous);
        setNextPage(res.next);

        setCounterPage(Number(queryParams));

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [queryParams, setErrorApi]);

  return (
    <>
      <PeopleNavigation
        counterPage={counterPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      {<PeopleList people={people} />}
    </>
  );
};

export default withErrorApi(PeoplePage);
