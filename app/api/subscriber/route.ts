import { json } from "zod";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.EMAIL_API_URL}/api/email/?apikey=${process.env.EMAIL_API_KEY}&password=${process.env.EMAIL_API_PASSWORD}`
    );

    if (!response.ok) {
      return Response.json(
        { message: "Failed to fetch subscribers" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (err) {
    console.log("Failed to fetch subscribers:", err);
    console.log("Hello World");
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id }: { id: string } = await req.json();

    const response = await fetch(
      `${process.env.EMAIL_API_URL}/api/email/${id}?apikey=${process.env.EMAIL_API_KEY}&password=${process.env.EMAIL_API_PASSWORD}`,
      { method: "DELETE" }
    );

    if (!response.ok) {
      return Response.json(
        { message: "Delete failed" },
        { status: response.status }
      );
    }

    return Response.json(response);
  } catch (err) {
    console.log("Delete error:", err);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      ip,
      website,
    }: {
      name?: string;
      email: string;
      ip?: string;
      website?: string;
    } = body;

    console.log("Incoming body:", body);

    if (!email) {
      return Response.json({ message: "Email is required" }, { status: 400 });
    }

    const response = await fetch(
      `${process.env.EMAIL_API_URL}/api/email?apikey=${process.env.EMAIL_API_KEY}&password=${process.env.EMAIL_API_PASSWORD}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, ip, website }),
      }
    );

    const data = await response.json();
    console.log("Express response:", response.status, data);

    if (!response.ok) {
      return Response.json(
        { message: data.message || "Failed to create subscriber" },
        { status: response.status }
      );
    }

    return Response.json(data, { status: 201 });
  } catch (err) {
    console.log("POST error:", err);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
