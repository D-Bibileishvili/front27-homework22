fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const users = data.map((user) => ({
      name: user.name,
      email: user.email,
      address: `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
    }));
    console.log(users);
  })
  .catch((error) => console.error("Error:", error));
