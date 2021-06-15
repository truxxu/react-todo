import React, { useEffect } from "react";

import { Navbar, List } from "../organisms";
import getItems from "../hooks/getItems";

const Main = () => {
  const [getDiscussions, items, isLoadingItems] = getItems();

  useEffect(() => {
    getDiscussions("/get");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      {isLoadingItems ? <p>Loading...</p> : <List listData={items} />}
    </div>
  );
};

export { Main };
