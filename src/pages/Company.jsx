import React,{useEffect} from 'react'
import AboutUs from './AboutUs'
const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutUs/>
    </div>
  )
}

export default Company
