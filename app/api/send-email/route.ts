

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { name, email, ip, website }: {
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
        `${process.env.EMAIL_API_URL}/api/email/send?apikey=${process.env.EMAIL_API_KEY}&password=${process.env.EMAIL_API_PASSWORD}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, ip, website }),
        }
      );
  
      const data = await response.json();
      console.log("Express response:", response.status, data);
  
      if (!response.ok) {
        return Response.json({ message: data.message || "Failed to create subscriber" }, { status: response.status });
      }
  
      return Response.json(data, { status: 201 });
    } catch (err) {
      console.error("POST error:", err);
      return Response.json({ message: "Internal server error" }, { status: 500 });
    }
  }