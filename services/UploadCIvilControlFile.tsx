import { post } from "@/services/api";
import { getAuthToken } from "@/utils/getToken";

export interface UploadPhotoResponse {
  name: string;
  url: string;
}

export const uploadCivilControlFile = async (uri: string): Promise<string> => {
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
  formData.append("Type", "CivilControlFile");

  const response = await post<UploadPhotoResponse, FormData>(
    "/upload/image",
    formData,
    {
      Authorization: `Bearer ${token}`,
    }
  );

  return response.name;
};

interface civilControlReq {
  photoFIleName: string;
  title: string;
  text: string;
}

export const uploadCivilControl = async (payload: civilControlReq) => {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  return post<{}, civilControlReq>("/api/User", payload, {
    Authorization: `Bearer ${token}`,
  });
};
