import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Facebook, Instagram } from "lucide-react";
import { BsThreads } from "react-icons/bs";

export const DATA = {
  name: "Aji Maulana",
  initials: "DV",
  url: "https://estech-mauve.vercel.app/",
  location: "Surakarta, Indonesia",
  locationLink: "https://g.co/kgs/AY2Q67h",
  description:
    "<mark>Full-Stack Developer</mark> dengan pengalaman <mark>1 tahun</mark> serta <mark>5 bulan automation dengan n8n</mark>. Memiliki antusiasme pada bidang <mark>Machine Learning</mark> dan <mark>Cloud Computing</mark> untuk memecahkan berbagai permasalahan nyata.",
  summary:
    "Seorang Fullstack Web Developer dan Automation Engineer dengan pengalaman lebih dari 1 tahun menggunakan Next.js serta lebih dari 5 bulan dalam membangun workflow otomatisasi menggunakan n8n. Telah menyelesaikan 10+ proyek yang meliputi pengembangan web, integrasi API, dan sistem automasi. Pernah magang sebagai Fullstack Web Developer Intern di PT Prima Paper Indonesia, serta memiliki pengalaman kerja tambahan di Politeknik Pratama Mulia Surakarta. Juga telah menangani berbagai proyek freelance. Lulusan Bangkit Academy Machine Learning Track, dengan proyek capstone yang meraih peringkat 50 dari 300 peserta, menggunakan Python, TensorFlow, scikit-learn, dan berbagai library pemrosesan data. Berpengalaman pula dalam mengembangkan model machine learning untuk deteksi hoaks di dunia nyata. Dengan kombinasi keahlian di Next.js, n8n, dan machine learning, dikenal sebagai pembelajar cepat yang mampu membangun solusi digital yang efisien, skalabel, dan berdampak.",
  avatarUrl: "/me.jpg",
  skills: [
    "n8n",
    "Next.js",
    "React.js",
    "TailwindCSS",
    "Express.js",
    "Laravel",
    "Tensorflow",
    "Python"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aji658911@gmail.com",
    tel: "+6285175434869",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ajimaulana123",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aji-maulana-0bb20921b",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100051526432299&locale=id_ID",
        icon: Facebook,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "aji658911@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Automated Candidate Assessment",
      logoUrl: "",
      start: "20 November 2025",
      end: "20 Desember 2025",
      description:
        "Membangun dan mengembangkan workflow n8n untuk mengotomatisasi proses penerimaan kandidat, mulai dari pengumpulan data, analisis CV, penilaian kecocokan, hingga pelaporan hasil.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "https://youtu.be/JrSkkdsUK-0?si=DhsbM4nBx5KjqdGz",
      location: "Remote",
      title: "E-commerce via Telegram",
      logoUrl: "",
      start: "1 Agustus 2025",
      end: "2 September 2025",
      description:
        "Membangun, mengembangkan workflow n8n untuk Toko Online via Telegram.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Otomatisasi Post Content Blogger",
      logoUrl: "",
      start: "1 Agustus 2025",
      end: "2 Agustus 2025",
      description:
        "Membangun, mengembangkan workflow n8n untuk otomatisasi post content ke website Blogger.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "https://sekull-inventory.vercel.app/",
      location: "Remote",
      title: "Inventory Sekolah",
      logoUrl: "",
      start: "1 Agustus 2025",
      end: "25 Agustus 2025",
      description:
        "Membangun, mengembangkan website inventory sekolah.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Otomatisasi Post Content Wordpress",
      logoUrl: "",
      start: "1 mei 2025",
      end: "1 Juli 2025",
      description:
        "Membangun, mengembangkan workflow n8n untuk otomatisasi post content ke website Wordpress.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "https://meat-commerce-seven.vercel.app/",
      location: "Remote",
      title: "E-Comerce Daging",
      logoUrl: "",
      start: "1 April 2025",
      end: "1 Mei 2025",
      description:
        "Membangun, mengembangkan Toko Online yang berfokus pada penjualan daging.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "https://warung-digital-kasir-oom.vercel.app/",
      location: "Remote",
      title: "Kasir Digital",
      logoUrl: "/kasir-digital.png",
      start: "1 mei 2025",
      end: "1 Juli 2025",
      description:
        "Membangun, mengembangkan, website kasir digital.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "https://marble-theta.vercel.app/",
      location: "Remote",
      title: "Marbel",
      logoUrl: "",
      start: "1 mei 2025",
      end: "1 Juli 2025",
      description:
        "Membangun, mengembangkan, website Marbel.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "https://posyandu-9jko.vercel.app/",
      location: "Remote",
      title: "Posyandu",
      logoUrl: "",
      start: "1 mei 2025",
      end: "1 Juli 2025",
      description:
        "Membangun, mengembangkan, website posyandu.",
    },
    {
      company: "PT. Prima Paper Indonesia",
      badges: [],
      href: "#",
      location: "Hybrid",
      title: "Company Profile & System Management HRD",
      logoUrl: "https://bursakerja.jatengprov.go.id/assets/images/penyedias/PAS_44670f0fc6a813f4523459a71e81b885.jpg",
      start: "1 Februari 2025",
      end: "1 Juli 2025",
      description:
        "Membangun, mengembangkan, dan memantau website Company Profile & System Management HRD.",
    },
    {
      company: "Akreditasi Kampus",
      badges: [],
      href: "https://akreditasi-6c3jsmx6f-tamakuz.vercel.app/",
      location: "On site",
      title: "Akreditasi Jurusan",
      logoUrl: "/mi.png",
      start: "Agustus 2023",
      end: "November 2023",
      description:
        "Membangun, mengembangkan, dan memantau website akreditasi untuk Manajemen Informatika menggunakan 𝗘𝘅𝗽𝗿𝗲𝘀𝘀.𝗷𝘀 dan 𝗥𝗲𝗮𝗰𝘁.𝗷𝘀.",
    },
    {
      company: "Bangkit Academy",
      badges: [],
      href: "https://grow.google/intl/id_id/bangkit/",
      location: "Remote",
      title: "Cloud Computing Cohort",
      logoUrl: "/bangkit.png",
      start: "Februari 2024",
      end: "Juli 2024",
      description:
        "Mempelajari dan mengimplementasikan 𝗡𝗼𝗱𝗲.𝗷𝘀, 𝗘𝘅𝗽𝗿𝗲𝘀𝘀.𝗷𝘀, dan layanan 𝗚𝗼𝗼𝗴𝗹𝗲 𝗖𝗹𝗼𝘂𝗱 𝗖𝗼𝗺𝗽𝘂𝘁𝗶𝗻𝗴 untuk melakukan 𝗱𝗲𝗽𝗹𝗼𝘆 𝗔𝗣𝗜 berbasis 𝗖𝗜/𝗖𝗗. Meningkatkan pengetahuan dalam 𝗰𝗹𝗼𝘂𝗱 𝗰𝗼𝗺𝗽𝘂𝘁𝗶𝗻𝗴 dan mengerjakan 𝗽𝗿𝗼𝘆𝗲𝗸 𝗰𝗮𝗽𝘀𝘁𝗼𝗻𝗲 yang menerapkan teknik 𝗱𝗲𝗽𝗹𝗼𝘆 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗼𝗻 untuk menyelesaikan masalah dunia nyata, mengoptimalkan 𝗸𝗶𝗻𝗲𝗿𝗷𝗮 dan 𝗸𝗲𝗺𝗮𝗺𝗽𝘂𝗮𝗻 𝘀𝗰𝗮𝗹𝗮𝗯𝗶𝗹𝗶𝘁𝘆.",
    },
    {
      company: "JuaraGCP Participant",
      badges: [],
      href: "https://www.cloudskillsboost.google/",
      location: "Remote",
      title: "JuaraGCP Participant",
      logoUrl: "/gcsb.svg",
      start: "Agustus 2024",
      end: "September 2024",
      description:
        "Melalui #JuaraGCP, saya dapat mengeksplorasi lab Google Cloud yang mencakup berbagai topik, termasuk AI/ML, Infrastruktur, dan Keamanan. Saya juga mempelajari cara memanfaatkan teknologi AI tingkat lanjut melalui lab khusus yang ditawarkan. Selain itu, saya memperoleh pengalaman praktis yang secara signifikan meningkatkan keterampilan saya.",
    },
    {
      company: "Bangkit Academy",
      badges: [],
      href: "https://grow.google/intl/id_id/bangkit/",
      location: "Remote",
      title: "Machine Learning Cohort",
      logoUrl: "/bangkit.png",
      start: "September 2024",
      end: "Januari 2025",
      description:
        "Mempelajari dan mengimplementasikan 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴 menggunakan 𝗧𝗲𝗻𝘀𝗼𝗿𝗙𝗹𝗼𝘄 untuk mengembangkan 𝗺𝗮𝗰𝗵𝗶𝗻𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗺𝗼𝗱𝗲𝗹𝘀. Meningkatkan pengetahuan dalam bidang 𝗺𝗮𝗰𝗵𝗶𝗻𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 dan mengerjakan 𝗽𝗿𝗼𝘆𝗲𝗸 𝗰𝗮𝗽𝘀𝘁𝗼𝗻𝗲 yang menerapkan 𝗮𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗮𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺𝘀 untuk menyelesaikan masalah dunia nyata, mengoptimalkan kinerja dan skalabilitas.",
    }
  ],
  education: [
    {
      school: "Politama",
      href: "http://politama.ac.id/",
      degree: "D3 Manajemen Informatika",
      logoUrl: "/politama.png",
      start: "2022",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "Automated Candidate Assessment",
      href: "#",
      dates: "2 November - 20 Desember 2025",
      active: true,
      description:
        "Proyek ini merupakan sistem otomatisasi rekrutmen berbasis workflow n8n yang menangani seluruh proses penilaian kandidat secara end-to-end. Sistem ini menerima data pelamar beserta CV dari website, melakukan konversi CV (PDF) menjadi teks, mengambil data lowongan yang relevan, dan melakukan analisis kecocokan kandidat menggunakan AI berdasarkan kriteria posisi yang dilamar. Hasil analisis kemudian disimpan ke database, CV diunggah ke Supabase Storage, dan sistem mengembalikan status kelulusan kandidat (lolos atau tidak lolos) ke website. Selain itu, workflow juga menghasilkan ringkasan evaluasi serta mengirimkan notifikasi otomatis ke tim HR melalui Telegram. Solusi ini dirancang untuk mempercepat proses screening awal, mengurangi pekerjaan manual HR, dan memastikan proses seleksi berlangsung secara konsisten, efisien, dan dapat di-scale tanpa menambah biaya operasional.",
      technologies: [
        "n8n",
        "Cloudflare Tunnel"
      ],
      type: "n8n",
       links: [
      ],
      image: "/ai-hr.png",
      video: "",
    },
    {
      title: "E-commerce via Telegram",
      href: "https://youtu.be/JrSkkdsUK-0?si=DhsbM4nBx5KjqdGz",
      dates: "1 Agustus - 1 September 2025",
      active: true,
      description:
        "Proyek ini merupakan sistem e-commerce berbasis bot Telegram yang menyediakan fitur login pengguna, melihat dan memfilter produk berdasarkan nama, pagination untuk navigasi, penambahan produk ke keranjang, checkout, pembayaran manual, konfirmasi pembayaran dengan bukti transfer, serta pengiriman resi JNE. Penggunaan Telegram sebagai platform dipilih karena menawarkan akses instan tanpa instalasi aplikasi tambahan, notifikasi real-time, antarmuka yang ringan dan mudah digunakan, serta biaya operasional yang rendah. Selain itu, Telegram sudah banyak digunakan di berbagai kalangan, menjadikannya platform yang efisien dan praktis untuk memperluas jangkauan bisnis secara digital, terutama bagi pelaku UMKM yang ingin memulai toko online dengan cepat dan sederhana.",
      technologies: [
        "n8n",
        "sumopod"
      ],
      type: "n8n",
       links: [
        {
          type: "Website",
          href: "https://youtu.be/JrSkkdsUK-0?si=DhsbM4nBx5KjqdGz",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/ecommerce-workflow.jpg",
      video: "",
    },
    {
      title: "Otomatisasi Post Content Blogger",
      href: "#",
      dates: "1 Agustus - 2 Agustus 2025",
      active: true,
      description: "Dengan adanya otomatisasi ini, pelaku pemilik Blogger bisa posting content hanya bermodalkan upload foto thumbnail dan body kemudian peritah singkat isi text content dan secara otomaris content tersebut terbit diakun pemilik Blogger.",
      technologies: [
        "n8n",
        "sumopod"
      ],
      type: "n8n",
       links: [
      ],
      image: "/n8n-wordperss.jpg",
      video: "",
    },
    {
      title: "Inventory Sekolah",
      href: "https://sekull-inventory.vercel.app/",
      dates: "1 agustus 2025 - 20 Agustus 2025",
      active: true,
      description:
        "Website Manajemen Aset Sekolah adalah platform berbasis web yang dirancang untuk mempermudah pengelolaan dan pelacakan aset sekolah secara digital. Melalui sistem ini, admin dapat melakukan pencatatan inventaris barang, edit dan hapus, pencarian cepat, dan pagination untuk navigasi data yang lebih efisien. Tersedia juga fitur import data dari file Excel, sehingga proses input data dalam jumlah besar menjadi lebih praktis. Halaman dashboard menyajikan ringkasan data aset secara real-time, sementara halaman laporan memungkinkan pengguna mengekspor data dalam format PDF, Excel, atau CSV untuk keperluan dokumentasi dan audit. Cocok digunakan oleh sekolah untuk meningkatkan efisiensi, transparansi, dan akurasi dalam manajemen aset! 🎒🏫📋",
      technologies: [
        "Next.Js",
        "Firebase"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://sekull-inventory.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/inventory-sekull.png",
      video: "",
    },
    {
      title: "Posyandu",
      href: "https://posyandu-9jko.vercel.app/",
      dates: "1 Mei - 1 Juli 2025",
      active: true,
      description:
        "Website Posyandu Digital adalah platform berbasis web yang dirancang untuk memudahkan pencatatan, monitoring, dan pelaporan kegiatan Posyandu secara digital. Melalui website ini, kader Posyandu dapat mencatat data ibu hamil, balita, imunisasi, serta perkembangan gizi dengan lebih rapi dan efisien. Fitur-fitur seperti dashboard data warga, jadwal kegiatan, dan laporan otomatis membantu meningkatkan pelayanan kesehatan masyarakat secara transparan dan terstruktur. Cocok digunakan di tingkat RT/RW hingga kelurahan! 🧑‍⚕️👶📊",
      technologies: [
        "Next.Js",
        "Firebase"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://posyandu-9jko.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/posyandu.png",
      video: "",
    },
    {
      title: "E-commerce Daging",
      href: "https://meat-commerce-seven.vercel.app/",
      dates: "1 April - 1 Mei 2025",
      active: true,
      description:
        "Dengan adanya website ini, pelaku pemilik tokop daging bisa memasarkan para pemilik toko daging dapat memasarkan produk mereka secara lebih luas dan efisien. Pelanggan dapat melihat katalog produk, mengecek ketersediaan stok, dan melakukan pemesanan langsung melalui website tanpa harus datang ke toko secara fisik. Hal ini tidak hanya meningkatkan jangkauan pasar, tetapi juga memberikan kemudahan bagi pembeli dalam memenuhi kebutuhan sehari-hari Website ini juga mendukung integrasi dengan fitur komunikasi seperti WhatsApp, serta menyediakan dashboard admin yang memudahkan pelaku usaha dalam mengelola produk, pesanan, dan laporan penjualan secara real-time.",
      technologies: [
        "Next.Js",
        "Firebase"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://meat-commerce-seven.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/meat-e-commerce.png",
      video: "",
    },
    {
      title: "E-commerce Marbel",
      href: "https://marble-theta.vercel.app/",
      dates: "1 Mei - 1 Juli 2025",
      active: true,
      description:
        "Dengan adanya website ini, pelaku pemilik warung bisa mencatat informasi barang yang dijual melalui halaman dashboard yang mudah digunakan. Di dalam dashboard ini, mereka dapat menambahkan, mengedit, dan menghapus data barang, termasuk stok, harga, dan kategori. Selain itu, tersedia fitur pencatatan penjualan harian yang otomatis tersimpan, sehingga pemilik warung bisa melihat laporan penjualan secara mingguan atau bulanan dalam bentuk grafik maupun tabel, untuk membantu pengambilan keputusan yang lebih akurat dan efisien.",
      technologies: [
        "Next.Js",
        "Firebase"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://marble-theta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/marble.png",
      video: "",
    },
    {
      title: "Kasir Digital",
      href: "https://warung-digital-kasir-oom.vercel.app/",
      dates: "1 Mei - 1 Juli 2025",
      active: true,
      description:
        "Dengan adanya website ini, pelaku pemilik warung bisa mencatat informasi barang yang dijual melalui halaman dashboard yang mudah digunakan. Di dalam dashboard ini, mereka dapat menambahkan, mengedit, dan menghapus data barang, termasuk stok, harga, dan kategori. Selain itu, tersedia fitur pencatatan penjualan harian yang otomatis tersimpan, sehingga pemilik warung bisa melihat laporan penjualan secara mingguan atau bulanan dalam bentuk grafik maupun tabel, untuk membantu pengambilan keputusan yang lebih akurat dan efisien.",
      technologies: [
        "React",
        "Supabase"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://warung-digital-kasir-oom.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/kasir-digital.png",
      video: "",
    },
    {
      title: "Otomatisasi Post Content Wordpress",
      href: "#",
      dates: "1 Mei - 1 Juli 2025",
      active: true,
      description:
        "Dengan adanya otomatisasi ini, pelaku pemilik wrodpress bisa posting content hanya bermodalkan upload foto thumbnail dan body kemudian peritah singkat isi text content dan secara otomaris content tersebut terbit diakun pemilik wordpress.",
      technologies: [
        "n8n",
        "sumopod"
      ],
      type: "n8n",
       links: [
      ],
      image: "/n8n-wordperss.jpg",
      video: "",
    },
    {
      title: "UMKM Karak",
      href: "https://karak-iota.vercel.app/",
      dates: "1 Februari - Present",
      active: true,
      description:
        "Dengan adanya website, pelaku UMKM dapat memperkenalkan produk atau layanan mereka kepada pasar yang lebih luas tanpa terbatas oleh lokasi geografis. Selain itu, website memudahkan pelanggan dalam mencari informasi, melakukan transaksi, serta berkomunikasi langsung dengan pemilik usaha. Fitur seperti katalog produk, sistem pemesanan online, dan integrasi dengan media sosial juga membantu meningkatkan penjualan serta memperkuat branding UMKM. Dengan pemanfaatan website yang optimal, UMKM dapat lebih efisien dalam pemasaran, membangun kepercayaan pelanggan, dan bersaing di pasar digital secara lebih profesional.",
      technologies: [
        "Next.Js",
        "Tailwind"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://karak-iota.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/umkm.png",
      video: "",
    },
    {
      title: "Official HOFE Website",
      href: "https://official-hofe-website.vercel.app/",
      dates: "1 Desember 2024 - 1 Januari 2025",
      active: true,
      description:
        "**HOFE** adalah platform inovatif yang berkomitmen untuk melawan misinformasi sekaligus mendukung keberlanjutan lingkungan. Misi kami adalah menyediakan deteksi hoaks secara **akurat dan real-time**, serta mengintegrasikan praktik teknologi yang **ramah lingkungan** dalam setiap pengembangannya.",
      technologies: [
        "Astro",
        "Tailwind"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://official-hofe-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/official-web-hofe.png",
      video: "",
    },
    {
      title: "PPID Surakarta",
      href: "https://ppid-solo.vercel.app/",
      dates: "1 Februari - Present",
      active: true,
      description:
        "meningkatkan transparansi dan aksesibilitas informasi bagi masyarakat. Dengan adanya website, warga dapat dengan mudah memperoleh informasi publik secara cepat dan akurat tanpa harus datang langsung ke kantor PPID. Website ini juga membantu meningkatkan efisiensi dalam pengelolaan permohonan informasi, menyediakan data secara real-time, serta mendukung partisipasi masyarakat dalam pengawasan kebijakan pemerintah. Selain itu, keberadaan website memperkuat akuntabilitas pemerintah daerah dengan memastikan bahwa informasi yang disajikan selalu up-to-date, dapat diakses kapan saja, dan sesuai dengan prinsip keterbukaan informasi publik.",
      technologies: [
        "Next.Js",
        "Tailwind"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://ppid-solo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/ppid-solo.png",
      video: "",
    },
    {
      title: "System Management HRD",
      href: "#",
      dates: "1 Februari - Present",
      active: true,
      description:
        "Memberikan manfaat besar dalam meningkatkan efisiensi pengelolaan sumber daya manusia, seperti otomatisasi administrasi karyawan, pencatatan absensi, penggajian, serta manajemen cuti yang lebih akurat dan minim kesalahan. Selain itu, sistem ini membantu meningkatkan produktivitas dengan mempermudah perencanaan tenaga kerja, evaluasi kinerja, serta pengembangan karyawan agar lebih kompeten. Kepatuhan terhadap regulasi ketenagakerjaan juga lebih terjamin, termasuk pencatatan pajak dan jaminan sosial. Dengan pengelolaan yang lebih baik, perusahaan dapat menciptakan lingkungan kerja yang nyaman dan transparan, sehingga meningkatkan retensi karyawan dan mengurangi turnover. Selain itu, sistem ini memberikan data akurat untuk analisis dan pengambilan keputusan strategis dalam perencanaan SDM jangka panjang, mendukung pertumbuhan perusahaan secara berkelanjutan.",
      technologies: [
        "Laravel"
      ],
      type: "Web",
      links: [
      ],
      image: "/sim-hrd-pt-ppi.png",
      video: "",
    },
    {
      title: "Company Profile",
      href: "#",
      dates: "1 Februari - Present",
      active: true,
      description:
        "Dengan rilisnya Company Profile, menjadikan alat komunikasi dan pemasaran yang efektif untuk memperkenalkan perusahaan kepada pelanggan, mitra bisnis, dan investor. Dengan company profile yang profesional, PT Prima Paper Indonesia dapat menampilkan informasi tentang visi, misi, produk unggulan seperti kertas berkualitas tinggi, proses produksi ramah lingkungan, serta pencapaian perusahaan. Selain itu, company profile juga meningkatkan kredibilitas perusahaan di industri kertas, membantu membangun brand awareness, serta memperluas peluang kerja sama bisnis baik di pasar lokal maupun internasional.",
      technologies: [
        "Laravel"
      ],
      type: "Web",
      links: [
      ],
      image: "/company-profile-pt-ppi.png",
      video: "",
    },
    {
      title: "HOFE - Hoax Detection For Everyone",
      href: "#",
      dates: "November 2024 - Desember 2024",
      active: true,
      description:
        "Dengan rilisnya platform deteksi hoaks berbasis machine learning, HOFE, saya memutuskan untuk membangun aplikasi SaaS yang memungkinkan pengguna untuk memverifikasi dan melaporkan berita palsu secara real-time. Aplikasi ini memberikan cara yang efektif untuk mendeteksi informasi yang salah, mempercepat proses edukasi masyarakat, dan memungkinkan monetisasi dari penggunaan API deteksi hoaks.",
      technologies: [
        "TensorFlow",
        "Google Cloud Platform",
        "Next.js",
        "Shadcn UI",
        "Kotlin",
        "Flask",
        "Python",
        "Google Cloud Run"
      ],
      type: "Machine Learning",
      links: [
      ],
      image: "/hofe.png",
      video: "",
    },
    {
      title: "Akreditasi Kampus",
      href: "https://akreditasi-6c3jsmx6f-tamakuz.vercel.app/",
      dates: "Agustus 2023 - November 2023",
      active: true,
      description:
        "Membangun, mengembangkan, dan memantau website akreditasi untuk Manajemen Informatika menggunakan 𝗘𝘅𝗽𝗿𝗲𝘀𝘀.𝗷𝘀 dan 𝗥𝗲𝗮𝗰𝘁.𝗷𝘀.",
      technologies: [
        "Express.js",
        "React",
        "TailwindCSS",
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://akreditasi-6c3jsmx6f-tamakuz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/akreditasi-mi.png",
      video: "",
    },
    {
      title: "Media Editor",
      href: "https://media-editor-bay.vercel.app/",
      dates: "Januari 2025 - Present",
      active: true,
      description:
        "Platform canggih yang memungkinkan pengguna untuk mengedit media seperti gambar dan video secara mudah, cepat, dan efisien. Kini, dengan fitur tambahan Shortlink, pengguna dapat dengan mudah berbagi hasil editan mereka melalui tautan pendek.",
      technologies: [
        "Next.js",
        "Shadcn UI"
      ],
      type: "Web",
      links: [
        {
          type: "Website",
          href: "https://media-editor-bay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/media-editor.png",
      video: "",
    },
    {
      title: "Sistem pencatatan arsip dokumen",
      href: "#",
      dates: "Januari 2025",
      active: true,
      description:
        "Sistem Pencatatan Arsip Dokumen adalah aplikasi berbasis web yang dirancang untuk mengelola, menyimpan, dan mencari dokumen secara digital. Sistem ini membantu perusahaan, instansi pemerintah, atau organisasi dalam mengarsipkan dokumen penting secara efisien, mengurangi penggunaan kerta.",
      technologies: [
        "PHP",
        "MySQL",
      ],
      type: "Web",
      links: [
      ],
      image: "/arsip-dokumen.png",
      video: "",
    },
    {
      title: "Sistem pencatatan slip gaji dokter",
      href: "https://finance-64nw.vercel.app/",
      dates: "Januari 2025",
      active: true,
      description:
        "Sistem Pencatatan Slip Gaji Dokter adalah aplikasi berbasis web yang dirancang untuk mengelola, mencatat, dan menyajikan slip gaji dokter secara digital.",
      technologies: [
        "Next.Js",
        "Prisma",
        "Postgre"
      ],
      type: "Web",
      links: [
         {
          type: "Website",
          href: "https://finance-64nw.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/sistem-pendapatan-dokter.png",
      video: "",
    }
  ],
  seminars: [
    {
      title: "Google Cloud Platform Fundamentals",
      dates: "Januari 2024",
      location: "Online",
      description:
        "Mengikuti seminar tentang dasar-dasar Google Cloud Platform dan implementasinya dalam pengembangan aplikasi modern.",
      image: "/gcp-seminar.png",
      certificate: "https://www.cloudskillsboost.google/public_profiles/your-profile",
      links: [],
    },
    {
      title: "Machine Learning with TensorFlow",
      dates: "Februari 2024",
      location: "Online",
      description:
        "Berpartisipasi dalam seminar tentang implementasi Machine Learning menggunakan TensorFlow dan best practices dalam pengembangan model AI.",
      image: "/tensorflow-seminar.png",
      certificate: "https://www.tensorflow.org/certificate",
      links: [],
    }
  ]
} as const;
