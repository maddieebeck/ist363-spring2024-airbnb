// variables
// const roomName = 'Luxury King Room';
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription =
//   'A  beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.';

// const room = {
//   name: 'Luxury King Room',
//   price: 300,
//   guests: 2,
//   description:
//     'A  beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
// };

// array (usually plural because there are multiple objects in an array)
// const rooms = [
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A  beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
//   {
//     name: 'Luxury Queen Room',
//     price: 250,
//     guests: 2,
//     description:
//       'A  beautiful room with a queen size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
//   {
//     name: 'Luxury Full Room',
//     price: 200,
//     guests: 2,
//     description:
//       'A  beautiful room with a full size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
// ]; // end of rooms array

// fetch('js/properies.json')
//   .then((response) => response.json())
//   .then((data) => {
//     //console.log(data);
//     renderProperties(data);
//   });

// function renderProperties(properties) {
//   properties.forEach((room) => {
//     //create elements
//     const roomArticle = document.createElement('article');
//     roomArticle.classList.add('room');

//     const roomNameElement = document.createElement('h3');
//     roomNameElement.classList.add('room--name');
//     roomNameElement.textContent = room.name;

//     const roomDescriptionElement = document.createElement('p');
//     roomDescriptionElement.classList.add('room--description');
//     roomDescriptionElement.textContent = room.description;

//     const roomPriceElement = document.createElement('p');
//     roomPriceElement.textContent = `Price: $${room.price}`;

//     const roomGuestsElement = document.createElement('p');
//     roomGuestsElement.textContent = `Guests: ${room.guests}`;

//     roomArticle.appendChild(roomNameElement);
//     roomArticle.appendChild(roomDescriptionElement);
//     roomArticle.appendChild(roomPriceElement);
//     roomArticle.appendChild(roomGuestsElement);

//     document.body.appendChild(roomArticle);
//   }); // end of forEach
// } //end of renderProperties
