import EditTopicForm from '@/components/EditTopicForm';
import React from 'react'

const getTopicById=async(id)=>{

  const baseUrl = process.env.API_URL;

  try {
    const res=await fetch(`${baseUrl}/api/topics/${id}`,{
      cache:"no-store"
    });
    if(!res.ok){
      throw new Error('Failed to fetch topic.')
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const EditTopic =async ({params}) => {

  const {id}=params;
  const {topic} = await getTopicById(id);
  const {title,description}=topic;

  return (
    <EditTopicForm id={id} title={title} description={description}/>
  )
}

export default EditTopic
