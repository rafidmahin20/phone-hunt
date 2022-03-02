const allPhones = () => {
    const searchValue = document.getElementById('search-box').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => showPhoneDetails(data.data))
}

const showPhoneDetails = (data) => {
    for(const phonedata of data) {
        const parent = document.getElementById('phone-container');

        const div = document.createElement('div');
        div.innerHTML = `<div class="card border p-5">
        <div class="pro-pic">
            <img class="w-25" src="${phonedata.image}" alt="">
        </div>
        <h3>Model: ${phonedata.phone_name}</h3>
        <h4>Brand: ${phonedata.brand}</h4>
        <div>
            <button type="button" class="btn btn-success" onclick="details('${phonedata.slug}')">Details</button>
        </div>
        </div>`
        parent.appendChild(div);
        console.log(data);
    }
}

const details = (info) => {
    const url = `https://openapi.programming-hero.com/api/phone/${info}`

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}