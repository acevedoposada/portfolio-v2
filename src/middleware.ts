import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

const ENCRYPTION_SECRET = process.env.SECRET_KEY;
const API_KEY = process.env.API_KEY;

export function middleware(req: NextRequest) {
  try {
    const encryptedApiKey = req.headers.get("x-api-key");

    if (!encryptedApiKey || !ENCRYPTION_SECRET || !API_KEY) {
      return NextResponse.json(
        { message: "Access denied. Unknown secrets" },
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    const bytes = CryptoJS.AES.decrypt(encryptedApiKey, ENCRYPTION_SECRET);
    const decryptedApiKey = bytes.toString(CryptoJS.enc.Utf8);

    if (decryptedApiKey !== API_KEY) {
      return NextResponse.json(
        { message: "Access denied. Invalid API key." },
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error while validation middleware", error);
    return NextResponse.json(
      { message: "Error while validating API key" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export const config = {
  matcher: ["/api/:path*"],
};
