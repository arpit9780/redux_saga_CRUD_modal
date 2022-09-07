import React from 'react'
import { useForm } from 'react-hook-form';
import { CreateData } from '../Redux/GetData';
import { useDispatch} from 'react-redux';

export const Create = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("onSubmit", data);
        dispatch(CreateData(data))
       
    }


    return (<>
        <>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className=' box'>
            <div className='form-group row'>
            <h1 style={{color: "white"}}>Create Your Id</h1>
            </div>
            <div className='form-group row'>
            <input className="form-control  col-lg-3 " placeholder='Enter Name' {...register("name", { required: true })} />
            {errors.name && <span style={{color: "white"}}>This field is required</span>}
            </div>
            <div className='form-group row'>
            <input className="form-control  col-lg-3" placeholder='Enter Email'{...register("email", { required: true,
            pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email', }, })} />
            {errors.email && <span style={{color: "white"}}>This field is required</span>}
            </div>
            <div>
            <button className="btn btn-primary col-lg-1" type="submit">submit</button>
            </div>
            </div>
            </form>
        </>

    </>
    )
}
