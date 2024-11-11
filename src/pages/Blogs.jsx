import React,{useEffect} from 'react'

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      Blogs
    </div>
  )
}

export default Blogs
