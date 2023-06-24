import React from "react";
import { Link } from "react-router-dom";
import ImageUser from "../cache_image/ImageUser";
export const SearchResultList = ({ results, setResult }) => {
  return (
    <div className="results-list p-2">
      {results.map((result, id) => {
        return (
          <Link
            className="m-2 text-decoration-none"
            to={`/profile?id=${encodeURIComponent(result.id)}`}
            key={id}
            onClick={() => setResult("")}
          >
            <div className="d-flex align-items-center gap-2">
              <ImageUser image={result.image} width={38} />
              <span className="result_search_name">{`${result.firstName} ${result.lastName}`}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
