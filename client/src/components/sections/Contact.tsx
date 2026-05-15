import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertContactSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CONTACT_EMAIL = "tiff@mjvoice.com";

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    setSubmitting(true);
    // Compose a mailto: with the form contents so the request actually reaches Tiffini
    const subject = encodeURIComponent(
      data.subject || `Free trial lesson request — ${data.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    );
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    setTimeout(() => {
      toast({
        title: "Your email is opening",
        description: `If nothing happens, email ${CONTACT_EMAIL} directly — Tiffini will reply within 24 hours.`,
      });
      form.reset();
      setSubmitting(false);
    }, 400);
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book a Free Trial Lesson
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Send Tiffini a quick note and she'll reply within 24 hours to
            schedule your free trial lesson.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>
            
            <div>
              <Input
                placeholder="Subject"
                {...form.register("subject")}
              />
              {form.formState.errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                className="h-32"
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-black hover:bg-gray-800 text-white text-base font-semibold py-6"
              disabled={submitting}
            >
              {submitting ? "Opening your email…" : "Request My Free Trial Lesson"}
            </Button>
            <p className="text-center text-sm text-gray-500">
              Or email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-black underline hover:no-underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              directly
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
