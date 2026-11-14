export async function POST(req) {
  try {
    const body = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token) {
      console.error(
        "TELEGRAM_BOT_TOKEN is missing"
      );

      return Response.json(
        {
          success: false,
          error: "Missing bot token",
        },
        {
          status: 500,
        }
      );
    }

    if (!chatId) {
      console.error(
        "TELEGRAM_CHAT_ID is missing"
      );

      return Response.json(
        {
          success: false,
          error: "Missing chat id",
        },
        {
          status: 500,
        }
      );
    }

    const message = `
🔔 НОВА ЗАЯВКА

👤 Ім'я:
${body.name}

📞 Телефон:
${body.phone}

📝 Опис:
${body.message}

🕒 Час:
${new Date().toLocaleString("uk-UA")}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    const result = await response.json();

    console.log(
      "Telegram response:",
      result
    );

    if (!response.ok) {
      return Response.json(
        {
          success: false,
          telegram: result,
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Telegram route error:",
      error
    );

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }

  return Response.json({
    token:
      process.env.TELEGRAM_BOT_TOKEN
        ? "OK"
        : "MISSING",

    chat:
      process.env.TELEGRAM_CHAT_ID
        ? "OK"
        : "MISSING",
  });

}