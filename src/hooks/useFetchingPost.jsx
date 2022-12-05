import { useEffect, useState } from "react";
import axios from "axios";

const useFetchingPost = (url) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:3000/students')
      .then(res => {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [url]);

  return { posts }
}

export default useFetchingPost
