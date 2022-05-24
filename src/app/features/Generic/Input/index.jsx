import { InputGroup, InputLeftElement, InputRightElement, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

const InputElement = ({
  leftElementIcon,
  placeHolderValue,
  value,
  onInputChange,
  rightElementIcon,
  onRightIconClick,
  isDisabled
}) => {
  return (
    <InputGroup w="20%">
      {leftElementIcon && <InputLeftElement pointerEvents="none">{leftElementIcon}</InputLeftElement>}
      <Input
        placeholder={placeHolderValue}
        value={value}
        onChange={onInputChange}
        disabled={isDisabled}
      />
      {value && <InputRightElement
          cursor="pointer"
          onClick={onRightIconClick}
        >
          {rightElementIcon}
        </InputRightElement>
      }
    </InputGroup>
  );
};

InputElement.propTypes = {
  leftElementIcon: PropTypes.element,
  placeHolderValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rightElementIcon: PropTypes.element.isRequired,
  onRightIconClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default InputElement;
