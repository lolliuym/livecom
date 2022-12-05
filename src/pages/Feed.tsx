import React from 'react'
 import ListEvents from '../components/ListEvents/ListEvents'
import ListStories from '../components/ListStories/ListStories'

const Feed = () => {
  return (
    <div>
       <ListStories />
      <ListEvents />
    </div>
  )
}

export default Feed
