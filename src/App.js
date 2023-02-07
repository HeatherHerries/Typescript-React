import React, { Component } from 'react'
import CommentCard from './CommentCard'
import Profile1 from "./Assets/avatar1.png"
import Profile2 from "./Assets/avatar2.png"
import Profile3 from "./Assets/avatar3.png"


class App extends Component {
  render() {
    return (
      <div className='ui comments'>
        <CommentCard 
        image={ Profile1 }
        name='Todd'
        time='Today at 5:00PM'
        comment='This is Amazing'
        />
        <CommentCard
        image={ Profile2 }
        name='Alex'
        time='Today at 5:30PM'
        comment='I love this shit!'
        />
        <CommentCard 
        image= { Profile3 }
        name='Heather'
        time='Today at 6:00PM'
        comment='I could do this all day!'
        />
        
      </div>
    )
  }
}

export default App

