import React, { useState, useEffect } from "react";
import { Grow, Grid, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "350px",
    backgroundColor: "rgba(187, 187, 215)",
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  tooltip: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
}));

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Grow in>
        <Grid container>
          <Grid item xs={12}>
            <Posts setCurrentId={setCurrentId} handleOpen={handleOpen} />
          </Grid>
        </Grid>
      </Grow>
      <div>
        <Tooltip title="Create Post" onClick={handleOpen} className={classes.tooltip}>
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Tooltip>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Form currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} />
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default Home;
