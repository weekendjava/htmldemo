const productSection = document.querySelector('.product-section');

const generateUserCard = (user) => {
    return `<div class="product-card">
    <img src="${user.avatar_url}">
    <h1>${user.login}</h1>
    <a href="${user.html_url}">Visit Profile</a>
  </div>`;
}

const getUsers = async () => {
    const userResponse = await fetch('https://api.github.com/users');
    const users = await userResponse.json();
    const userArray = users.map((item) => {
        console.log('item--->', item);
        return generateUserCard(item);
    });
    productSection.innerHTML = userArray;
}

getUsers();





// console.log(document);
// // step 1 --->get element in js
// const link = document.querySelector('#home');
// const dropDown = document.querySelector('.dd-menu');
// const heading = document.querySelector('#heading');

// let isDropDownHidden = true;
// link.addEventListener('click', (e) => {
//     if(isDropDownHidden){
//         dropDown.classList.remove('hide');
//         isDropDownHidden = false;
//     } else{
//         dropDown.classList.add('hide');
//         isDropDownHidden = true;
//     }
// });

// heading.innerHTML = '<h1> heading from js </h1>';


// const product = [{
//     imgUrl: './81fDfURaBKL._UY500_.jpg',
//     title: 'Titan Watch',
//     description: 'Watch from js',
//     buyLink: 'https://www.google.com/'
// }, {
//     imgUrl: './a1486-casio-original-imaf8gtgzftcbhbe.jpg',
//     title: 'Casio ವೀಕ್ಷಿಸಿ',
//     description: 'Casir Watch lksdjfklsjdklfj sdlkfjskldj fsdlkfjskldfj ',
//     buyLink: 'https://www.google.com/'
// }, {
//     imgUrl: './81fDfURaBKL._UY500_.jpg',
//     title: 'Casio Watch',
//     description: 'Watch from js',
//     buyLink: 'https://www.google.com/'
// }]

// const productSection = document.querySelector('.product-section');

// const generateProductCard = (product) => {

//     return `<div class="product-card">
//     <img src="${product.imgUrl}">
//     <h1>${product.title}</h1>
//     <p>${product.description}</p>
//     <a href="${product.buyLink}">Buy Now</a>
//   </div>`;
// }

// const op = product.map((item) => {

//     return generateProductCard(item);
// });

// productSection.innerHTML = op;
