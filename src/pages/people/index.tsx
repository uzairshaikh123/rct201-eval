import PeopleCard from '@/components/Peoplecard'
import { posts } from '@/utils/types'
import React from 'react'



interface postsdata{
  posts:posts[]
}
const people = ({posts}:postsdata) => {
  // console.log(posts)
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",backgroundColor:"white"}}>


{posts.map((item:posts)=>{
  return <PeopleCard key={item.id} id={item.id} title={item.name} username={item.username} address={item.address}/>
})}

        
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}


export default people