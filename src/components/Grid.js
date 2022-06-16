import Card from "../commons/Card";

const Grid = ({ movies }) => {
    
    if(!movies) return "no hay info"

  return (
    <div className="container">
      <div className="columns is-multiline layout">
        {movies.map((data, i) => (
          <div className="column is-3" key={i}>
              
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
