window.addEventListener("scroll" , (event) => {
    let faqSec = document.querySelector(".faq-sec");
    let contentPosition = faqSec.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/2;
    if(contentPosition < screenPosition) {
        faqSec.classList.add("active");
    }else{
        faqSec.classList.remove("active");
    }
})


// header 
let bar = document.querySelector(".bar");
let cross = document.querySelector(".cross");

bar.addEventListener("click" , (event)=>{
    console.log(event.target)
    cross.classList.remove("display-none");
    bar.classList.add("display-none");
})

cross.addEventListener("click" , (event)=>{
    console.log(event.target)
    bar.classList.remove("display-none");
    cross.classList.add("display-none");
})


// bikes container
let bikesContainer = document.querySelector(".bikes-container");
const bikeFilter = document.querySelector(".search");

bikeFilter.addEventListener("input" , (event) => {
    let value = event.target.value.toLowerCase();
    console.log(value)
    let filterArr = bikesArr.filter(elm => elm.name.toLowerCase().includes(value))
    console.log(filterArr)
    createUi(filterArr);
})

function createUi(bikesArr=bikesArr) {
    let bikesArrCards = bikesArr.map((bike ,index)=> {
        return `
            <article>
                <div class="font-0"><img src=${bike.imgUrl} class="img" alt="royalEnfield"></div>
                <h3>${bike.name}</h3>
                <div class="flex flex-column card-text">
                    <div class="flex justify-flex-between border-bottom">
                        <p>Min. Booking</p>
                        <p>5 hr min</p>
                        <p class="price">${bike.minBookRate}</p>
                    </div>
                    <div class="flex justify-flex-between border-bottom">
                        <p>Hourly Rate</p>
                        <p>After 5 hr</p>
                        <p class="price">${bike.extraRate}</p>
                    </div>
                    <div class="flex justify-flex-between border-bottom">
                        <p>Online Special</p>
                        <p>10%</p>
                        <p class="price">First Ride</p>
                    </div>
                </div>
                <a href="#"  class="btn book-btn" data-id=${index}>Book now</a>
            </article>
            `
    }).join("") 
    bikesContainer.innerHTML = bikesArrCards;
}
createUi(bikesArr);


// model of bike section
let overlay = document.querySelector(".overlay");
bikesContainer.addEventListener("click" , (event) =>{
    overlay.innerHTML = ""
    if(event.target.classList.contains("book-btn")){
        let dataId = event.target.dataset.id
        overlay.innerHTML = `<article class="container relative">
        <aside class="grid template-column-2 gap">
        <div class="font-0">
        <img src=${bikesArr[dataId].imgUrl} alt="bike img" class="img">
        </div>
        <div class="font-0">
        <img src="./assets/imgs/qrcode.jpg" class="img" alt="qr code img">
        </div>
        </aside>
        <section class="grid template-column-2 gap">
        <div class="bike-details">
        <h3><span>Bike Name</span>${bikesArr[dataId].name}</h3>
        <h3><span>Payment Ammount</span> ${bikesArr[dataId].minBookRate}</h3>
        <div>
        <h2>Payment mode</h2>
        <p> You can scan QR Code otherwise you can pay by UPI.  UPI  is give Below</p>
        <p class="upi-id">9389732668@ybl</p>
        </div>
        </div>
        <form action="">
        <h2> Fill the form Before Payment </h2>
        <input type="text" placeholder="User Name" class="control-form" required>
        <input type="number" class="control-form" placeholder="Mobile  Number" required >
        <input type="email" placeholder="Your Email"  class="control-form" require>
        <label for="file"  class="control-form">Add Driving Licence Image</label>
        <input type="file" id="file" class="display-none" required>
        <button>Submit</button>
        </form>
        </section>
        <p class="close absolute"><i class="fas fa-times"></i></p>
        </article>`;
        overlay.classList.toggle("display-none");
        document.querySelector(".close").addEventListener("click", (event)=> {
            overlay.classList.toggle("display-none");
        })
    }
})

// filter bike 

