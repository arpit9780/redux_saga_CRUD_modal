import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { GetData,DeleteUser, UpdateUser } from '../Redux/GetData'
import { toast } from 'react-toastify'
import { Modal, Button, Group } from '@mantine/core'

export const ShowDetail = () => {
  const data = useSelector(state => state.Reducer.data)
  // const updatedata = useSelector(state => state.Reducer.uptData)
  const dispatch = useDispatch()

  const [updateId, setUpdateId] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [opened, setOpened] = useState(false);
  // const [updateDatas,setUpdateDatas] = useState(false)

  useEffect(() => {
    console.log(2222222)
    dispatch(GetData())
  }, [])

  
  const updataUser = (id, name, img) => {
    console.log("updataUser", id, name, img);
    setUpdateName(name)
    setUpdateId(id)
    setOpened(true)
    // setUpdateVal({ newId: id, newName: name, newImage: img })
  }

//   useEffect(()=>{
// dispatch(GetData())
// debugger
//   },[updateDatas])

  const saveData=()=>{
     const body={
      "id" : updateId,
      "name" : updateName,
     }
     console.log("body",body);
    dispatch(UpdateUser(body))
    // setUpdateDatas(!updateDatas)

  }


  const deleteUser = (id) => {
    dispatch(DeleteUser(id))
  }


  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* <img src={updateVal.newImage}  /> */}
        <input type="text" value={updateName} onChange={(e)=>{setUpdateName(e.target.value)}} />
        <button onClick={()=> saveData()}>Save</button>
        {/* <p>INDEX NO:  {updateVal.newId}</p> */}
      </Modal>

      <div className='container'>
        <div className='row'>
          {data.map((ele, i) => {
            return (<>
              <div className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <img className="card-img-top" src={ele.avatar} alt="Card image cap" />
                <div className="card-body" >
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">ID : {ele.id}</p>
                  <p>{ele.email}</p>
                  <button onClick={() => updataUser(ele.id, ele.name, ele.avatar)} className="btn btn-primary" style={{ marginRight: "20px" }}>Update Profile</button>
                  <button onClick={() => deleteUser(ele.id)} className="btn btn-primary">Delete Profile</button>
                </div>
              </div>

            </>)
          })}
        </div>
      </div>

    </>
  )
}
