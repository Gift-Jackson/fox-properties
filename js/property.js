const properties = [
    {
        "id": 0,
        "address": "123 Lakeview St",
        "unit": "Apt 101",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 112000,
        "image_links": "https://avatars.mds.yandex.net/i?id=9b14727ab72ca1f0bc938d2c19ba9393-5410274-images-thumbs&n=13"
    },
    {
        "id": 1,
        "address": "456 Lakeview Ave",
        "unit": "Unit B",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 132000,
        "image_links": "https://avatars.mds.yandex.net/i?id=a8eed5c602acfe70462132e687569b253ba2e7de-10727636-images-thumbs&n=13"
    },
    {
        "id": 2,
        "address": "789 Lakeview Blvd",
        "unit": "Unit 201",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 123000,
        "image_links": "https://avatars.mds.yandex.net/i?id=5babcca79807c6e1e9a7c9c267dc1cf5c8ff0ede-12445014-images-thumbs&n=13"
    },
    {
        "id": 3,
        "address": "321 Lakeview Ct",
        "unit": "Unit 301",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 2,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=fb42f5c16b68916680338166f5d0af56445c981a-11008180-images-thumbs&n=13"
    },
    {
        "id": 4,
        "address": "741 Lakeview Dr",
        "unit": "Unit 401",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": {
            "min": 120000,
            "max": 140000
        },
        "image_links": "https://avatars.mds.yandex.net/i?id=180670d8b070effd99927c09336cecebf478eabf-10157084-images-thumbs&n=13"
    },
    {
        "id": 5,
        "address": "852 Lakeview Ln",
        "unit": "Unit 501",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 112000,
        "image_links": "https://avatars.mds.yandex.net/i?id=c4d75473a11f4e4ce59f097174e2caddf73e293a-5232212-images-thumbs&n=13"
    },
    {
        "id": 6,
        "address": "963 Lakeview Loop",
        "unit": "Apt 601",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=20825f71789bae6dabbdf439445bbdcacd1f2396-12480039-images-thumbs&n=13"
    },
    {
        "id": 7,
        "address": "852 Lakeview Ln",
        "unit": "Unit 701",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 132000,
        "image_links": "https://avatars.mds.yandex.net/i?id=7fa12b0ce35e9ec754aa3a6b5a71cdc6685e7940-9840106-images-thumbs&n=13"
    },
    {
        "id": 8,
        "address": "741 Lakeview Dr",
        "unit": "Unit 801",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 123000,
        "image_links": "https://avatars.mds.yandex.net/i?id=6f6d6c0ef6fc96a87e765e267a1ed72fcf61b8d0-7549373-images-thumbs&n=13"
    },
    {
        "id": 9,
        "address": "963 Lakeview Loop",
        "unit": "Apt 901",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=84a1a22c5e59aa6536df74dba651387e9ee98950-11516533-images-thumbs&n=13"
    },
    {
        "id": 10,
        "address": "951 Lakeview Pkwy",
        "unit": "Unit 1001",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": {
            "min": 120000,
            "max": 140000
        },
        "image_links": "https://avatars.mds.yandex.net/i?id=781e3bbd9ff639c1c53a3e863b7183b59d086af9-10752576-images-thumbs&n=13"
    },
    {
        "id": 11,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1101",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 112000,
        "image_links": "https://avatars.mds.yandex.net/i?id=cb47fc633c4da747ef4f5050479f9d8133ffa7ab-8744212-images-thumbs&n=13"
    },
    {
        "id": 12,
        "address": "852 Lakeview Ln",
        "unit": "Unit 1201",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=74cf5cc601c4f554dec4710c9e97fd03f126a857-8216657-images-thumbs&n=13"
    },
    {
        "id": 13,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1301",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 132000,
        "image_links": "https://avatars.mds.yandex.net/i?id=def3658b8683878e748f5d8f51c682e232c72990-11271031-images-thumbs&n=13"
    },
    {
        "id": 14,
        "address": "741 Lakeview Dr",
        "unit": "Unit 1401",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 123000,
        "image_links": "https://avatars.mds.yandex.net/i?id=ce25da107c1d6bec8c163704ed8bb23513f9ec05-8474442-images-thumbs&n=13"
    },
    {
        "id": 15,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1501",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=14cc1a2b022ae76abda9153fb2d12a741d5813f2-10389657-images-thumbs&n=13"
    },
    {
        "id": 16,
        "address": "951 Lakeview Pkwy",
        "unit": "Unit 1601",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 140000,
        "image_links": "https://avatars.mds.yandex.net/i?id=c3b6177e10a721b6927a74cf2c47ce874a9818c1-12606366-images-thumbs&n=13"
    },
    {
        "id": 22,
        "address": "714 Thistlewood Dr",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 3,
        "price": 510000,
        "image_links": "https://photos.zillowstatic.com/fp/363849fd66657b0eeb3361390289ac33-p_e.jpg"
    },
    {
        "id": 23,
        "address": "9702 Pelsey St",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 405000,
        "image_links": "https://photos.zillowstatic.com/fp/e878a44011d3c156bff9b6804fdd0486-p_e.jpg"
    },
    {
        "id": 24,
        "address": "2324 Dryden Rd",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 3,
        "price": 1150000,
        "image_links": "https://photos.zillowstatic.com/fp/3f5b222ac4581d870472ac5546e7e365-p_e.jpg"
    },
    {
        "id": 25,
        "address": "6310 Kimball Mill Ln",
        "unit": "# S56W8O",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 4,
        "bath": 3,
        "price": 338900,
        "image_links": "https://maps.googleapis.com/maps/api/staticmap?mobile=false&sensor=true&maptype=satellite&size=575x242&zoom=17&center=29.870180130004883,-95.65099334716797&key=AIzaSyBJsNQO5ZeG-XAbqqWLKwG08fWITSxg33w&signature=MH8o1Fr6JbTmV6SM7xuzWPcZzEQ="
    },
    {
        "id": 26,
        "address": "130 Ben Dr",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 245000,
        "image_links": "https://photos.zillowstatic.com/fp/fc516e60c6786974c96f9c421312c708-p_e.jpg"
    },
    {
        "id": 27,
        "address": "The Huntley (5012) Plan, Riverstone Ranch - The Manor - Estate",
        "unit": "# S56W8O",
        "country": "USA",
        "state": "Texas",
        "city": "Pearland",
        "bed": 4,
        "bath": 4,
        "price": 512990,
        "image_links": "https://photos.zillowstatic.com/fp/38ce1a816411a467d3374a7c1c5dc8c6-p_e.jpg"
    },
    {
        "id": 28,
        "address": "8212-8212 8214 Knox St",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 490000,
        "image_links": "https://photos.zillowstatic.com/fp/13b61eb685dd3692ec3b19606c43b6ad-p_e.jpg"
    },
    {
        "id": 29,
        "address": "15614 Creekhaven Dr",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 4,
        "bath": 2,
        "price": 296900,
        "image_links": "https://photos.zillowstatic.com/fp/19fe4cc6c87010a23a98d7b78fc0cf06-p_e.jpg"
    },
    {
        "id": 31,
        "address": "15038 Wunderlust Ln",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 3,
        "price": 95000,
        "image_links": "https://photos.zillowstatic.com/fp/22f162759cd68d03f3ff149cc335061e-p_e.jpg"
    },
    {
        "id": 17,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1701",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 112000,
        "image_links": "https://avatars.mds.yandex.net/i?id=9968b8ea4d0f2e6903beec42a1d20ddd-4121129-images-thumbs&n=13"
    },
    {
        "id": 18,
        "address": "852 Lakeview Ln",
        "unit": "Unit 1801",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=8982d052c70d397146f1691f1cc50dc349955dc9-10401675-images-thumbs&n=13"
    },
    {
        "id": 19,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1901",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 132000,
        "image_links": "https://avatars.mds.yandex.net/i?id=07bed98c6d0c1d1d278a4cc33a28cbd316f8b660-9855155-images-thumbs&n=13"
    },
    {
        "id": 20,
        "address": "741 Lakeview Dr",
        "unit": "Unit 2001",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 123000,
        "image_links": "https://avatars.mds.yandex.net/i?id=0b0fc54a3cd8eea866435eddbac59d5f31975dad-12144750-images-thumbs&n=13"
    },
    {
        "id": 21,
        "address": "963 Lakeview Loop",
        "unit": "Apt 2101",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=d07210f5d8652bd29bb3244aadd3dd1a8edbf214-11481522-images-thumbs&n=13"
    },
    {
        "id": 71814795,
        "address": "250 Park Ave",
        "unit": "Unit 509",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 128900,
        "image_links": ["https://photos.zillowstatic.com/fp/0359969bc74c5d312ea6d8f9ad375d2a-p_e.jpg"]
    },
    {
        "id": 38,
        "address": "3403 Daphne St",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 4,
        "price": 384999,
        "image_links": [
            "https://photos.zillowstatic.com/fp/caa71e937c1f5e6de1f82ed1806f2e9f-p_e.jpg"
        ],
        "unit": "# B"
    },
    {
        "id": 39,
        "address": "9539 W Airport Blvd",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 318000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/8d60fd52dc3524faac0b96f1b7e0b11c-p_e.jpg"
        ],
        "unit": "Unit F"
    },
    {
        "id": 1783173,
        "address": "4335 4th Ave S",
        "unit": "Unit 1",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 5,
        "bath": 2,
        "price": 122900,
        "image_links": ["https://photos.zillowstatic.com/fp/2594dbd2ac82e61e2a0057da3734ecef-p_e.jpg"]
    },
    {
        "id": 71814595,
        "address": "401 1st St S",
        "unit": "# 412",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 115500,
        "image_links": ["https://photos.zillowstatic.com/fp/41117999a7ec49c14dd4deefa956ca1c-p_e.jpg"]
    },
    {
        "id": 2059516263,
        "address": "20 2nd St NE",
        "unit": "Unit P403",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 0,
        "bath": 1,
        "price": 149900,
        "image_links": ["https://photos.zillowstatic.com/fp/747185738ee13ee945ca2f618538e2f7-p_e.jpg"]
    },
    {
        "id": 1927722,
        "address": "1920 1st St S",
        "unit": "# 206",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 2,
        "price": 170000,
        "image_links": ["https://photos.zillowstatic.com/fp/edb504e555fba5e5d177c38b600bbb8c-p_e.jpg"]
    },
    {
        "id": 32,
        "address": "13803 Overbrook Ln",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 4,
        "bath": 2,
        "price": 125000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/6d892e9bd38c55e1ca113ecef068c567-p_e.jpg"
        ],
        "unit": "Unit A"
    },
    {
        "id": 33,
        "address": "310 Jensen Dr",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 4,
        "price": 589990,
        "image_links": [
            "https://photos.zillowstatic.com/fp/662ed0793e9162a48e3ed6fb2f65428d-p_e.jpg"
        ],
        "unit": "Unit B"
    },
    {
        "id": 34,
        "address": "6640 Lovers Ln",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 0,
        "bath": 0,
        "price": 110000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/e37f3087cec95e99aa268f32c9c22e97-p_e.jpg"
        ],
        "unit": "Unit C"
    },
    {
        "id": 35,
        "address": "7510 Shadyvilla Ln",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 2,
        "bath": 1,
        "price": 140000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/eec5042a7a219c5557bcb641db8ea36b-p_e.jpg"
        ],
        "unit": "Unit D"
    },
    {
        "id": 36,
        "address": "6238 Paisley St",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 550000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/d3888503df36baa45e0fb4bb8fbee032-p_e.jpg"
        ],
        "unit": "Apt. 101"
    },
    {
        "id": 37,
        "address": "15403 Palton Springs Dr",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 4,
        "bath": 2,
        "price": 339400,
        "image_links": [
            "https://photos.zillowstatic.com/fp/6ae0bfc864d0a0dfe8383bc9c65614b4-p_e.jpg"
        ],
        "unit": "Unit E"
    }
];

const houses = [...new Set(properties.map((item) => { return item }))];

let searchbar = document.getElementById("search").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = houses.filter((item) => {
        return item.state.toLowerCase().includes(searchData) || item.city.toLocaleLowerCase().includes(searchData);
    });

    displayItem(filterData);
})


// filter Buttons
const allBtn = document.querySelector(".all")
const texasBtn = document.querySelector(".texas")
const minnesotaBtn = document.querySelector(".minnesota")

allBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("search");
    searchBar.value = '';
    displayItem(houses);
});

texasBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("search");
    searchBar.value = 'Texas';
    filterData = houses.filter(item => item.state.includes('Texas'));
    displayItem(filterData);
});

minnesotaBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("search");
    searchBar.value = 'Minnesota';
    filterData = houses.filter(item => item.state.includes('Minnesota'));
    displayItem(filterData);
});


const f = new Intl.NumberFormat("en-US")


const displayItem = (items) => {
    const houseContainer = document.querySelector(".propertyContainer");

    if (items.length === 0) {
        houseContainer.innerHTML = "<p class='error'>Oops...property not found!</p>";
    } else {
        houseContainer.innerHTML = items.map((item) => {
            var { image_links, address, unit, country, state, city, price, bed, bath } = item;

            return (
                `
                <div class="property" data-aos="zoom-in" onclick="view(${item.id})">
            <img src="${image_links}" alt="${unit}">
            <div class="property-details">
                <h3 class="unit">${unit}</h3>
                <div class="flex">
                    <span class="material-symbols-rounded">
                        home_pin
                        </span>
                    <p class="address">${address}</p>
                </div>
                <div class="flex">
                    <span class="material-symbols-rounded">
                        home
                        </span>
                        <p><span class="country">${country}</span>, <span class="state">${state}</span>, <span class="city">${city}</span></p>
                </div>
                <div class="flex">
                    <span class="material-symbols-rounded">
                        sell
                        </span>
                    <p class="price">$${f.format(price)}</p>
                </div>
                <div class="amenities">
                    <div class="flex">
                        <span class="material-symbols-rounded">
                            bed
                            </span>
                        <p>Bed <span class="bed">${bed}</span></p>
                    </div>
                    <div class="flex">
                        <span class="material-symbols-rounded">
                            bathtub
                            </span>
                        <p>Bath <span class="bath">${bath}</span></p>
                    </div>
                </div>
            </div>
            <span class="status">For sale</span>
        </div>
        `
            );
        }).join('');
    }
};


function view(itemId) {
    // Retrieve the selected product based on the itemId
    const selectedProperty = properties.find(property => property.id === itemId);

    // Save the selected product to local storage
    localStorage.setItem("selectedProperty", JSON.stringify(selectedProperty));

    window.location.href = "../view_property.html";
}

displayItem(houses);
