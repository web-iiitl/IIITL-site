import Layout from "../components/Layout/index";
import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";


const TeamMember = ({ name, info, pictureUrl, id }) => {
  const client = createClient({
    projectId: "t8c6d80n",
    dataset: "production",
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <a href={"/people/" + id} className="flex no-underline flex-col cursor-pointer items-center border m-4 sm:p-6 rounded-xl dark:border-gray-700">

      {
        pictureUrl ?
          <img
            className="object-cover rounded-xl aspect-square"
            src={urlFor(pictureUrl).url()}
            alt={name}
            width="400"
            height="500"
          />
          : null
      }

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-black">
        {name}
      </h1>

      <p className="mt-2 text-black no-underline">{info}</p>
    </a>
  );
};

const people = ({ people, departments }) => {
  const client = createClient({
    projectId: "t8c6d80n",
    dataset: "production",
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  console.log(people, departments);

  return (
    <div>
      <Layout>
        <div className="">
        
        <div className="px-20">
      
        {departments
          .filter((dept) => dept.name === "Director")
          .map((item, index) => (
            <div
              className="my-12 shadow-md p-4 rounded-md duration-300 "
              key={index}
            >
              <h1 className="text-3xl">{item.name}</h1>

              {item?.people?.map((it, ind) => (
                <div key={it}>
                  <h1 className="text-2xl my-4 border-b-2 border-slate-400">
                    {it.SubDepartment}
                  </h1>

                  <div className="grid grid-flow-row md:grid-cols-4 gap-3">
                    {it.people?.map((ct, num) => (
                      <div key={num}>
                        {people.map((wm, wt) => {
                          if (wm._id == ct._ref) {
                            return (
                              <TeamMember 
                               name={wm.name}
                               pictureUrl={wm.picture}
                               id={wm._id}
                               info={wm.post}
                              />
                            );
                          }
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          </div>


          <div className="px-20">
           
          {departments
            .filter((dept) => dept.name !== "Director")
            .map((item, index) => (
              <div
                className="my-12 shadow-md p-4 rounded-md duration-300 "
                key={index}
              >
                <h1 className="text-3xl">{item.name}</h1>
  
                {item?.people?.map((it, ind) => (
                  <div key={it}>
                    <h1 className="text-2xl my-4 border-b-2 border-slate-400">
                      {it.SubDepartment}
                    </h1>
  
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 gap-3">
                      {it.people?.map((ct, num) => (
                        <div key={num}>
                          {people.map((wm, wt) => {
                            if (wm._id == ct._ref) {
                              return (
                                <TeamMember 
                                 name={wm.name}
                                 pictureUrl={wm.picture}
                                 id={wm._id}
                                 info={wm.post}
                                />
                              );
                            }
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            </div>



        </div>




      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "t8c6d80n",
    dataset: "production",
  });
  const query = `*[_type == "people"]`;
  const query2 = `*[_type == "departments"]`;
  const people = await client.fetch(query);
  const departments = await client.fetch(query2);

  return {
    props: {
      people,
      departments,
    },
  };
}

export default people;
