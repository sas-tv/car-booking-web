import { Flex, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import styles from "./index.module.css";

const SelectComponent = ({
  selectedId,
  onSelectChange,
  optionsList,
  hasDefault,
  defaultValue
}) => {
  return (
    <Flex styleName="select-root">
      <Select
        value={selectedId}
        onChange={({ target: { _, value }})=> {
          onSelectChange(parseInt(value));
        }}
      >
        {hasDefault && <option value={0}>{defaultValue ? defaultValue: "--Select--"}</option>}
        {optionsList}
      </Select>
    </Flex>
  );
}

SelectComponent.propTypes = {
  selectedId: PropTypes.number.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired,
  hasDefault: PropTypes.bool,
  defaultValue: PropTypes.string
}

export default CSSModules(SelectComponent, styles);