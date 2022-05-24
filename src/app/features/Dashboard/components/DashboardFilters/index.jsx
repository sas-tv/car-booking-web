import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

import { getSortByDetails as sorterList } from "../../helpers";
import { Input, Select } from "../../../Generic";

import styles from "./index.module.css";

const DashboardFilters = ({ filterCarsList }) => {
  const [searchText, setSearchText] = useState('');
  const [sortFilter, setSortFilter] = useState(1);

  return (
    <div styleName="dashboard-filters">
      <Select
        selectedId={sortFilter}
        onSelectChange={(value) => {
          setSearchText('');
          setSortFilter(value);
          filterCarsList("sort", '', value);
        }}
        optionsList={sorterList.map(({id, name}) => 
          <option 
            key={id} 
            value={id}
          >
            {name}
          </option>
        )}
        hasDefault={false}
      />

      <Input
        leftElementIcon={<SearchIcon color="gray.300" />}
        placeHolderValue="Search by name"
        value={searchText}
        onInputChange={({target: { value }}) => {
          setSearchText(value);
          filterCarsList("search", value, '');
        }}
        rightElementIcon={<SmallCloseIcon color="gray.600" />}
        onRightIconClick={() => 
        {
          setSearchText('');
          filterCarsList("search", '', '');
        }}
      />
    </div>
  );
};

DashboardFilters.propTypes = {
  filterCarsList: PropTypes.func.isRequired
};

export default CSSModules(DashboardFilters, styles);
