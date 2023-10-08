import RemoveButton from "./RemoveButton"
import Link from "next/link"
import {HiPencilAlt} from "react-icons/hi"

const getTopics = async()=>{
    const baseUrl = process.env.API_URL;
try {
    const res=await fetch(`${baseUrl}/api/topics`,{cache:"no-store"});
    if(!res.ok){
        throw new Error("Failed to fetch topics");
    }
    return res.json();   
} catch (error) {
    console.log("Error loading topics: ",error);
}
};

const TopicList = async() => {
    const {topics}= await getTopics();
  return (
    <>
    {topics.map((curntElem)=>(
        <div key={curntElem._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start duration-1000 hover:bg-slate-300">
            <div>
                <h2 className="font-bold text-2xl">{curntElem.title}</h2>
                <div>{curntElem.description}</div>
            </div>
            <div  className="flex gap-2">
                <RemoveButton id={curntElem._id}/>
                <Link href={`/editTopic/${curntElem._id}`}> <HiPencilAlt size={24}/> </Link>
            </div>
        </div>
    ))}
      
    </>
  )
}

export default TopicList
