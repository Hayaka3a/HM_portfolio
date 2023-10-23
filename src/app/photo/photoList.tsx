import React, { useEffect, useState } from "react";
import getPhotosData from "./getPhotosData";
import { photo } from "@/type/photo";
import CategoryRadio from "./categoryRadio";
import styles from "@/styles/photo.module.css";
import Image from "next/image";

export default function PhotoList() {
  const [photos, setPhotos] = useState<photo[] | undefined>();
  const [category, setCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    getPhotosData(setPhotos);
  }, []);

  const handleImageClick = (imageURL: string) => {
    setSelectedImage(imageURL);
  };

  const clearSelectedImage = () => {
    setSelectedImage("");
  };

  return (
    photos && (
      <main className={styles.main}>
        <CategoryRadio category={category} setCategory={setCategory} />
        <div className={styles.photoList}>
          {photos
            .filter((data) => category === "all" || data.category === category)
            .map((data, index) => (
              <Image
                key={index}
                src={`${data.image}`}
                alt={`${data.image}`}
                className={styles.img}
                onClick={() => handleImageClick(data.image)}
                width={120}
                height={120}
              />
            ))}
        </div>
        {selectedImage && (
          <div className={styles.overlay} onClick={clearSelectedImage}>
            <img
              src={selectedImage}
              alt="enlarged"
              className={styles.enlargedImage}
            />
          </div>
        )}
      </main>
    )
  );
}
