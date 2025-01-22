import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aji Maulana",
  initials: "DV",
  url: "https://estech-mauve.vercel.app/",
  location: "Surakarta, Indonesia",
  locationLink: "https://g.co/kgs/AY2Q67h",
  description:
    "Junior Full-Stack Developer dengan pengalaman dalam Web Development, Machine Learning, dan Cloud Computing. Antusias mengembangkan aplikasi berbasis teknologi terbaru untuk memecahkan masalah nyata. Aktif berbagi dan belajar untuk terus berkembang.",
  summary:
    "Sebagai junior full-stack developer, saya memiliki pengalaman mengembangkan aplikasi web dan machine learning dengan fokus pada Web Development, Cloud Computing, dan TensorFlow. Saya pernah bekerja di proyek pengembangan aplikasi akreditasi dengan React.js dan Express.js serta mendalami implementasi AI melalui Google Cloud. Saat ini, saya sedang berfokus pada pengembangan aplikasi berbasis teknologi modern untuk memberikan dampak nyata.",
  avatarUrl: "/me.jpg",
  skills: [
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Tensorflow",
    "Google Cloud Platform"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aji658911@gmail.com",
    tel: "+6281234567890",
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
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ajimaulana8721",
        icon: Icons.youtube,
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
      company: "Akreditasi Kampus",
      href: "http://politama.ac.id/",
      badges: [],
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
      title: "HOFE - Hoax Detection For Everyone",
      href: "https://official-hofe-website.vercel.app/",
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
      links: [
        {
          type: "Website",
          href: "https://hofe-web-app-production.up.railway.app/login",
          icon: <Icons.globe className="size-3" />,
        },
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
      links: [
        {
          type: "Website",
          href: "https://akreditasi-6c3jsmx6f-tamakuz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ajimaulana123/akreditasi-mi",
          icon: <Icons.github className="size-3" />,
        },
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
      links: [
        {
          type: "Website",
          href: "https://media-editor-bay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ajimaulana123/media-editor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/media-editor.png",
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
