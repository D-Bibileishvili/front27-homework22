fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })

  .then((data) => {
    const container = document.getElementById("user");
    container.innerHTML = " ";

    data.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("card");

      userCard.innerHTML = `<h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>`;

      container.appendChild(userCard);
    });
  })

  .catch((error) => console.error("Error:", error));
