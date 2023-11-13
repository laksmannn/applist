import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;

  //syntax for anticipation % become space
  const decodedKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
      {/* anime favorite */}
      <section>
        <Header title={`looking for ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
