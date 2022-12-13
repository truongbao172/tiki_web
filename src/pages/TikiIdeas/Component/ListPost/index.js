import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import IdeasPost from '../../../../components/IdeasPost'
import { getAllCardIdeasAction } from '../../../../redux/actions'
import "./style.scss"
const ListPost = (props) => {
  const {dataListPost} = props
  console.log("dataListPost",dataListPost)
    const dispatch = useDispatch()
    const action = getAllCardIdeasAction()
    useEffect(()=>{
      dispatch(action)
    },[])

    const renderListCardIdeas = () =>{
      return dataListPost.map((val, index)=>{
            return <div className='pading' key={index}>
                      <IdeasPost data = {val} revert={index%2}/>
                    </div>
      })
    }
  return (
    <div id='listPost'>
      {renderListCardIdeas()}
    </div>
  )
}

export default ListPost