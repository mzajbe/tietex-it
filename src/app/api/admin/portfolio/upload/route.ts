import { uploadImageToCloudinary } from "@/lib/cloudinary";

const MAX_UPLOAD_SIZE_BYTES = 8 * 1024 * 1024;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json({ error: "Image file is required." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return Response.json(
        { error: "Only image uploads are allowed." },
        { status: 400 }
      );
    }

    if (file.size > MAX_UPLOAD_SIZE_BYTES) {
      return Response.json(
        { error: "Image is too large. Max allowed is 8MB." },
        { status: 400 }
      );
    }

    const uploaded = await uploadImageToCloudinary(file);
    return Response.json({
      imageUrl: uploaded.secureUrl,
      cloudinaryPublicId: uploaded.publicId,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to upload image.";
    return Response.json({ error: message }, { status: 500 });
  }
}
