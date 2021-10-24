import React from "react";

function Main() {
  return (
    <div 
      style={{
        backgroundColor: "rgba(3, 138, 3)",
        marginTop: "10vh",
      }}
    >
      <h1 className="search__badge text-center">
        <span
          className="badge bg-light my-5"
          style={{
            color: "rgb(4, 204, 4)",
            
          }}
        >
          Report animal in need
        </span>
      </h1>

        <form method="get" action="/login" className="text-center ">
            <button className="btn btn-light mx-3 text-success my-5" type="submit">Click here to help</button>
        </form>
    </div>
  );
}

export default Main;
