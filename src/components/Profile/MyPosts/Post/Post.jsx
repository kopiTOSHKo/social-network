import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7eBvssyMPgEez12n4LMcwc4QAuY-y_g_Pw&usqp=CAU' alt='img'></img>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    )
}
export default Post;