import React,{useState} from 'react'
import './App.css';
import Post from './Post';


function App() {
  const[posts]=useState([
    {
      username: "Asif Shaikh",
      caption: "Looking Good Vibes",
      imageUrl: "https://scontent-bom1-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/127112680_1132050023913708_9132443160948186728_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=WfMS2HHdQ6sAX-K9vD_&tp=1&oh=78d9c6b5a9d374ab9bfa36470f99688f&oe=5FE4BE52"
    },
    {
      username:"Arif Shaikh",
       caption:"Handsome Boy",
        imageUrl:"https://scontent-bom1-2.cdninstagram.com/v/t51.2885-15/e35/126855265_197138488551364_8762708905028159970_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=1&_nc_ohc=FbIJ1OhJ98QAX_d43Qy&tp=1&oh=d4ffe6e72b240d4ced4391be69c1a4d4&oe=5FE5C42D"
    },
    {
      username:"Abdul Shaikh",
      caption:"HAVING FUN",
      imageUrl:"https://scontent-bom1-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/128642361_136001958011955_5998529285594680402_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=1&_nc_ohc=3DSZgR4lBUMAX9bviRj&tp=1&oh=9046b6b4a8836a111cf9ac038b78d954&oe=5FEE6C7E"
    },
    {
      username: "Sana Shaikh",
      caption: "HAVING FUN in Mumbai",
      imageUrl: "https://scontent-bom1-2.cdninstagram.com/v/t51.2885-15/e35/83795196_563215234536537_29278152022915481_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=109&_nc_ohc=poAZ3Uq0EToAX_vVKFO&tp=1&oh=a7c3b3c1488bdd030e59593fa072cf5c&oe=5FECA4FF"
    }
   
  ]);
  // useEffect(()=>{
  //   db.collection('posts').onSnapshot(snapshot=>{
  //     setPosts(snapshot.docs.map(doc=>doc.data()))
  //   })
  // },[])

  return (
    <div className="app">
  
      <div className="app__header">
        <img className="app__headerImage " src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
      </div>
     {
       posts.map(post=>(
         <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
       ))
     }
     
    </div>
  );
}

export default App;
