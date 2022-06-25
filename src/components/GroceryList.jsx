export const GroceryList = ({ data, handleDelete, loading, error }) => {
  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
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
          <h1 style={{ margin: "10px 30px 10px 30px" }}>{list.title}</h1>
          <button onClick={() => handleDelete(list.id)}>DELETE ITEM</button>
        </div>
      ))}
    </>
  );
};
