import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";
import "../../styles/imageAdd.css";
import { useParams } from "react-router-dom";
import { Label, Segment } from "semantic-ui-react";
import ImageService from "../../services/imageService";

// coded for single image (refactor this image array or recode in post add page while multi upload together like multi upload paragraphs)
export default function ImageAdd() {

  const [image, setImage] = useState({})

  let { postId } = useParams();
  let imageService = new ImageService();

  useEffect(() => {
    imageService.getByPostId(postId).then(result=>setImage(result.data.data))
  },[])

  //

  let NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = "dwsq1lxha";
  let NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET = "mwh6iqdn";
  //let NEXT_PUBLIC_CLOUDINARY_KEY = "637772425194474";
  //let CLOUDINARY_SECRET = "AlMGdtKHQ7BtLBskmQeiJ3Zp0Rg";

  const [uploadedFile, setUploadedFile] = useState({
    // asset_id:"",
    // public_id:"",
    // version:null,
    // version_id:"",
    // signature:"",
    // width:null,
    // height:null,
    // format:"",
    // resource_type:"",
    // created_at:"",
    // tags:[],
    // bytes:null,
    // type:"",
    // etag:"",
    // placeholder:null,
    // url:"",
    // secure_url:"",
    // access_mode:"",
    // original_filename:""
  });

  //
  const onDrop = useCallback((acceptedFiles) => {
    const url = `https://api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      // ----------SIGNED (EN ALTTA)----------
      // pages/api/sign.js içinde function var
      // const {signature, timestamp} = await getSignature();
      // formData.append('signature', signature);
      // formData.append('timestamp', timestamp);
      // formData.append('api_key',NEXT_PUBLIC_CLOUDINARY_KEY);
      // --------------UNSIGNED---------------
      formData.append("upload_preset", NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
      //--------------------------------------
      const response = await fetch(url, { method: "post", body: formData });
      const data = await response.json();
      setUploadedFile(data);
      if(image.url==null){
        imageService.add(postId,data.url)
        console.log("image url null : eklendi")
      }else{
        imageService.update(image.id,data.url)
        console.log("image url var : güncellendi")
      }
    });
  }, []);

  //
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  const content = () => {
    if (uploadedFile.url) {
      return (
        <div>
          <ul style={{ listStyle: "none"}}>
            <li key={uploadedFile.public_id}>
              <Image
                cloudName={NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                publicId={uploadedFile.public_id}
                width="300"
                crop="scale"
                style={{marginRight:"3em"}}
              />
            </li>
          </ul>
          <Label color="green" size="large">Görsel Eklendi</Label>
        </div>
      );
    } else {
      return (
        <div
          {...getRootProps()}
          className={`${"dropzone"} ${isDragActive ? "active" : null}`}
        >
          <input {...getInputProps()} />
          <strong style={{ textAlign: "center" }}>
            Görsel seçmek için tıkla veya buraya sürükle!
          </strong>
        </div>
      );
    }
  };

  return <Segment secondary>{content()}</Segment>;
}
