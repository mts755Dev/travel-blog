import express from "express";
import { addBlog, deleteBlog, getAllBlog, getBlogByID, getByUserId, updateBlog } from "../controllers/blog-controller.js";

const blogrouter = express.Router();
blogrouter.get("/", getAllBlog);
blogrouter.post("/add", addBlog);
blogrouter.put("/update/:id", updateBlog);
blogrouter.get("/:id", getBlogByID);
blogrouter.delete("/:id", deleteBlog);
blogrouter.get("/user/:id", getByUserId);
export default blogrouter;
