export default {
  async fetch(request, env, ctx) {
    if (request.method === 'POST' && new URL(request.url).pathname === '/send') {
      const formData = await request.formData();
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      const mailData = {
        personalizations: [{ to: [{ email: "KJ6KEU@ebcs.cc" }] }],
        from: { email: "noreply@ebcs.cc" },
        subject: `New Contact Form message from ${name}`,
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
          }
        ]
      };

      const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mailData)
      });

      if (mailResponse.ok) {
        return new Response("Message sent successfully!", { status: 200 });
      } else {
        return new Response("Failed to send message. Please try again.", { status: 500 });
      }
    }

    return env.assets.fetch(request);
  }
};
