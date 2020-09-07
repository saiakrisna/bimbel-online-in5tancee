let main = document.getElementById("container")
main.innerHTML = `
<h1 id="welcome-main">SELAMAT DATANG DI !N5TACEE !</h1>
<p id="welcome-text">Wujudkan impianmu untuk masuk PTN, Sekolah Kedinasan, atau menjadi ASN bersama !N5TANCEE</p>
`

let paket = [
    {
        nama: "Paket Try Out UTBK",
        detail: "Untuk kalian yang ingin mengikuti 20x Try Out UTBK. Semakin sering berlatih semakin baik!",
        harga: 250000
    },
    {
        nama: "Paket Try Out Sekolah Kedinasan",
        detail: "Untuk kalian yang ingin mengikuti 20x Try Out Sekolah Kedinasan. Semakin sering berlatih semakin mantap!",
        harga: 250000
    },
    {
        nama: "Paket Try Out CPNS",
        detail: "Untuk kalian yang ingin mengikuti 5x Try Out CPNS. Asal tidak berbohong, kamu bisa menjadi ASN terbaik untuk negeri!",
        harga: 100000
    }
]

paket.forEach((paket) => {
    let card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 col-sm-12";
    card.innerHTML = `
    <div class="pricing-item">
        <div class="pricing-header">
            <h3 class="pricing-title">${paket.nama}</h3>
        </div>
        <div class="pricing-body">
            <div class="price-wrapper">
                <span class="currency">Rp.</span>
                <span class="price">${paket.harga}</span>
            </div>
            <div class="detail">
                <p class="detail-paket">${paket.detail}</p>
            </div>
        </div>
        <div class="pricing-footer">
            <a href="pembayaran.html" class="main-button">Beli Paket Belajar</a>
        </div>
    <div/>
    `;
    main.appendChild(card)
})