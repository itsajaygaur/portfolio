"use server"

import { contactFormSchema } from "@/types/zod-schemas";

type EmailTo = {
    email: string
}


type EmailOptions = {
    params: {NAME: string, EMAIL?: string, MESSAGE?: string},
    templateId: number,
    to: EmailTo[],
    replyTo?: {email: string}
}

export type ContactField = "name" | "email" | "message";

export type ContactFormState = {
    status: "idle" | "success" | "error";
    message: string;
    /** Per-field messages, rendered next to the input that produced them. */
    errors?: Partial<Record<ContactField, string>>;
    /** Echoed back so a failed submit without JavaScript does not clear the form. */
    values?: Record<ContactField, string>;
};

export async function submitContactForm(
    _prevState: ContactFormState,
    formData: FormData,
): Promise<ContactFormState> {

    const values: Record<ContactField, string> = {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        message: String(formData.get("message") ?? ""),
    };

    // The browser's native constraints are a convenience, not a guarantee —
    // this is the only validation that actually gates the send.
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
        const errors: Partial<Record<ContactField, string>> = {};

        for (const issue of parsed.error.issues) {
            const field = issue.path[0];

            if (typeof field === "string" && !(field in errors)) {
                errors[field as ContactField] = issue.message;
            }
        }

        return {
            status: "error",
            message: "Check the highlighted fields and try again.",
            errors,
            values,
        };
    }

    const data = parsed.data;

    try {

        const result = await Promise.all([
            sendEmail({
              params: { NAME: data.name },
              templateId: 1,
              to: [{ email: data.email }],
            }),
            sendEmail({
              params: { NAME: data.name, EMAIL: data.email, MESSAGE: data.message },
              templateId: 2,
              to: [{ email: "ajaypathak2527@gmail.com" }],
              replyTo: {email: data.email}
            })
        ])

        const messageIdExists = result.every(response => response.messageId)

        if(messageIdExists){
          return {status: "success", message: "Your message has been sent!"};
        }


          return {status: "error", message: 'There was an error sending your message.', values};

    } catch {
        return {status: "error", message: "Something went wrong. Try again later.", values}
    }
}

async function sendEmail(emailOptions: EmailOptions){
    const apiKey = process.env.BREVO_API!;
    const url = 'https://api.brevo.com/v3/smtp/email';
  
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(emailOptions),
    };
  
    const response = await fetch(url, options);
  
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    const data = await response.json()
    return data
  }
