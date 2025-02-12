export const GetImageURL = async (file: File): Promise<string> => {
  console.log(file);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "kmak810w");
  // console.log("from cloudinary", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
  // console.log("from cloudinary", process.env.NEXT_PUBLIC_CLOUD_NAME);
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/da9tj7fus/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error uploading image");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error: unknown) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
