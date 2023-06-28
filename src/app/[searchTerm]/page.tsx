import React from "react";
import getWikiResults from "../../../lib/getWikiResults";
import { promises } from "dns";
type Props = {
  prams: {
    searchTerm: string;
  };
};
export default async function page({ prams: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const result: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="">
      {result ? (
        Object.values(result).map((res) => {
          return <p>{JSON.stringify(res)}</p>;
        })
      ) : (
        <h2>{`${searchTerm} Is Not Found`}</h2>
      )}
    </main>
  );
  return <div></div>;
}
