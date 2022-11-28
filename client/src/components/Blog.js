import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { blue } from "@mui/material/colors";
const Blog = ({ title, description, imageURL, userName, isUser, id, setBlogs }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5001/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    setBlogs(prevState => prevState.filter((item) => item.id !== id))

    return data;
  };
  const handleDelete = () => {
    deleteRequest()
  };
  return (
    <div>
      {" "}
      <Card
        sx={{
          width: "30%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <ClearIcon fontSize="medium" color="primary" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: blue[700] }}
              aria-label="recipe"
            >
              {userName ? userName.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />

        <CardContent>
          <br />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            <b>{userName}</b> {": "} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
