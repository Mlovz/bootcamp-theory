import React from 'react'
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const params = useParams()
  console.log(params);
  
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage