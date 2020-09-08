const showPayment = async() =>{
    try {
        let dataPaket = JSON.parse(localStorage.getItem("dataPaket"));
        // console.log(dataPaket.id);
        // console.log(dataPaket.packageName);
        // console.log(dataPaket.price)
        document.getElementById('productName').innerHTML = dataPaket.packageName;
        document.getElementById('productPrice').innerHTML = dataPaket.price;
        document.getElementById('totalPrice').innerHTML = dataPaket.price;
        document.getElementById('proceed').addEventListener('click', function(){
            swal("Transaksi Berhasil" ,"" ,"success");
        })
    } catch (error) {
        alert("maaf terjadi error pada data yang anda inginkan")
    }
}

showPayment();