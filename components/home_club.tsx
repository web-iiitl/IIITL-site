import Zoom from "react-reveal/Zoom";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Container from "./Containers/index";

const HomeClub: React.FC = ({ clubs }: any) => {
  console.log(clubs);
  
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_CLUB_ID,
    dataset: "production",
  });

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <Container>
      <Zoom>
        <div className="container mx-auto mt-10 ">
          <h1 className="text-5xl mb-4 sm:mb-10 text-bluel font-medium">Student Life</h1>
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4  gap-10  py-3">
            {clubs?.map((item, index) => (
              <div key={index}>
                <a href={"/clubs/" + item._id}>
                  {item.picture && item.picture.length > 0 && (
                    <img
                      className="rounded-lg cursor-pointer shadow-lg h-[220px] w-[250px] transform transition-transform hover:scale-110"
                      src={urlFor(item.picture[0]).url()}
                      alt=""
                    />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Zoom>
    </Container>
  );
};

export default HomeClub;
