'use client'
import AppContent from "@/components/assignment6/app.content";
import useSWR from "swr";
import blog_css from '@/styles/blog.module.css';
const Assignment6 = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
      "http://localhost:8000/blogs",
      fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }
    );
    if(isLoading){
      return <div>loading...</div>
    }
      return(
          <div className={blog_css.container} >
              <AppContent blogs={data}/>
          </div>
      )
}

export default Assignment6