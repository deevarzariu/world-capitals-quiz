import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Option } from "../types/Option";
import { getRandomOption } from "../utils/helpers";

function usePagination(
  nbPages: number,
  itemsPerPage: number,
  options: Option[]
) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const currentOptions = options.slice(indexOfFirstPost, indexOfLastPost);
  const currentAnswer = getRandomOption(currentOptions);

  const resetPage = () => {
    setCurrentPage(1);
  };

  const nextPage = function () {
    if (currentPage < nbPages) {
      setCurrentPage((currentPage) => currentPage + 1);
    } else {
      navigate("/results");
    }
  };

  return { currentPage, currentOptions, currentAnswer, resetPage, nextPage };
}

export default usePagination;
