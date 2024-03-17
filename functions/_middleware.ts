import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Rob-O-Cop", email: "rob@rob-o-cop.com" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@example.com" },
  respondWith: () => {
    console.log("Sending email");
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});
