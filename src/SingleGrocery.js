const SingleGrocery = ({ item, removeGrocery, editGrocery }) => {
  return (
    <div className="single-grocery">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editGrocery(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        onClick={() => removeGrocery(item.id)}
        className="remove-btn"
      >
        remove
      </button>
    </div>
  );
};

export default SingleGrocery;
