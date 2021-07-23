import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Toolbar, Typography, Button, useMediaQuery, Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import decode from "jwt-decode";
import useStyles from "./styles";
import Photo from "../../images/Photo.png";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const matches = useMediaQuery("(min-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img src={Photo} alt="icon" height={matches ? "55" : "40"} />
        <Typography className={classes.heading} variant={matches ? "h3" : "h4"}>
          <strong>InstaPost</strong>
        </Typography>
      </div>
      {user ? (
        <Toolbar>
          <div className={classes.innerProfile} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Avatar
              className={classes.purple}
              style={{ height: matches ? "50px" : "40px", width: matches ? "50px" : "40px" }}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <ArrowDropDownIcon />
          </div>
          <Menu
            className={classes.menu}
            id="simple-menu"
            anchorEl={anchorEl}
            disableScrollLock={true}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Typography className={classes.userName} variant="body1" component="p">
                <strong>{user.result.name}</strong>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="p" onClick={logout} style={{ color: "#f50057" }}>
                <strong>Logout</strong>
              </Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">
          Sign In
        </Button>
      )}
    </AppBar>
  );
};

export default Navbar;
