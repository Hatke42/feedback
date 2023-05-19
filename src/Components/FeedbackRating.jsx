function FeedbackRating({ select, selected }) {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i}`}>
          <input
            type="radio"
            name="rating"
            id={`num${i}`}
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackRating;
