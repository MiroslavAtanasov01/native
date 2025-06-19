import { post } from "@/services/api";

export interface UploadPhotoResponse {
  name: string;
  url: string;
}

export const uploadCivilControlFile = async (uri: string): Promise<string> => {
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
    formData
  );

  return response.name;
};

interface civilControlReq {
  photoFIleName: string;
  photoFileUrl: string;
  title: string;
  text: string;
}

export const uploadCivilControl = async (payload: civilControlReq) => {
  return post<{}, civilControlReq>("/api/User", payload);
};
