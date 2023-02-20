import { fetchposts, singlefetchrq } from '@/utils/api'
import { posts, todo } from '@/utils/types'
import { Card, CardBody, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import {CheckCircleIcon} from '@chakra-ui/icons'
import React from 'react'
import { MinusIcon } from '@chakra-ui/icons/dist/Minus'
import { WarningTwoIcon } from '@chakra-ui/icons/dist/WarningTwo'
interface tododata{
    data:todo[]
}
const Singlepeoplepage = ({data}:tododata) => {
    console.log(data)
  return (
    <div style={{display:"block",margin:"auto"}}>
        
<h1 style={{margin:"auto",fontSize:"30px",textAlign:"center"}}>UserID:{data[0].userId}</h1>
<h1 style={{margin:"auto",fontSize:"30px",textAlign:"center"}}>Todo Data</h1>
<div style={{display:"block",margin:"auto",width:"40%",height:"50px"}}>

{data.map((item:todo)=>{
    

return <div key={item.id} style={{backgroundColor:"white",marginTop:"10px"}} >

<Card bgColor={"white"} color="black">
  <CardBody >
    <span>{item.completed?<CheckCircleIcon />:"Not completed    :   "}</span>
    <span>{item.title}</span>
  </CardBody>
</Card>


</div>


})}


    </div>
    </div>
  )
}
export async function getStaticPaths(){
    let posts = await fetchposts()
   

    return {
      paths:posts.map((item:posts)=>{return { params: { id: String(item.id) } }
    
    }),
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context: any) {
  let d=context.params
   let id=d.id

   let data = await singlefetchrq(id)

    return {
      // Passed to the page component as props
      props: { data },
    }
  }

export default Singlepeoplepage