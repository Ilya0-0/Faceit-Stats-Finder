import React, { useState } from "react";
import "./styles/global.scss";
import { useFetching } from "@hooks/useFetching";
import PostService from "@api/PostService";
import SearchForm from "@components/SearchForm/SearchForm ";

const App = () => {
  const [userData, setUserData] = useState(null);

  const [fetchUserStats, isLoading, error] = useFetching(async (nickname) => {
    const response = await PostService.getUserStatsByNickname(nickname);
    setUserData(response.data);
  });

  return (
    <>
      <SearchForm onSubmit={fetchUserStats} />
      {isLoading && <p>Loading...</p>}
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        userData && <pre>{JSON.stringify(userData, null, 2)}</pre>
      )}
    </>
  );
};

export default App;
