import { useEffect } from "react";

export default function PageWrapper({title,children}){
    useEffect(() => {
        document.title = `Admin | ${title}`;
      }, [title]);
    
      return <>{children}</>;
}