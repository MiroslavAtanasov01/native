import { post } from "@/services/api";
import { getAuthToken } from "@/utils/getToken";

interface UploadPhotoResponse {
  name: string;
  url?: string;
}

export const uploadPhoto = async (uri: string): Promise<string> => {
  const token = await getAuthToken();
  if (!token) {
    throw new Error("No auth token found");
  }

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
    formData,
    {
      Authorization: `Bearer ${token}`,
    }
  );

  return response.name;
};
