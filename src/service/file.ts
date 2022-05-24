import http from "../utils/axios";
// 上传图片
export function upload(data: any) {
  return http.post("/upload", { data });
}
