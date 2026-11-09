"use client";

import { useState } from "react";

export default function RequestForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "");

    let cleaned = numbers;

    if (cleaned.startsWith("38")) {
      cleaned = cleaned.slice(2);
    }

    if (cleaned.length > 10) {
      cleaned = cleaned.slice(0, 10);
    }

    let result = "+38";

    if (cleaned.length > 0) {
      result += ` (${cleaned.slice(0, 3)}`;
    }

    if (cleaned.length >= 3) {
      result += ")";
    }

    if (cleaned.length > 3) {
      result += ` ${cleaned.slice(3, 6)}`;
    }

    if (cleaned.length > 6) {
      result += `-${cleaned.slice(6, 8)}`;
    }

    if (cleaned.length > 8) {
      result += `-${cleaned.slice(8, 10)}`;
    }

    return result;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const cleanName = value.replace(
        /[^a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]/g,
        ""
      );

      setForm({
        ...form,
        name: cleanName,
      });

      return;
    }

    if (name === "phone") {
      setForm({
        ...form,
        phone: formatPhone(value),
      });

      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");

    if (form.name.trim().length < 2) {
      setStatus("❌ Вкажіть коректне ім'я");
      return;
    }

    const phoneNumbers = form.phone.replace(
      /\D/g,
      ""
    );

    if (phoneNumbers.length < 12) {
      setStatus(
        "❌ Вкажіть коректний номер телефону"
      );
      return;
    }

    if (form.message.trim().length < 5) {
      setStatus(
        "❌ Опишіть вашу задачу детальніше"
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/telegram",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.phone.trim(),
            message: form.message.trim(),
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus(
          "✅ Заявку успішно надіслано!"
        );

        setForm({
          name: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        setStatus(
          "❌ Помилка надсилання."
        );
      }
    } catch (error) {
      console.error(error);

      setStatus(
        "❌ Не вдалося відправити заявку."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="request"
      className="py-24 bg-white"
    >
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Замовити консультацію
        </h2>

        <p className="text-center text-slate-600 mb-10">
          Залиште заявку і ми
          зв'яжемося з вами
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            bg-orange-50
            p-8
            rounded-3xl
            border
            border-orange-100
          "
        >
          <div className="space-y-5">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ваше ім'я"
              required
              className="
                w-full
                p-4
                rounded-xl
                border
                border-orange-200
                bg-white
              "
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+38 (067) 123-45-67"
              required
              className="
                w-full
                p-4
                rounded-xl
                border
                border-orange-200
                bg-white
              "
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Опишіть вашу задачу..."
              className="
                w-full
                p-4
                rounded-xl
                border
                border-orange-200
                bg-white
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                disabled:opacity-50
                disabled:cursor-not-allowed
                text-white
                py-4
                rounded-xl
                transition
              "
            >
              {loading
                ? "Надсилання..."
                : "Надіслати заявку"}
            </button>

            {status && (
              <div
                className={`
                  mt-4
                  p-4
                  rounded-xl
                  border
                  text-center
                  font-medium
                  ${
                    status.startsWith("✅")
                      ? "bg-green-50 border-green-200 text-green-700"
                      : "bg-red-50 border-red-200 text-red-700"
                  }
                `}
              >
                {status}
              </div>
            )}

          </div>
        </form>

      </div>
    </section>
  );
}