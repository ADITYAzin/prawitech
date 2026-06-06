Bagian 1: Strategi Design System
Prinsip Utama: "Less is More, but Impactful." Setiap elemen visual harus memiliki fungsi yang jelas, mengutamakan efisiensi navigasi, tanpa mengorbankan estetika premium.
1. Warna (Brand Identity)
Untuk menjaga konsistensi, warna hitam pekat (#000000) langsung digantikan dengan kode Dark Charcoal agar kontrasnya lebih lembut di mata.
#F4F7FB (Off-white / Background Utama): Gunakan sebagai warna latar belakang dominan. 
#0768FB (Vibrant Blue / Accent Color): Warna penarik perhatian. Hanya digunakan pada elemen interaktif utama 
#1A1A1A (Dark Charcoal / Text & Lines): Digunakan untuk seluruh tipografi utama dan garis pembatas (borders/dividers).
2. Aturan Kelengkungan (Border Radius Rules)
Gaya modern-minimalis mengandalkan kelengkungan yang konsisten (tidak terlalu kotak, tidak terlalu bulat) untuk menciptakan kesan tech-savvy yang ramah pengguna.
Sharp/Slight Radius (4px - 6px): Gunakan pada elemen mikro seperti checkbox, input field, tooltip, dan tags/badges.
Standard Radius (12px): The sweet spot untuk desain modern. Gunakan wajib pada Tombol CTA, kartu informasi (cards), dropdown menu, dan jendela pop-up/modal.
Large Radius (24px): Gunakan khusus untuk pembungkus konten besar (seperti area hero section atau banner container).
Full Radius (999px / Pill Shape): Khusus untuk tombol sekunder berbentuk kapsul, tombol pencarian, atau foto profil (avatar).
3. Tipografi
Batasi penggunaan font-family maksimal 2 jenis untuk menjaga kebersihan visual.
Font Header (Headline): Menggunakan Plus Jakarta Sans atau Space Grotesk.
Penerapan: Gunakan ketebalan Bold hingga Extra Bold dengan ukuran kontras yang ekstrem untuk menciptakan hierarki visual yang instan.
Font Body (Paragraf/Subheading): Menggunakan Poppins.
Penerapan: Ukuran minimal 16px dengan ketebalan Regular hingga Medium.
4. Aturan Nuansa & Efek Visual (Design Nuance Rules)
Catatan Penyelarasan: Neumorphism cenderung membuat desain terlihat kotor dan sulit diakses pada layar dengan kalibrasi rendah. Oleh karena itu, kita akan fokus pada Glassmorphism modern dengan soft ambient shadow agar tetap minimalis.
Modern Glassmorphism: Efek kaca transparan hanya digunakan pada elemen yang melayang (floating), seperti Navbar (saat di-scroll) atau Card overlay. Wajib menggunakan kombinasi backdrop-filter: blur(), transparansi latar belakang yang tipis, dan garis tepi (border) putih tipis (rgba(255,255,255,0.4)).
Modern Cursor Shadow Glow: Efek bayangan yang mengikuti kursor (ambient light tracking). Gunakan lingkaran besar dengan blur tinggi (minimal 150px) dan opasitas sangat rendah (3-5%) menggunakan warna biru #0768FB. Efek ini memberikan kesan futuristik yang subtil di latar belakang.
Micro-interactions & Hover: Animasi tidak boleh heboh atau memperlambat performa. Saat tombol di-hover, gunakan transisi halus (skala membesar maksimal 1.02x atau pergeseran warna bayangan yang lebih tegas dalam durasi 200ms).
Negative Space (Ruang Kosong): Berikan jarak padding dan margin yang longgar antar-seksi. Ruang kosong bukanlah ruang sia-sia, melainkan alat bantu agar mata pengguna bisa beristirahat dan fokus pada informasi penting.
5. Aturan Spacing & Breakpoint (Responsive Layout)
Sistem ini menggunakan 3 breakpoint utama untuk memastikan transisi tata letak berjalan mulus dari layar terkecil hingga terbesar.
A. Definisi Breakpoint
Mobile (Layar HP): < 768px
Tablet (Layar iPad/Tablet): 768px - 1199px
Desktop (Layar Laptop/Monitor): ≥ 1200px (Maksimal lebar konten/Max-width: 1440px)

b. Panduan Spacing Padding & Margin
Posisi Spacing
Mobile (< 768px)
Tablet (768px - 1199px)
Desktop (≥ 1200px)
Tujuan Visual
Container Padding (Jarak kiri-kanan halaman)
16px atau 24px
40px
80px sampai 120px
Mencegah konten menempel ke ujung layar gadget.
Section Spacing (Jarak vertikal antar-seksi)
64px
96px
128px sampai 160px
Implementasi Negative Space agar web terlihat "bernafas" dan mewah.
Card Padding (Padding dalam kotak/kartu)
16px
24px
32px
Menjaga keterbacaan teks di dalam elemen kotak.
Component Gap (Jarak antar elemen mikro/tombol)
12px atau 16px
16px
24px
Jarak ideal antara judul ke paragraf, atau tombol utama ke tombol sekunder.

C. Aturan Penerapan (Implementation Rules)
Prinsip Fluidity: Untuk jarak antar-seksi (Section Spacing), sangat disarankan menggunakan satuan dinamis seperti clamp() pada CSS (misal: padding-block: clamp(64px, 8vw, 140px)). Ini membuat jarak mengecil dan membesar secara otomatis dan halus tanpa patahan yang kasar saat layar di-resize.
Touch Target (Mobile): Khusus pada breakpoint Mobile, pastikan elemen interaktif yang berdekatan (seperti deretan link atau menu footer) memiliki gap minimal 16px atau area sentuh minimal 48px agar tidak terjadi salah klik oleh jari pengguna.
Consistency over Perfection: Jangan gunakan angka ganjil atau angka di luar kelipatan 8 (seperti 13px, 21px, 55px) hanya untuk mencocokkan elemen secara paksa. Gunakan skala dasar: 8px / 16px / 24px / 32px / 48px / 64px / 96px / 128px / 160px.
