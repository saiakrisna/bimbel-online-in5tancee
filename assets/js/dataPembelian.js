const getDataPembelian = async () =>{
    try {
        let response = await fetch('https://5f53a146e5de110016d51a8f.mockapi.io/dataPembelian')
        let result = await response.json();
        // console.log(result);
        result.forEach(function (getData, index) {
            // console.log(getData)
                let div = document.createElement('div')
                div.className = "col-lg-4 col-md-6 col-sm-12";

                div.innerHTML = 
                '<div class="pricing-item">'+
                    '<div class="pricing-header">'+
                        '<h3 class="pricing-title">'+getData.packageName+'</h3>'+
                    '</div>'+
                    '<div class="pricing-body">'+
                        '<div class="price-wrapper">'+
                            '<span class="currency">Rp.</span>'+
                            '<span class="price">'+getData.price+'</span>'+
                        '</div>'+
                        '<ul class="list">'+
                            '<li class="active">'+getData.content1+'</li>'+
                            '<li class="active">'+getData.content2+'</li>'+
                            '<li class="active">'+getData.content3+'</li>'+
                            '<li class="active">'+getData.content4+'</li>'+
                            '<li class="active">'+getData.content5+'</li>'+
                            '<li class="active">'+getData.content6+'</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="pricing-footer">'+
                        '<a href="#" class="main-button">Beli Paket Belajar</a>'+
                    '</div>'+
                '</div>'
                document.getElementById('showPrice').appendChild(div)

                let purchaseButton = document.getElementsByClassName('main-button')[index];
                purchaseButton.addEventListener('click', function() {
                    // console.log(index, getData.packageName)

                    fetch(`https://5f53a146e5de110016d51a8f.mockapi.io/dataPembelian`)
                    .then((response) => response.json())
                    .then((result) =>{
                        let dataPaket = result.filter((data) => data.packageName === (index, getData.packageName))
                        // console.log("ini data price", price)
                        if(dataPaket.length > 0){
                            localStorage.setItem("dataPaket", JSON.stringify(dataPaket[0]));
                            window.location.replace("/pembayaran.html")
                        }
                    })
                });
                // console.log(purchaseButton);
        });
    } catch (error) {
        console.log("maaf data yang anda cari tidak ditemukan")
    }
}

getDataPembelian();

// const showPayment = async (packageName) =>{
//     let purchaseNow = document.getElementsByClassName('pricing-title')[0];
//     console.log(purchaseNow);
//     // console.log(packageName);
//     // purchaseNow[0];
//     // console.log(purchaseNow);
// }

// showPayment();