"use client";

import { Controller, useForm } from "react-hook-form";
import type { ContactForm } from "@/types/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/types/zod-schemas";
import { submitContactForm } from "@/app/actions";
import toast from "react-hot-toast";

export default function ContactMe() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(data: ContactForm) {
    try {
      const response = await submitContactForm(data);

      if (response.success) {
        toast.success(response.message);
        reset();
        return;
      }

      toast.error(response.message || "Something went wrong. Try again later.");
    } catch {
      toast.error("Something went wrong. Try again later.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              {...field}
              id="contact-name"
              type="text"
              autoComplete="name"
              aria-invalid={fieldState.invalid}
              aria-describedby={
                fieldState.error ? "contact-name-error" : undefined
              }
            />
            {fieldState.error ? (
              <span className="field__error" id="contact-name-error">
                {fieldState.error.message}
              </span>
            ) : null}
          </div>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              {...field}
              id="contact-email"
              type="email"
              autoComplete="email"
              inputMode="email"
              aria-invalid={fieldState.invalid}
              aria-describedby={
                fieldState.error ? "contact-email-error" : undefined
              }
            />
            {fieldState.error ? (
              <span className="field__error" id="contact-email-error">
                {fieldState.error.message}
              </span>
            ) : null}
          </div>
        )}
      />

      <Controller
        control={control}
        name="message"
        render={({ field, fieldState }) => (
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              {...field}
              id="contact-message"
              rows={5}
              aria-invalid={fieldState.invalid}
              aria-describedby={
                fieldState.error ? "contact-message-error" : undefined
              }
            />
            {fieldState.error ? (
              <span className="field__error" id="contact-message-error">
                {fieldState.error.message}
              </span>
            ) : null}
          </div>
        )}
      />

      <button className="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
