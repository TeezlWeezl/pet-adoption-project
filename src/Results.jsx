import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1> No Pets Found!</h1>
      ) : (
        pets.map(
          ({ id, name, animal, city, state, description, breed, images }) => (
            <Pet
              id={id}
              key={id}
              name={name}
              animal={animal}
              breed={breed}
              city={city}
              state={state}
              description={description}
              images={images}
            ></Pet>
          )
        )
      )}
    </div>
  );
};

export default Results;
