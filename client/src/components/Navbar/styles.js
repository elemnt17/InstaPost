import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    position: "sticky",
    top: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "rgba(187, 187, 215)",
  },
  heading: {
    color: "#1a1a1a",
    textDecoration: "none",
    fontFamily: "times new roman",
  },
  innerProfile: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  menu: {
    marginTop: "60px",
    "& .MuiPaper-root": {
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      boxShadow: "none",
    },
    "& .MuiList-root": {
      backgroundColor: "rgba(187, 187, 215)",
    },
    "& .MuiList-padding": {
      padding: "3px 0px",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    "& .MuiButtonBase-root": {
      padding: "5px 10px",
    },
  },
}));
