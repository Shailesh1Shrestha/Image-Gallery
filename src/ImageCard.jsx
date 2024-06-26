import React from 'react'

export default function ImageCard({ image }) {
    const tags = image.tags.split(',');
  return (
    <>
           <div className=" dark:bg-slate-800 text-white max-w-sm rounded-3xl overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full h-80" />
        <div className="px-6 py-4">
          <div className="font-bold text-yellow-400 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views:  </strong> {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>{image.downloads}
            </li>
            <li>
              <strong>Likes: </strong> {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
            
              {tags.map((tag, index)=>(
                    <span key= {index} className="inline-block bg-gray-200 rounded-full px-2 py-1 ml-1 text-sm font-semibold text-gray-700 mr 2">
                    #{tag}
                  </span>
                ))}
            
        
        </div>
      </div> 
    </>
  )
}
