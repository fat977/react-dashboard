import { useEffect } from "react";
import { useWindowSizeContext } from "../context/WindowContext";

const useClickOutside = (ref, callback) => {

    const {windowSize} = useWindowSizeContext();
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) 
       && windowSize < 768) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback,windowSize]);
};

export default useClickOutside;