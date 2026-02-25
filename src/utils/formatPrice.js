const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
};

export default formatPrice;
