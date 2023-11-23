import Layout from "../components/Layout/index";
import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import TeamMember from "../components/TeamMember"

const people = ({ people, departments }) => {
  const client = createClient({
    projectId: "t8c6d80n",
    dataset: "production",
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  console.log(people);

  return (
    <div>
      <Layout>
        {/* <div className="flex flex-wrap min-h-[700px]">
          <div className="w-50 m-auto md:w-3/4 px-10">
            {departments
              .filter((dept) => dept.name === "Director")
              .map((item, index) => (
                <div
                  className="my-12 shadow-md p-4 rounded-md hover:scale-105 duration-300 bg-slate-100"
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
                                  <Link href={"/people/" + wm._id} key={wm._id}>
                                    <img
                                      className="rounded-full w-40 h-40 "
                                      src={urlFor(wm.picture)}
                                      alt=""
                                    />
                                  </Link>
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

            {departments
              .filter((dept) => dept.name !== "Director")
              .map((item, index) => (
                <div
                  className="my-12 shadow-md p-4 rounded-md hover:scale-105 duration-300 bg-slate-100"
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
                                  <Link href={"/people/" + wm._id} key={wm._id}>
                                    <img
                                      className="rounded-full w-40 h-40 "
                                      src={urlFor(wm.picture)}
                                      alt=""
                                    />
                                  </Link>
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
        </div> */}

        <div className="grid grid-cols-4 gap-2 p-5 items-center">
          {/* Example usage of TeamMember component for each team member */}
          <TeamMember
            name="Arthur Melo"
            info="Design Director"
            pictureUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />

          <TeamMember
            name="Pamela Anderson"
            info="Lead Developer"
            pictureUrl="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />

          <TeamMember
            name="John Doe"
            info="Full Stack Developer"
            pictureUrl="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
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
