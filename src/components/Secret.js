import axios from "axios"
import {useEffect, useState} from "react"
const Secret = ()=>{

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/secret")
      .then((res) => res.data)
      .then((img) => {
        setImage(img);
        setLoading(false);
        
      })
      .catch(({ response }) => {
        setLoading(false);
        
      });
  }, []);
    return (<p>desde secret</p>)
}

export default Secret