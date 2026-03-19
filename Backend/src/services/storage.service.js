import ImageKit from "@imagekit/nodejs";
import config from "../config/config.js";
import sharp from "sharp";

const imagekit = new ImageKit({
  publicKey: config.IMAGEKIT_PUBLIC_KEY,
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
});

export async function uploadFile(buffer) {
  const compressedBuffer = await sharp(buffer)
    .resize({
      width: 1200,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: 80 })
    .toBuffer();

  const fileName = `listing-${Date.now()}.jpg`;
  const file = await ImageKit.toFile(compressedBuffer, fileName);

  const result = await imagekit.files.upload({
    file,
    fileName,
    folder: "/listings",
  });
  return result;
}

export async function deleteFile(fileId) {
  return await imagekit.files.delete(fileId);
}
