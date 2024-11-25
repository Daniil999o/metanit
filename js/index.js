let text1 = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cars Test</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script type="module" src="../frontend/main.js" defer></script>
</head>
<body>
    <div class="container">
        <h1 class="m-3">Car List</h1>

        <form class="row g-3" id="carForm">
            <div class="col-md-6">
              <label for="inputName" class="form-label">Name</label>
              <input type="text" class="form-control" id="inputName">
            </div>
            <div class="col-md-6">
              <label for="inputPrice" class="form-label">Price</label>
              <input type="number" class="form-control" id="inputPrice">
            </div>
            <div class="col-12">
              <label for="inputDescription" class="form-label">Description</label>
              <input type="text" class="form-control" id="inputDescription">
            </div>
            <div class="col-12">
              <label for="inputImg" class="form-label">Image URL</label>
              <input type="text" class="form-control" id="inputImg" placeholder="URL">
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>

          <div class="row mt-5 mb-2" id="carList">
            
          </div>
    </div>
</body>
</html>`;

document.getElementById("htmlCode1").innerText = text1;


let text2 = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Car</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script type="module" src="../../frontend/singlecar.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img class="img-fluid rounded-start" id="carImg">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" id="carName">Name</h5>
                  <p class="card-text" id="carDescription">Description</p>
                  <p class="card-text"><small class="text-body-secondary" id="carPrice">Price: <b>$10</b></small></p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" class="btn btn-primary" style="background-color: red;" id="backBtn">Back</button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit card</h1>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="car-name" class="col-form-label">Name</label>
                <input type="text" class="form-control" id="car-name">
              </div>
              <div class="mb-3">
                <label for="car-price" class="col-form-label">Price</label>
                <input type="number" class="form-control" id="car-price">
              </div>
              <div class="mb-3">
                <label for="car-description" class="col-form-label">Description</label>
                <input type="text" class="form-control" id="car-description">
              </div>
              <div class="mb-3">
                <label for="car-img" class="col-form-label">Image URL</label>
                <input type="text" class="form-control" id="car-img" placeholder="URL">
              </div>
            </form>
          </div>
          <div class="modal-footer"> <!-- btn-close -->
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="saveBtn">Save</button>
          </div>
        </div>
      </div>
    </div>
</body>
</html>`;

document.getElementById("htmlCode2").innerText = text2;


let text3 = `export function createItem(name, description, price, img) {
    const item = document.createElement('div');
    item.classList.add('card');
    item.style.width = '18rem';

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardName = document.createElement('h5');
    cardName.classList.add('card-title');

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-text');

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text');

    const editBtn = document.createElement('a');
    editBtn.classList.add('btn', 'btn-primary');
    editBtn.textContent = 'More';

    const deleteBtn = document.createElement('a');
    deleteBtn.classList.add('btn', 'btn-primary');
    deleteBtn.style.backgroundColor = 'red';
    deleteBtn.textContent = 'Delete';
    
    cardName.textContent = name;
    cardDescription.textContent = description;
    cardPrice.innerHTML = \`Price: <b>$\${price}</b>\`;
    cardImg.src = img;

    cardBody.append(cardName, cardDescription, cardPrice, editBtn, deleteBtn);
    item.append(cardImg, cardBody);

    return {item, editBtn, deleteBtn};
}`;

document.getElementById("jsCode1").innerHTML = text3;


let text4 = `import { getAllCars, addCar, deleteCar } from "../requests/car.requests.js";
import { createItem } from "./components/item.js";

let carsContainer = document.getElementById('carList');

async function generateElements() {
    const cars = await getAllCars();

    carsContainer.innerHTML = '';
    
    cars.forEach((x) => {
        const {item, editBtn, deleteBtn} = createItem(x.name, x.description, x.price, x.img);

        carsContainer.append(item);

        editBtn.addEventListener('click', ()=>{
            window.location.href = \`/car/\${x.id}\`;
        });

        deleteBtn.addEventListener('click', ()=> {
            if (confirm('Are you sure you want to delete this car?')) {
                deleteCar(x.id);

                generateElements();
                return;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', async (e) => {
    await generateElements();

    const form = document.getElementById('carForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const carName = document.getElementById('inputName').value;
        const carDescription = document.getElementById('inputDescription').value;
        const carPrice = document.getElementById('inputPrice').value;
        const carImg = document.getElementById('inputImg').value;

        await addCar(carName, carDescription, carPrice, carImg);
        generateElements();
    });
});`;

document.getElementById("jsCode2").innerHTML = text4;


let text5 = `import { getOneCar, updateCar } from "../requests/car.requests.js";

let carId = window.location.pathname.split('/').pop();

document.addEventListener('DOMContentLoaded', async ()=>{
    document.getElementById('saveBtn').addEventListener('click', async (e)=>{
        e.preventDefault();

        await updateThisCar();
    });

    document.getElementById("backBtn").addEventListener('click', backToCars);

    await updateInfo();
});

function backToCars() {
    window.location.href = '/';
}

async function updateInfo() {
    const result = await getOneCar(carId);

    const car = result[0];

    document.getElementById('carName').textContent = car.name;
    document.getElementById('carPrice').innerHTML = \`Price: <b>$\${car.price}</b>\`;
    document.getElementById('carDescription').textContent = car.description;
    document.getElementById('carImg').src = car.img;

    document.getElementById('car-name').value = car.name;
    document.getElementById('car-price').value = car.price;
    document.getElementById('car-description').value = car.description;
    document.getElementById('car-img').value = car.img;
}

async function updateThisCar() {
    const carName = document.getElementById('car-name').value;
    const carPrice = document.getElementById('car-price').value;
    const carDescription = document.getElementById('car-description').value;
    const carImg = document.getElementById('car-img').value;

    await updateCar(carId, carName, carDescription, carPrice, carImg);

    await updateInfo();
}`;

document.getElementById("jsCode3").innerHTML = text5;

try {
  document.addEventListener('DOMContentLoaded', (event) => {
      const codeElements = document.querySelectorAll('code');

      codeElements.forEach(element => {
          let unformattedCode = element.textContent;
          let formattedCode;
          let language = element.classList[0]; // Получаем язык из class

          if (language === 'language-html') {
              formattedCode = prettyHtml(unformattedCode, {/*options*/}); // или html_beautify
          } else if (language === 'language-sql') {
              formattedCode = sqlFormatter.format(unformattedCode);
          } else {
              formattedCode = js_beautify(unformattedCode, {/*options*/});
          }
          element.textContent = formattedCode;
      });
  });
} catch {
  console.log("Error");
}

hljs.highlightAll();