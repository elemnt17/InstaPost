import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Tooltip, IconButton } from "@material-ui/core/";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId, handleOpen }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleEdit = (post) => {
    handleOpen();
    setCurrentId(post._id);
  };

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) ? (
        <>
          <FavoriteIcon style={{ color: "red" }} />
          &nbsp;
          <Typography variant="body2" component="p" style={{ color: "white" }}>
            {post.likes.length > 2
              ? `You and ${post.likes.length - 1} others`
              : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
          </Typography>
        </>
      ) : (
        <>
          <FavoriteBorderIcon style={{ color: "#3f3f3f" }} />
          &nbsp;
          <Typography variant="body2" component="p" style={{ color: "#3f3f3f" }}>
            {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
          </Typography>
        </>
      );
    }

    return (
      <>
        <FavoriteBorderIcon style={{ color: "#3f3f3f" }} />
        &nbsp;
        <Typography variant="body2" component="p" style={{ color: "#3f3f3f" }}>
          Like
        </Typography>
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="body1" component="p">
          <strong>{post.name}</strong>
        </Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <IconButton onClick={() => handleEdit(post)} style={{ color: "white", padding: "0px" }}>
            <Tooltip title="Edit post" className={classes.tooltip}>
              <EditIcon fontSize="small" />
            </Tooltip>
          </IconButton>
        </div>
      )}
      <CardContent style={{ padding: "5px 20px" }}>
        <Typography variant="h6" component="h2">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <div className={classes.details}>
        <Typography variant="body2" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" style={{ color: "#7b1818" }} onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
