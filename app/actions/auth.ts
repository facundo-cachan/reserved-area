"use server";
import { redirect } from "next/navigation";

import { FormState, SignupFormSchema } from "@/app/lib/definitions";
import { createSession, deleteSession } from "@/app/lib/session";

export async function signup(
  state: FormState,
  formData: { get: (arg0: string) => any },
) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await createSession(user.id);
  redirect("/profile");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
