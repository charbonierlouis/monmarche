import * as React from "react";

import { Icon, Input, Wrapper } from "./styles";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ onChange }: Props) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Wrapper>
      <Input onChange={(e) => setValue(e.target.value)} value={value} />
      <Icon
        className="material-icons"
        display={value ? "block" : "none"}
        onClick={() => setValue("")}
      >
        close
      </Icon>
    </Wrapper>
  );
};

export default SearchBar;
