import  {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { data } from '../../redux';
import Post from '../post/post';
import './list.css';
import Forms from '../formsec/forms';
 
 
const PostList = () =>{
  
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(data());
    });

    const datas = useSelector(posts =>posts.post);
    const dataList =  Array.from(datas.data);
    const postList = dataList.map(pos => <Post key={pos.id} creator= {pos.creator} title= {pos.title} description = {pos.description} picture = {pos.picture} />)
    console.log(dataList);
    return(
        <div className='list'>
          <div className='list__section'>
          {postList}
          </div>
          <Forms />
        </div>
    );
}

export default PostList;