import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { useT, initT, t } from "../../../utils/intl";
import style from "./SearchBar.module.css";

function SearchBar() {
  // initT(useT(), "searchBar");

  return (
    <Form>
      <InputGroup size="sm" className={style["search-bar"]}>
        <FormControl
          name="search"
          className={style["search-input"]}
          // placeholder={t("placeholder")}
        />
        <InputGroup.Append>
          <Button
            variant="light"
            className={["border-left-0 bg-white", style["search-btn"]]}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
