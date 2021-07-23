import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: "200px",
    width: "100%",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
    backgroundColor: "rgba(67, 66, 67, 0.43)",
    color: "rgba(255, 255, 255, 1)",
  },
  overlay: {
    color: "white",
    padding: "5px 20px",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 20px 5px",
    display: "flex",
    justifyContent: "space-between",
    color: "rgba(255, 255, 255, 1)",
  },
  tooltip: {
    color: "white",
    padding: "0px",
    margin: "0px",
    cursor: "pointer",
  },
});
