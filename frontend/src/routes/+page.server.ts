import { sanityClient, type Pet } from "$lib";

export const load = async() => {
  const data = await sanityClient.fetch<Pet[]>("*[_type == \"pet\"]");

  if (data) {
    return { pets: data };
  }

  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
};
