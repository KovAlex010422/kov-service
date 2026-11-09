export async function POST(req) {
  try {
    const body = await req.json();

    const message = `
🔔 НОВА ЗАЯВКА

👤 Ім'я:
${body.name}

📞 Телефон:
${body.phone}

📝 Опис робіт:
${body.message}

🌐 Сайт:
KOV Service

🕒 Час:
${new Date().toLocaleString("uk-UA")}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Telegram error");
    }

    return Response.json({
      success: true,
    });
  } catch {
    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}