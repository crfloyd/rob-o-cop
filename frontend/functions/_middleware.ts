import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";
import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";
import { PagesFunction } from "@cloudflare/workers-types";

export const onRequest: PagesFunction = (context) => {
  console.log("FUNCTION - onRequest", context);
  return mailchannelsPlugin({
    personalizations: [
      {
        to: [{ name: "Rob-O-Cop", email: "rob@rob-o-cop.com" }],
        headers: { "x-test": "foobar" },
      },
    ],
    from: {
      name: "Rob-O-Cop.com",
      email: "no-reply@example.org",
    },
    subject: "Rob-O-Cop contact form submission",
    respondWith: ({ formData, name }) => {
      console.log("formData", formData, "name", name);
      return new Response(null, {
        status: 302,
        headers: {
          location: "/mail-sent/",
        },
      });
    },
  })(context);
};

export const onReques2t: PagesFunction = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Some User", email: "someuser@example.com" }],
    },
  ],
  from: {
    name: "ACME Support",
    // The domain of your `from` address must be the same as the domain you set up MailChannels Domain Lockdown for (detailed below)
    email: "support@mydomain.com",
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});

// export const onRequest = mailchannelsPlugin({
//   personalizations: [
//     {
//       to: [{ name: "Rob-O-Cop", email: "rob@rob-o-cop.com" }],
//     },
//   ],
//   from: { name: "Enquiry", email: "no-reply@example.com" },
//   respondWith: ({ formData, name }) => {
//     const email = formData.get("email");
//     return new Response(
//       `Hello, ${email}! Thank you for submitting the ${name} form.`
//     );
//   },
// });

// export const onRequest: PagesFunction = staticFormsPlugin({
//   respondWith: ({ formData, name }) => {
//     console.log("formData", formData, "name", name);
//     const email = formData.get("email");
//     return new Response(
//       `Hello, ${email}! Thank you for submitting the ${name} form.`
//     );
//   },
// });
