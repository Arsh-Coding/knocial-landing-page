import axios from "axios";

export const sendMessage = async () => {
  const url = "https://graph.facebook.com/v21.0/456838097519474/messages";
  const payload = {
    messaging_product: "whatsapp",
    to: "918264988840",
    type: "template",
    template: {
      name: "testonly",
      language: { code: "en" },
    },
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization:
          "Bearer EAAIJbQEihXMBO2Mv7S6Xo6rhTHvBZAGLY61ZBdgPn4TgI3UeI4ItWYxPRmG7kTEIebISdE4ZCf9uZAzDcxx8JldKzND6gyyCixZAXSbwvfzYHY4rygzq2OWCGZCN0c0qgI15yppSb0EgBLOIHwT06jnvgmxM2fADgdnDEoVaUQLReV0B44CilbqwWuWr8G7X5eZCMfmZB8RHcon3oSpwqUa7XgOSgdkZD",
        "Content-Type": "application/json",
      },
    });
    console.log("Message sent successfully:", response.data);
  } catch (error) {
    if (error.response) {
      console.error(
        "Failed to send message:",
        error.response.status,
        error.response.statusText
      );
    } else {
      console.error("Error sending message:", error.message);
    }
  }
};
