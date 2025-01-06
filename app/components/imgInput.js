import { useState } from "react"

const ImgInput = (props) => {
  const [imageFile, setImageFile] = useState("")

  const handleClick = async() => {
    try {
      const data = new FormData()
      data.append("file", imageFile)
      data.append("upload_preset", "nextjs-book-fullstack-app-folder-v2")
      data.append("cloud_name","daeprmo1b")
      const response = await fetch("https://api.cloudinary.com/v1_1/daeprmo1b/image/upload", {method: "POST", body: data})
      const jsonData = await response.json()
      await props.setImage(jsonData.url)
      alert("이미지 업로드 성공")
    } catch {
      alert("이미지 업로드 실패")
    }
  }

  return (
    <div className="img-input">
      <input type="file" onChange={(e)=> setImageFile(e.target.files[0])} accept="image/png, image/jpg"/>
      <button onClick={handleClick} disabled={!imageFile}>이미지 업로드</button>
    </div>
  )
}

export default ImgInput


// Configuration
    // cloudinary.config({ 
    //   cloud_name: 'daeprmo1b', 
    //   api_key: '642381882613875', 
    //   api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
  // });
