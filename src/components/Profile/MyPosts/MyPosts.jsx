import Post from './Post/Post';
import classes from './MyPosts.module.css'


const MyPosts = () => {
    return (
            <div className={classes.posts}>
                <Post />
                <Post />
            </div>
    )
}
export default MyPosts;