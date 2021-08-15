import * as React from "react";
import { Redirect } from "react-router-dom";

import { IconButton } from "./styles";
import _routes from "../../constants/routes";

const BackButton = () => {
  const [redirect, setRedirect] = React.useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) return <Redirect to={_routes.Home} />;

  return (
    <IconButton className="material-icons" onClick={handleClick}>
      arrow_back_ios
    </IconButton>
  );
};

export default BackButton;
