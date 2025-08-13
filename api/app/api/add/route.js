import { NextResponse } from "next/server";

// Handle GET request
export async function GET() {
  return NextResponse.json({
    message: "This is a GET request",
    exampleData: { name: "Zunoon", role: "coder" },
  });
}

// Handle POST request
export async function POST(request) {
  try {
    const body = await request.json();

    // Simple validation
    if (!body.name || !body.role) {
      return NextResponse.json(
        { success: false, error: "Name and role are required!" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      received: body,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid JSON format" },
      { status: 400 }
    );
  }
}
