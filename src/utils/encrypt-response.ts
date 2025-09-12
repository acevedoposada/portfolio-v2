import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";
import { ENCRYPTION_SECRET } from "@/constants/secrets";

export function encryptResponse<JsonBody>(response: JsonBody, status = 200) {
  return NextResponse.json(
    CryptoJS.AES.encrypt(JSON.stringify(response), ENCRYPTION_SECRET!).toString(),
    { status }
  );
}
