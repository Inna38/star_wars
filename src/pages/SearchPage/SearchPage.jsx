import css from "./SearchPage.module.css";
import close from "../../assets/svg/close.svg";
import cn from "classnames";
import { useState, useEffect, useCallback } from "react";
import { getApiResource } from "../../utils/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getPeopleImg, getPeopleId } from "../../services/getIdApi";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import { debounce } from "lodash";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getResponce("");
  }, []);

  const getResponce = async (value) => {
    const res = await getApiResource(API_SEARCH + value);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          id,
          name,
          img,
        };
      });

      setData(peopleList);

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  const debounceGetResponse = useCallback(
    debounce((value) => getResponce(value), 300),
    []
  );

  const handleInputChange = ({ target }) => {
    debounceGetResponse(target.value);
    setInputSearchValue(target.value);
  };

  const handleCloseClick = () => {
    setInputSearchValue("");
    getResponce("");
  };

  return (
    <>
      <h1 className="header_text">Search</h1>

      <div className={css.input_container}>
        <input
          type="text"
          placeholder="Input characters`s name"
          autoFocus
          value={inputSearchValue}
          onChange={handleInputChange}
          className={css.input}
        />

        <img
          src={close}
          alt="close"
          className={cn(css.input_img, !inputSearchValue && css.clear_disabled)}
          onClick={handleCloseClick}
        />
      </div>

      <SearchPageInfo people={data} />
    </>
  );
};

export default withErrorApi(SearchPage);
