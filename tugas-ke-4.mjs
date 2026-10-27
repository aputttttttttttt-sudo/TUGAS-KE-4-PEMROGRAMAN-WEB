// 1. Array of Objects: Data Transaksi Belanja
const transaksi = [
    { id: 1, barang: "Laptop", harga: 7500000, qty: 1, kategori: "Elektronik" },
    { id: 2, barang: "Mouse", harga: 150000, qty: 2, kategori: "Elektronik" },
    { id: 3, barang: "Keyboard", harga: 350000, qty: 1, kategori: "Elektronik" },
    { id: 4, barang: "Buku Tulis", harga: 5000, qty: 10, kategori: "Alat Tulis" },
    { id: 5, barang: "Pulpen", harga: 3000, qty: 5, kategori: "Alat Tulis" },
    { id: 6, barang: "Tas", harga: 200000, qty: 1, kategori: "Aksesoris" }
];

// 2. Menyaring transaksi berdasarkan kategori menggunakan filter()
// Menggunakan arrow function dan destructuring
const kategoriPilihan = "Elektronik";

const transaksiTerpilih = transaksi.filter(
    ({ kategori }) => kategori === kategoriPilihan
);

// 3. Menghitung subtotal setiap barang menggunakan map()
// Rumus: subtotal = harga * qty
const dataSubtotal = transaksiTerpilih.map(
    ({ id, barang, harga, qty, kategori }) => ({
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    })
);

// 4. Menghitung total keseluruhan menggunakan reduce()
const totalKeseluruhan = dataSubtotal.reduce(
    (total, { subtotal }) => total + subtotal,
    0
);

// 5. Menampilkan hasil pemrosesan data
console.log("==================================");
console.log("       LAPORAN TRANSAKSI BELANJA");
console.log("==================================");
console.log(`Kategori: ${kategoriPilihan}`);
console.log("----------------------------------");

dataSubtotal.forEach(
    ({ id, barang, harga, qty, subtotal }) => {
        console.log(`ID       : ${id}`);
        console.log(`Barang   : ${barang}`);
        console.log(`Harga    : Rp${harga.toLocaleString("id-ID")}`);
        console.log(`Qty      : ${qty}`);
        console.log(`Subtotal : Rp${subtotal.toLocaleString("id-ID")}`);
        console.log("----------------------------------");
    }
);

console.log(
    `TOTAL KESELURUHAN: Rp${totalKeseluruhan.toLocaleString("id-ID")}`
);
console.log("==================================");
