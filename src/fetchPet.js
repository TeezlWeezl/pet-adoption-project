const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`${queryKey[0]}/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
