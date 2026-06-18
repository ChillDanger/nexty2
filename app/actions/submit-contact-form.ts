"use server";

import { dataset, projectId } from "@/sanity/env";
import { serverClient } from "@/sanity/lib/serverClient";

export async function submitContactForm(formData: FormData) {
  console.log("CONTACT FORM HIT");

  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate the required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields",
      };
    }
console.log({
  projectId,
  dataset,
  tokenExists: !!process.env.SANITY_API_TOKEN,
  tokenPrefix: process.env.SANITY_API_TOKEN?.slice(0, 10),
});
    // Create the document in Sanity
    const result = await serverClient.create({
      _type: "contact",
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "Failed to submit the form. Please try again later.",
    };
  }
}
