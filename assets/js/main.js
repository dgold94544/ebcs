export default {
  async fetch(request, env, ctx) {
    if (request.method === 'POST' && new URL(request.url).pathname === '/send') {
      try {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const mailData = {
          personalizations: [
            {
              to: [{ email: "KJ6KEU@ebcs.cc" }],
              reply_to: {
                email: email,
                name: name
              }
            }
          ],
          from: {
            email: "noreply@ebcs.cc",
            name: "Contact Form NO-REPLY"
          },
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
          headers: {
			"X-Api-Key": "GeVvUr3lhWF2Rb4xYnFFzKtGJYAPk7Jp",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(mailData)
});

if (mailResponse.ok) {
    return new Response("Message sent successfully! Expect a response from us within a week. Thanks!", { status: 200 });
} else {
	return new Response("Message not delivered to EBCS.", { status: 500 });
});