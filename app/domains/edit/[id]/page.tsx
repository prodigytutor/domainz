'use client'
import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const EditPage = ({params} :{params:{id:number}}) => {
    const router = useRouter();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { data: post, error, isLoading } = useSWR<any>(`/api/posts/`+params.id, fetcher);
    useEffect(()=>{
        if(post){
            setTitle(post.title);
            setContent(post.content);
        }
    },[post])
    const saveData = (e)=>{
        e.preventDefault();
        if(title!="" && content !=""){
            var data = {
                "title":title,
                "content":content
            }
            console.log(data);
            fetch(`/api/posts/`+params.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.success>0){
                    alert(data.message);
                    router.push('/post')
                }
            })
        }

    }
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>
    return <div className="w-full max-w-5xl m-auto">
        <h1 className="text-3xl font-bold">Edit</h1>
        <form onSubmit={saveData}>
            <input type="text" name="title" id="title" className="border border-slate-300 p-1 m-1" value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" name="content" id="content" className="border border-slate-300 p-1 m-1" value={content} onChange={e => setContent(e.target.value)}/>
            <input type="submit" value="submit" className="border border-slate-300 p-1 m-1" />
        </form>
    </div>
}
export default EditPage