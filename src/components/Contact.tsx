"use client";

import {
  Mail,
  Github,
  Linkedin,
  Send,
  Phone,
  FileUser,
  Youtube,
  Copy,
  Check
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

interface MessageCount {
  count: number;
  date: string;
}

const MAX_MESSAGES_PER_DAY = 2;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const getMessageCount = (): MessageCount => {
  if (typeof window === 'undefined') return { count: 0, date: new Date().toDateString() };
  
  const stored = localStorage.getItem('messageCount');
  if (!stored) return { count: 0, date: new Date().toDateString() };
  
  return JSON.parse(stored);
};

const updateMessageCount = (count: number) => {
  const newCount: MessageCount = {
    count,
    date: new Date().toDateString()
  };
  localStorage.setItem('messageCount', JSON.stringify(newCount));
};

export const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [messageCount, setMessageCount] = useState<MessageCount>({ count: 0, date: new Date().toDateString() });
  const phoneNumber = "+393928097565";

  useEffect(() => {
    const stored = getMessageCount();
    setMessageCount(stored);
  }, []);

  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setIsCopied(true);
      toast.success('Phone number copied!', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '10px',
        },
        icon: '📞',
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy phone number');
      console.error('Failed to copy phone number:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Check if it's a new day
    const currentDate = new Date().toDateString();
    if (messageCount.date !== currentDate) {
      // Reset count for new day
      setMessageCount({ count: 0, date: currentDate });
      updateMessageCount(0);
    }

    // Check if user has exceeded daily limit
    if (messageCount.count >= MAX_MESSAGES_PER_DAY) {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "error",
        message: `You've reached the limit of ${MAX_MESSAGES_PER_DAY} messages per day. Please try again tomorrow.`
      });
      return;
    }

    try {
      const formData = new FormData(formRef.current!);
      const templateParams = {
        from_name: formData.get("user_name"),
        from_email: formData.get("user_email"),
        message: formData.get("message"),
      };

      const result = await emailjs.send(
        "service_gf4lakd",
        "template_0fzqfvo",
        templateParams,
        "deKJgEMi_YTI6DK60"
      );

      if (result.text === "OK") {
        // Update message count after successful send
        const newCount = messageCount.count + 1;
        setMessageCount({ count: newCount, date: currentDate });
        updateMessageCount(newCount);
        
        setSubmitStatus({
          type: "success",
          message: `Message sent successfully! You have ${MAX_MESSAGES_PER_DAY - newCount} messages remaining today.`,
        });
        if (formRef.current) {
          formRef.current.reset();
        }
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gray-background"
      ref={contactRef}
    >
      <Toaster />
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="initial"
          animate={contactInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial="initial"
            animate={contactInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="flex-1 content-around"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center gap-8">
                <div className="grid grid-cols-2 w-full gap-4 max-w-lg">
                  <div className="flex flex-col gap-4 items-start">
                    <a
                      href="mailto:badawy.ca@gmail.com"
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://github.com/xCrowly"
                      target="_blank"
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahmed-badawy-61bb7a213/"
                      target="_blank"
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                  <div className="flex flex-col gap-4 items-start">
                    <button
                      onClick={handleCopyPhone}
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Phone</span>
                      {isCopied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                    <a
                      href="https://www.youtube.com/@tikkawi"
                      target="_blank"
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                      <span>YouTube</span>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/19LsvDdYS2vtM0vh6n5nBvMfSx1zo9sGr/view?usp=sharing"
                      target="_blank"
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                    >
                      <FileUser className="h-5 w-5" />
                      <span>Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial="initial"
            animate={contactInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="flex-1 space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="w-full p-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
              className="w-full p-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              className="w-full p-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
            />
            {submitStatus.message && (
              <div
                className={`text-sm ${
                  submitStatus.type === "success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 bg-accent rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
