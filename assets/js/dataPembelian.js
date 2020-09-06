const getDataPembelian = async () =>{
    try {
        let response = await fetch('https://5f53a146e5de110016d51a8f.mockapi.io/dataPembelian')
        let result = await response.json();
        console.log(result);
        result.forEach(function (getData) {
            console.log(getData)
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
        });
    } catch (error) {
        console.log("maaf data yang anda cari tidak ditemukan")
    }
}

getDataPembelian();