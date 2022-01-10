import './post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import mara from '../../assets/images/mara.jpg'
const Post = () =>{
    return(
        <section className="post">
         <div className="post__card">
            <div className='post__card__img'> 
             <img src={mara} alt="post_image" />
            </div>
            <div className='post__card__desc'>
            <h3>Mau Forest</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, sequi.</p>
            </div>
          <div className='post__card__icons'>
           <ThumbUpIcon />
           <ThumbDownIcon />
        </div>
         </div>
        </section>
    );
}

export default Post;