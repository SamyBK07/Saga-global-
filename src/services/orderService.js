import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_t6ewgzw";
const TEMPLATE_ID = "template_nxdxnbi";
const PUBLIC_KEY = "4y2mRaBlsCfawAFV-";

export const sendOrder = async (orderData) => {
  const templateParams = {
    name: orderData.name,
    phone: orderData.phone,
    address: orderData.address,
    items: orderData.items
      .map((item) => `${item.name} x${item.quantity}`)
      .join("\n"),
    total: orderData.total + " FCFA",
    note: orderData.note || "Aucune note",
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log("EMAILJS SUCCESS:", response.status, response.text);
    return { success: true };

  } catch (error) {
    console.error("EMAILJS FULL ERROR:", error);

    alert(
      "STATUS: " + (error?.status || "undefined") +
      " | TEXT: " + (error?.text || "undefined")
    );

    return { success: false };
  }
};
