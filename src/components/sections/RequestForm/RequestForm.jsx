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

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            const response = await fetch(
                "/api/telegram",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(form),
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
                            placeholder="Номер телефону"
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
                                className="
                 mt-4
      p-4
      rounded-xl
      bg-green-50
      border
      border-green-200
      text-green-700
      text-center
      font-medium
                "
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