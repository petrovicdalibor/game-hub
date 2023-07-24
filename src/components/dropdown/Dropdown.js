import { useState } from "react";
import Select, { components } from "react-select";
import { platforms } from "../data/platforms";

const Option = ({ children, ...rest }) => {
  return (
    <components.Option {...rest}>
      {rest.data.icon} {children}
    </components.Option>
  );
};

function Dropdown({ selectPlatform }) {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const plats = platforms.map((p) => {
    return { value: p.id, label: p.name, icon: p.icon };
  });

  const customStyles = {
    menu: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#262626",
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isDisabled
        ? "#262626"
        : state.isSelected
        ? "#000"
        : state.isFocused
        ? "#000"
        : "#fff",

      backgroundColor: state.isDisabled
        ? "#262626"
        : state.isSelected
        ? "#d1d1d1"
        : state.isFocused
        ? "#d1d1d1"
        : "#262626",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#262626",
      padding: "8px",
      border: "none",
      boxShadow: "none",
      borderRadius: "10px",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#fff",
    }),
  };

  function handleOnChange(platform) {
    selectPlatform(platform.value);
    setSelectedPlatform(platform);
  }

  return (
    <>
      <Select
        options={plats}
        onChange={handleOnChange}
        value={selectedPlatform}
        styles={customStyles}
        components={{ Option }}
      />
    </>
  );
}

export default Dropdown;
