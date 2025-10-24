import axios from "axios";

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return new Response(JSON.stringify({ success: false, message: "Token is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is not set");
      return new Response(
        JSON.stringify({ success: false, message: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    if (response.data.success) {
      return new Response(
        JSON.stringify({ success: true, score: response.data.score }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "reCAPTCHA verification failed" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
