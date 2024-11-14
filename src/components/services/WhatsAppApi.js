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
          "Bearer EAAIJbQEihXMBO5bYYZB1ZCYtoRJyGYzsd06dr4F8PGUasDWu8ZARKSa3mrMuSChVzjpEcqU2upZAvNBb3qaczZBoIK809g3uOYHvX18ft8ro28e6ZACkZBO5hDxJj66Sl9nTDw9MKpmGJoCC8pYwacGrKkAhEupCoWZCOXEtSmDw4pKY18iVl2QXpFilwcHuzQ9dBYsqOysf0u8Sb8mDWZAF4G4ZBHWCMZD",
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
