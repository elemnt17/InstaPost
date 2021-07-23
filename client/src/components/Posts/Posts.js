import React from "react";
import { Grid, CircularProgress, useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId, handleOpen }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return !posts.length ? (
    <>
      <CircularProgress
        size={matches ? 100 : 50}
        thickness={matches ? 5 : 3}
        style={{ color: "purple", position: "absolute", top: "50%", left: "50%", right: "50%" }}
      />
    </>
  ) : (
    <Grid className={classes.container} item container>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={4} md={3} style={{ padding: "1rem" }}>
          <Post post={post} setCurrentId={setCurrentId} handleOpen={handleOpen} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
