import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7eBvssyMPgEez12n4LMcwc4QAuY-y_g_Pw&usqp=CAU'></img>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}
export default Post;