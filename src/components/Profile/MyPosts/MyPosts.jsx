import Post from './Post/Post';
import classes from './MyPosts.module.css'


const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <Post message=' Hello world' like="30" />
            <Post message=' My first post' like="25" />
        </div>
    )
}
export default MyPosts;