import LazyImage from "../../LazyImage/LazyImage";
import { BLOGS, type Blog } from "./blogs";

const Blog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="blog">
      <LazyImage src={blog.image} alt={blog.name} />
      <p>{blog.name}</p>
      <p>{blog.content}</p>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="blogs">
      {BLOGS.map((blog) => {
        return <Blog key={blog.id} blog={blog} />;
      })}
    </div>
  );
};

export default BlogSection;
