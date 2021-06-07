import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://raw.githubusercontent.com/adrielgama/displayAJ/master/images/gruporc_logo_400.png"
        alt="Logo GRC"
        style={{ maxWidth: 320 }}
      />
    </div>
  );
};

export default Header;
