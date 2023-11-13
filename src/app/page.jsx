import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs"; 

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit:8")

  return (
    <>
      {/* anime populer */}
      <section>
        <Header
          title="favorit"
          linkTitle="ALL"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
