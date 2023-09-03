import axios from 'axios'
import React from 'react'

const Login = () => {

    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [erorr, setErorr] = React.useState('')




    const loginhandle=()=>{
        axios({
            url:'https://fakestoreapi.com/auth/login',
            method:'POST',
            data:{
                // username: "mor_2314",
                // password: "83r5^_"
                username:userName,
                password:password,
            }
    }).then(res=>{
        console.log(res.data);
        
    })
    }
  return (
    <div>
        <div>
            <input className='bg-slate-600'
            onChange={(e)=>setUserName(e.target.value)} type='text'></input>
            <input className='bg-slate-600'
            onChange={(e)=>setUserName(e.target.value)} type='password'></input>

              <button>Login</button>
        </div>
    </div>
  )
}

export default Login