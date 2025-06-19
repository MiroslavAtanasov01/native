import { post } from "@/services/api";
interface UploadPhotoResponse {
  name: string;
  url?: string;
}

export const uploadPhoto = async (uri: string): Promise<string> => {
  const formData = new FormData();

  const filename = uri.split("/").pop() || "photo.jpg";
  const fileType = (filename.split(".").pop() || "jpg").toLowerCase();

  formData.append("File", {
    uri: uri,
    name: filename,
    type: `image/${fileType}`,
  } as any);
  formData.append("Type", "UserPhotoFile");

  const response = await post<UploadPhotoResponse, FormData>(
    "/upload/image",
    formData
  );

  return response.name;
};
