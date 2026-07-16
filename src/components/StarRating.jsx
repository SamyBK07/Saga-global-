const StarRating = ({ rating = 0, onChange, interactive = false, size = 16 }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((s) => (
        <span
          key={s}
          className={"star" + (s <= rating ? " filled" : "") + (interactive ? " interactive" : "")}
          style={{ fontSize: size }}
          onClick={interactive && onChange ? () => onChange(s) : undefined}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
