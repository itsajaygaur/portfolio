"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions";
import type { ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactMe() {
  const [state, formAction, isSubmitting] = useActionState(
    submitContactForm,
    initialState,
  );

  const { errors, values } = state;

  return (
    <form className="contact-form" action={formAction}>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          defaultValue={values?.name}
          aria-invalid={Boolean(errors?.name)}
          aria-describedby={errors?.name ? "contact-name-error" : undefined}
        />
        {errors?.name ? (
          <span className="field__error" id="contact-name-error">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          defaultValue={values?.email}
          aria-invalid={Boolean(errors?.email)}
          aria-describedby={errors?.email ? "contact-email-error" : undefined}
        />
        {errors?.email ? (
          <span className="field__error" id="contact-email-error">
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          defaultValue={values?.message}
          aria-invalid={Boolean(errors?.message)}
          aria-describedby={errors?.message ? "contact-message-error" : undefined}
        />
        {errors?.message ? (
          <span className="field__error" id="contact-message-error">
            {errors.message}
          </span>
        ) : null}
      </div>

      <button className="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      {state.message ? (
        <p
          className="form-status"
          data-status={state.status}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
