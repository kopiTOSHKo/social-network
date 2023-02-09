import MyPost from './MyPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={classes.container_img}>
                <img src="https://ik.imagekit.io/ikmedia/backlit.jpg" alt="img" />
            </div>
            <div className={classes.added_Post}>
                <div className={classes.ava}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7eBvssyMPgEez12n4LMcwc4QAuY-y_g_Pw&usqp=CAU" alt="" />
                    <div>  Anton Zheleznyak </div>
                </div>
                <div className={classes.container_button}>
                    <button className={classes.button}>Add post</button>
                    {/* <button className={classes.button}>Remove post</button> */}
                </div>
            </div>
            <div>
                <MyPost />
            </div>
        </div>
    )
}
export default Profile;