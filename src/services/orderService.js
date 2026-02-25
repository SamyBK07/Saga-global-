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
    total: orderData.total + " €",
    note: orderData.note || "Aucune note",
  };

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return { success: true };
  catch (error) {
  console.log("EMAILJS ERROR FULL:", error);
  alert("Erreur : " + JSON.stringify(error));
  return { success: false };
}
