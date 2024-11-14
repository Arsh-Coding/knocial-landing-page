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
          "Bearer EAAIJbQEihXMBO01VonrSOJr5Cp3Mh5BIfurcDVnkderZAg7ZBRt2zrXjcZAaz2KUgkpX9jNFwsvfzO4uId10TEkfe7t0ozp3eZA3ZA1FqBBYeOZAmFu5pwd5sBEcgIK37HxRXulwpO7GQblUsoeOhXItKSSHqLoomeLfXEGvm2dADw7YaLTjtnbPqwNOEh9kysgKg4WZAK6IFb5ZBiXVZCh1jBM2XF8QZD",
        "Content-Type": "application/json",
      },
    });
    console.log("Message sent successfully:", response.data);
    alert("Request Sent");
  } catch (error) {
    if (error.response) {
      console.error(
        "Failed to send message:",
        error.response.status,
        error.response.statusText
      );
      alert("Try again later");
    } else {
      console.error("Error sending message:", error.message);
    }
  }
};
