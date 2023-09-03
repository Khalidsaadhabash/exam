import React from 'react'
import Nav from '../componatis/Nav'

const Cards = () => {




    type info={
        title:string;
        image:string;
        price:number;
        description:string
    }
    
    const [prodect, setprodect] = React.useState<info[]>([])
    






    // const DeletData = (id: string) => {
    //     axios
    //       .delete(`https://fakestoreapi.com/products/${id}`)
    //       .then((res) => {
    //         console.log(rse);
    //         (res.data);
    //       });
    //   };
    
  return (
    <div>
        <div className=''>
            aaa
        </div>
    </div>
  )
}

export default Cards