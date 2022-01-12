import './post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import TextTruncate from 'react-text-truncate'; 
import { useState } from 'react';
const Post = ({creator, title, picture, description}) =>{

    const[like, setLike] = useState(0);
    const[dislike, setDisLike] = useState(0);
    
    const likes= () =>{
        setLike(prev => prev + 1);
    }
    const dislikes= () =>{
        setDisLike(prev => prev + 1);
    }
    return(
        <section className="post">
         <div className="post__card">
            <div className='post__card__img'> 
             <img src={picture} alt="post_image" />
            </div>
            <div className='post__card__desc'>
            <h3>{title}</h3>
            <TextTruncate
           line={4}
           element="p"
            truncateText="…"
            text={description}
     
              />
            </div>
          <div className='post__card__icons'>
           <ThumbUpIcon  onClick ={likes}/> <span>{like}</span>
           <ThumbDownIcon onClick= {dislikes} /> <span>{dislike}</span>
        </div>
         </div>
         
        </section>
    );
}

export default Post;