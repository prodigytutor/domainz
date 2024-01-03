'use client'
import React,{ useState} from 'react'
import { useRouter } from 'next/navigation'
const CreatePage = ({params} :{params:{id:number}}) => {
    const route = useRouter()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const saveData = (e : any)=>{
        e.preventDefault();
        if(title!="" && content !=""){
            var data = {
                "title":title,
                "content":content,
                "published":true,
                "authorId":1
            }
            console.log(data);
            fetch(`/api/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.success>0){
                    alert(data.message);
                    route.push('/post')
                }
            })
        }

    }
    return <div className="w-full max-w-5xl m-auto">
        <h1 className="text-3xl font-bold">Create</h1>
        <form onSubmit={saveData}>
            <input type="text" name="title" id="title" className="border border-slate-300 p-1 m-1"  onChange={e => setTitle(e.target.value)}/>
            <input type="text" name="content" id="content" className="border border-slate-300 p-1 m-1"  onChange={e => setContent(e.target.value)}/>
            <input type="submit" value="submit" className="border border-slate-300 p-1 m-1" />
        </form>
    </div>
}
export default CreatePage