import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 8);

  return (
    <>
      {/* anime populer */}
      <section>
        <Header title="Favorite" linkTitle="ALL" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Recommended" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
