async function useFetch() {
  try {
    const res = await fetch(
      "https://api.scripture.api.bible/v1/bibles/66c22495370cdfc0-01/verses/GEN.1.1",
      {
        method: "GET",
        headers: {
          "api-key": "99e0ae9e41460c1edbef57418ce49fe2"
        }
      }
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

export { useFetch };
