// import { NextResponse } from 'next/server';

// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req) {
//   try {
//     const { email, subject, message } = await req.json();
//     console.log("Received:", email, subject, message);

//     // Validate input
//     if (!email || !subject || !message) {
//       return NextResponse.json({
//         error: "Missing required fields"
//       }, { status: 400 });
//     }

//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ["subhamsinhass.344@gmail.com"],// Only send to your email
//       subject: `Contact Form: ${subject}`,
//       react: (
//         <>
//           <h1>New Contact Form Message</h1>
//           <p><strong>From:</strong> {email}</p>
//           <p><strong>Subject:</strong> {subject}</p>
//           <p><strong>Message:</strong></p>
//           <div style={{
//             backgroundColor: '#f5f5f5',
//             padding: '15px',
//             borderRadius: '5px',
//             margin: '10px 0'
//           }}>
//             {message}
//           </div>
//           <hr />
//           <p><em>Reply directly to: {email}</em></p>
//         </>
//       ),
//     });

//     if (error) {
//       console.error("Resend API error:", error);
//       return NextResponse.json({
//         error: error.message
//       }, { status: 400 });
//     }

//     console.log("Email sent successfully:", data);

//     // Frontend expects { message: "success" }
//     return NextResponse.json({
//       message: "success",
//       data
//     });

//   } catch (error) {
//     console.error("Email send error:", error);
//     return NextResponse.json({
//       error: error.message || "Unknown error"
//     }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,  // Your verified sender email
      to: [toEmail],    // Your inbox
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      react: (
        <>
          <h1>New Contact Form Message</h1>
          <p><strong>From:</strong> {email}</p>   {/* Dynamic sender */}
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Message:</strong></p>
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '15px',
            borderRadius: '5px',
            margin: '10px 0'
          }}>
            {message}
          </div>
          <hr />
          <p><em>Reply directly to: {email}</em></p> {/* So you can reply easily */}
        </>
      ),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "success", data });

  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: error.message || "Unknown error" }, { status: 500 });
  }
}
