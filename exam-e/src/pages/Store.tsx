import axios from 'axios'
import React, { useEffect } from 'react'

import { Carousel, Typography, Button, IconButton, Card, CardHeader, CardBody } from "@material-tailwind/react";
import Cards from './Cards';
import Nav from '../componatis/Nav';
 

const store = () => {




   
    
type info={
    title:string;
    image:string;
    price:number;
    description:string
}

const [prodect, setprodect] = React.useState<info[]>([])






useEffect(() => {
  
    axios.get('https://fakestoreapi.com/products')
    .then((res=>{
      console.log(res);
      
      setprodect(res.data);
      
    }))
  
}, [])







 

 
   return (

<>
<Nav/>
{prodect.map((item)=>{
    return(
        <div className='grid grid-row-3 '>
         
         <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none" >
       
        {/* <p>{item.price}</p> */}
        
       <img className='w-full' src={item.image}/>
       
       
       </CardHeader>
       <CardBody>
        <Typography variant="h4" color="blue-gray">
        {item.title} 
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {item.description} 
        </Typography>
      </CardBody>
      <Typography className="font-normal">{item.price}$</Typography>
       </Card>
    
       
       </div>
       
    )
}
)}
<Cards/>
</>

    
   )
 }
    
  

export default store