export const GroceryList = ({ data, handleDelete }) => {
  return (
    <>
      {data.map((list) => (
        <div
          key={list.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1 style={{ margin: "10px 30px 10px 30px" }}>{list.item}</h1>
          <button onClick={() => handleDelete(list.id)}>DELETE ITEM</button>
        </div>
      ))}
    </>
  );
};
