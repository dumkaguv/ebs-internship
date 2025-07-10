import { GetProp, UploadProps } from "antd";

export type UploadFile = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
