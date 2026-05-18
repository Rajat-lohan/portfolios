"use client";

import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {

        alert("Message Sent Successfully");

        setName("");
        setEmail("");
        setMessage("");

      } else {

        alert("Failed To Send Message");
      }

    } catch (error) {

      console.log(error);

      alert("Something Went Wrong");

    } finally {

      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-black text-center text-gray-900 mb-16">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#eef5fb] rounded-3xl p-10 shadow-lg"
        >

          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <input
              type="text"
              placeholder="Your Name"

              value={name}

              onChange={(e) =>
                setName(e.target.value)
              }

              className="h-14 px-5 rounded-xl border border-gray-300 bg-white outline-none"

              required
            />

            <input
              type="email"
              placeholder="Your Email"

              value={email}

              onChange={(e) =>
                setEmail(e.target.value)
              }

              className="h-14 px-5 rounded-xl border border-gray-300 bg-white outline-none"

              required
            />
          </div>

          <textarea
            rows={6}
            placeholder="Your Message"

            value={message}

            onChange={(e) =>
              setMessage(e.target.value)
            }

            className="w-full p-5 rounded-xl border border-gray-300 bg-white outline-none mb-6"

            required
          />

          <button
            type="submit"

            disabled={loading}

            className="w-full h-14 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}