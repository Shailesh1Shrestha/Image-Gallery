import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";

function App() {
 const [images, setImages] = useState([]);
 const [loading, setLoading] = useState(true);
 const [term, setTerm] = useState('');

 useEffect(()=> {
  fetch(`https://pixabay.com/api/?key=43285818-6efae0e55b51fc3d84398ef9b&q=
  ${term}&image_type=photo&pretty=true`)
  .then(res => res.json())
  .then(data => {
    setImages(data.hits);
    setLoading(false);
  })
  .catch(err => console.log(err));
 }, [term]);

  return (
    <>
    <h1 className="font-bold text-4xl text-uppercase ">Image Gallery </h1>

    <div className="container mx-auto"> 
    <ImageSearch searchText = {(text) => setTerm(text)} />

    {!loading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">Image not Found</h1>}

      {loading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :<div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image = {image}/>
          
        ))}
      </div>}
    </div>
    </>
  );
}

export default App;
