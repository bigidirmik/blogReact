import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../../styles/imageAdd.css";

export default function ImageAdd() {
  const onDrop = useCallback((acceptedFiles) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append('upload_preset',process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET)
      const response = await fetch(url, {
        method: "post",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`${"dropzone"} ${isDragActive ? "active" : null}`}
    >
      <input {...getInputProps()} />
      Drop Zone
    </div>
  );
}
