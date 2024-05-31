import { useSearchParams } from "react-router-dom";

const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateSearchParams = <T extends Record<string, any>>(
    productPagingRequest: T,
  ) => {
    const newSearchParams = new URLSearchParams();
    Object.keys(productPagingRequest).forEach((key) => {
      const value = productPagingRequest[key];
      if (value === undefined || value === null || value === "") return;
      newSearchParams.set(key, String(value));
    });

    if (searchParams.toString() !== newSearchParams.toString()) {
      setSearchParams(newSearchParams);
    }
  };

  const parseSearchParams = () => {
    return Object.fromEntries(Array.from(searchParams.entries()));
  };

  return {
    searchParams,
    setSearchParams,
    updateSearchParams,
    parseSearchParams,
  };
};

export default useCustomSearchParams;
