/* ==========================================================================
   BantuCepat - Interactive Logic (Vanilla JS)
   ========================================================================== */

/* --- First Aid Catalog Data --- */
const guidesData = {
    "pingsan": {
        title: "Pingsan & RJP (Henti Jantung)",
        badge: "Sangat Penting",
        badgeClass: "urgent",
        medis: [
            {
                title: "Cek Respon Korban",
                text: "Tepuk pundak korban secara mantap dan berteriak keras: 'Halo! Apakah Anda baik-baik saja?' untuk mengukur tingkat kesadarannya."
            },
            {
                title: "Panggil Bantuan Darurat (112)",
                text: "Jika tidak ada respon, segera berteriak meminta tolong orang sekitar untuk menghubungi 112 atau ambulans (118/119) dan mencari alat AED."
            },
            {
                title: "Periksa Napas & Nadi",
                text: "Amati pergerakan dada korban selama 5-10 detik. Jika napas terhenti atau tidak normal (tersengal-sengal), RJP harus segera dilakukan."
            },
            {
                title: "Lakukan Kompresi Dada (RJP)",
                text: "Letakkan tumit satu tangan di tengah dada korban, kunci tangan lainnya di atasnya. Tekan sedalam 5-6 cm dengan kecepatan 100-120 kali/menit (seperti ketukan lagu 'Stayin' Alive')."
            },
            {
                title: "Hands-Only RJP (Jika tidak terlatih)",
                text: "Jika Anda tidak terlatih napas buatan, terus lakukan kompresi dada tanpa henti sampai bantuan medis profesional tiba."
            }
        ],
        etika: [
            {
                title: "Jaga Kehormatan Tubuh Korban",
                text: "Sebelum merobek atau membuka baju korban demi penempatan pad AED atau kompresi, mintalah warga lain memegang payung, kain, atau jaket untuk menghalangi pandangan publik."
            },
            {
                title: "Hentikan Perekaman Kamera",
                text: "Tegur dengan tegas namun sopan jika ada warga yang merekam proses penyelamatan. Katakan: 'Mohon tidak merekam, mari kita hargai privasi dan nyawa korban.'"
            },
            {
                title: "Terus Berkomunikasi dengan Korban",
                text: "Meskipun korban pingsan, ajak bicara dengan tenang: 'Tenang, bantuan sedang datang. Anda aman bersama saya.' Indra pendengaran seringkali aktif paling akhir."
            },
            {
                title: "Tenangkan Keluarga Korban",
                text: "Jika kerabat korban berada di tempat, jelaskan singkat tindakan kompresi dada yang Anda lakukan secara empatik agar mereka tidak panik mengira Anda menyakiti korban."
            }
        ]
    },
    "luka-bakar": {
        title: "Luka Bakar Suhu Tinggi",
        badge: "Sedang",
        badgeClass: "medium",
        medis: [
            {
                title: "Mendinginkan Area Luka",
                text: "Segera basuh luka bakar dengan air bersih yang mengalir selama 10-20 menit. Jangan gunakan air es karena dapat memperparah kerusakan jaringan."
            },
            {
                title: "Lepaskan Benda Penghambat",
                text: "Lepaskan cincin, gelang, atau pakaian ketat di dekat luka secara hati-hati sebelum membengkak. JANGAN lepas jika menempel erat di kulit yang terbakar."
            },
            {
                title: "Hindari Penggunaan Bahan Dapur",
                text: "Jangan pernah mengoleskan pasta gigi, mentega, minyak, es batu, kecap, atau sabun. Bahan tersebut memerangkap panas dan memicu infeksi bakteri."
            },
            {
                title: "Tutup Luka Bakar secara Longgar",
                text: "Gunakan kain bersih non-serat atau plastik wrap bersih untuk menutupi luka secara longgar demi meredakan nyeri akibat terpapar udara luar."
            },
            {
                title: "Evaluasi Kebutuhan Medis",
                text: "Jika luka bakar meluas (lebih besar dari telapak tangan), terjadi di wajah/persendian, segera bawa korban ke unit gawat darurat."
            }
        ],
        etika: [
            {
                title: "Minta Persetujuan Tindakan",
                text: "Sebelum mengguyur air atau melepas cincin korban yang sadar, jelaskan manfaatnya terlebih dahulu agar korban merasa dilibatkan dan dihargai."
            },
            {
                title: "Kendalikan Ekspresi Wajah Anda",
                text: "Luka bakar yang parah bisa terlihat mengerikan. Jaga ekspresi wajah Anda tetap tenang. Reaksi kaget atau jijik dari Anda akan memicu kepanikan psikologis yang hebat pada korban."
            },
            {
                title: "Berikan Dukungan Empati yang Konkrit",
                text: "Katakan: 'Saya tahu ini rasanya sangat perih dan panas. Air ini akan meredakan nyeri Anda perlahan-lahan. Tetap bernapas dalam ya.'"
            }
        ]
    },
    "tersedak": {
        title: "Tersedak (Sumbatan Napas)",
        badge: "Sangat Penting",
        badgeClass: "urgent",
        medis: [
            {
                title: "Dorong Korban untuk Batuk",
                text: "Jika korban tersedak masih bisa berbicara, menangis, atau batuk keras, dukung dia untuk terus batuk secara kuat guna mengeluarkan sumbatan."
            },
            {
                title: "Tepukan Punggung (Back Blows)",
                text: "Miringkan tubuh korban ke depan. Berikan 5 tepukan kuat di punggung di antara kedua tulang belikat menggunakan tumit telapak tangan Anda."
            },
            {
                title: "Manuver Heimlich (Abdominal Thrusts)",
                text: "Jika sumbatan belum keluar, berdirilah di belakang korban, lingkarkan lengan di pinggangnya. Kepalkan satu tangan di atas pusat perut korban, genggam dengan tangan satunya, lalu hentakkan ke dalam dan ke atas dengan cepat sebanyak 5 kali."
            },
            {
                title: "Lakukan Siklus Berulang",
                text: "Ulangi kombinasi 5 tepukan punggung dan 5 abdominal thrusts sampai benda asing terlontar keluar atau korban kehilangan kesadaran."
            },
            {
                title: "Penanganan RJP jika Pingsan",
                text: "Jika korban tersedak jatuh pingsan, baringkan di lantai, panggil ambulans, dan lakukan RJP. Cek rongga mulut korban sebelum memberi napas buatan."
            }
        ],
        etika: [
            {
                title: "Komunikasikan Manuver Dekapan",
                text: "Karena Manuver Heimlich mengharuskan Anda memeluk korban erat dari belakang, penting untuk memberi tahu korban terlebih dahulu agar mereka tidak merasa dilecehkan secara fisik: 'Saya akan mendekap Anda dari belakang untuk membantu mengeluarkan makanan.'"
            },
            {
                title: "Jauhkan dari Tontonan Publik",
                text: "Mengeluarkan sumbatan makanan seringkali diiringi muntah atau batuk hebat yang memalukan bagi korban. Giring mereka ke sudut ruangan atau batasi kerumunan agar martabat mereka terjaga."
            },
            {
                title: "Dukungan Pasca Kejadian",
                text: "Setelah benda asing keluar, korban akan syok dan lemas. Temani mereka duduk, tenangkan detak jantungnya, dan berikan air hangat setelah pernapasan kembali stabil."
            }
        ]
    },
    "patahatulang": {
        title: "Patah Tulang & Cedera Sendi",
        badge: "Sedang",
        badgeClass: "medium",
        medis: [
            {
                title: "Jangan Ubah Posisi Tulang",
                text: "Jangan mencoba meluruskan atau meraba-raba tulang yang bengkok/patah. Biarkan bagian cedera tetap dalam posisi semula."
            },
            {
                title: "Kendalikan Pendarahan",
                text: "Jika terdapat luka terbuka dan pendarahan, tutup dengan kasa steril dan tekan ringan di sekitar tulang yang mencuat (jangan menekan langsung tulangnya)."
            },
            {
                title: "Lakukan Pembidaian (Imobilisasi)",
                text: "Gunakan karton tebal, majalah, papan kayu datar di kedua sisi sendi tulang. Ikat dengan tali/kain secara erat namun tidak sampai menghentikan sirkulasi darah."
            },
            {
                title: "Kompres Es (Patah Tertutup)",
                text: "Jika tidak ada luka terbuka, tempelkan kompres es yang dibalut handuk pada area cedera untuk mengurangi pembengkakan dan meredakan nyeri."
            },
            {
                title: "Cegah Shock Tubuh",
                text: "Baringkan korban dengan nyaman jika memungkinkan, selimuti agar hangat, dan segera bawa ke rumah sakit terdekat."
            }
        ],
        etika: [
            {
                title: "Minta Izin sebelum Membidai",
                text: "Menggeser atau menyentuh tulang yang patah menimbulkan rasa sakit luar biasa. Katakan dengan empati: 'Kaki Anda mungkin mengalami cedera patah. Saya ingin memasang penahan sementara agar cederanya tidak meluas ketika kita menunggu medis. Bolehkah?'"
            },
            {
                title: "Hargai Keputusan Korban",
                text: "Jika korban menolak digerakkan atau dipasang bidai karena terlalu sakit, jangan memaksanya. Etika terbaik adalah menemani korban di tempat, menyelimuti tubuhnya, dan memberikan kenyamanan psikologis."
            },
            {
                title: "Jangan Jadikan Patah Terbuka Tontonan",
                text: "Patah tulang terbuka di mana tulang mencuat keluar sering mengundang rasa penasaran warga. Tutupi area luka secara sopan dengan jaket bersih dan minta orang-orang tidak mengerumuninya agar aliran udara tetap lancar."
            }
        ]
    },
    "pendarahan": {
        title: "Pendarahan Hebat",
        badge: "Sangat Penting",
        badgeClass: "urgent",
        medis: [
            {
                title: "Tekanan Langsung pada Luka",
                text: "Tekan luka secara langsung menggunakan kasa steril atau kain bersih menggunakan telapak tangan Anda selama minimal 5-10 menit tanpa jeda."
            },
            {
                title: "Tinggikan Bagian Luka (Elevasi)",
                text: "Jika luka ada di lengan atau kaki, angkat bagian tersebut melebihi tinggi jantung korban untuk meredakan derasnya aliran darah."
            },
            {
                title: "Balut Luka Tekan",
                text: "Balut kasa penutup luka menggunakan perban gulung secara kencang. Jangan buka kasa pertama jika darah merembes keluar; tambahkan kasa baru di atasnya dan balut kembali."
            },
            {
                title: "Tekan Arteri Utama",
                text: "Jika pendarahan ekstrem berlanjut, tekan titik arteri di lipat paha atau lengan atas bagian dalam untuk memutus suplai darah utama ke luka."
            },
            {
                title: "Baringkan Korban & Selimuti",
                text: "Kehilangan banyak darah dapat memicu syok (dingin, pucat, detak jantung cepat). Selimuti korban agar hangat dan tinggikan kakinya 30 cm."
            }
        ],
        etika: [
            {
                title: "Utamakan Higienitas & Izin",
                text: "Gunakan sarung tangan medis lateks (jika ada) untuk keamanan bersama. Mintalah izin sebelum membuka pakaian korban guna menjangkau luka."
            },
            {
                title: "Jaga Kehormatan Korban",
                text: "Jika pendarahan terjadi di paha, dada, atau area intim, singkap pakaian seperlunya saja saat membalut. Tutup kembali dengan pakaian atau kain lain sesegera mungkin agar tubuh korban tidak terekspos kerumunan."
            },
            {
                title: "Alihkan Perhatian Korban",
                text: "Melihat pendarahan deras memicu kepanikan luar biasa. Dekap pundak korban atau ajak mereka menatap mata Anda: 'Tatap saya, ambil napas dalam. Pendarahan sudah kita tekan dan ambulans sedang menuju kemari. Anda aman.'"
            }
        ]
    },
    "sengatan-listrik": {
        title: "Sengatan Aliran Listrik",
        badge: "Sangat Penting",
        badgeClass: "urgent",
        medis: [
            {
                title: "Jangan Sentuh Korban Langsung",
                text: "Jangan sekali-kali memegang tubuh korban yang masih terhubung aliran listrik aktif karena arus akan menjalar ke tubuh Anda."
            },
            {
                title: "Putuskan Sumber Arus",
                text: "Segera matikan sekring utama (MCB) atau cabut kabel. Jika tidak bisa, gunakan benda kering non-konduktor (papan kayu, gagang sapu kayu, plastik tebal) untuk mendorong sumber listrik menjauh dari korban."
            },
            {
                title: "Evaluasi Tanda Vital",
                text: "Setelah korban terbebas dari arus listrik, periksa napas dan kesadaran. Jika napas berhenti, lakukan RJP."
            },
            {
                title: "Rawat Luka Bakar Masuk/Keluar",
                text: "Sengatan listrik menyisakan luka bakar masuk dan keluar di kulit. Guyur dengan air mengalir dan tutup luka secara longgar."
            },
            {
                title: "Pantau Jantung (Wajib Medis)",
                text: "Meskipun korban terlihat baik-baik saja setelah sengatan, segera bawa ke rumah sakit karena sengatan listrik dapat merusak ritme jantung internal."
            }
        ],
        etika: [
            {
                title: "Amankan Lokasi bagi Warga Lain",
                text: "Kecelakaan sengatan listrik berpotensi memicu korban sekunder. Larang dengan tegas warga sekitar mendekati genangan air atau kabel terkelupas di area sekitar."
            },
            {
                title: "Ketenangan Emosional Korban",
                text: "Sengatan listrik merusak fungsi saraf sesaat dan memicu kepanikan luar biasa serta gemetar hebat. Selimuti korban, bantu mereka menstabilkan napasnya, dan dampingi terus."
            },
            {
                title: "Etika Kontak Fisik",
                text: "Sebelum menyentuh korban pasca-kejadian, yakinkan diri Anda dan korban bahwa aliran listrik telah padam total agar tidak ada ketakutan susulan dari kedua belah pihak."
            }
        ]
    }
};

/* --- Simulator Quiz Scenarios Data --- */
const quizScenarios = [
    {
        scenario: "SKENARIO 1: KECELAKAAN DI JALAN RAYA",
        question: "Anda melihat seorang pria paruh baya tiba-tiba memegangi dadanya lalu pingsan di trotoar jalan yang ramai. Warga sekitar mulai berkerumun dan mengeluarkan ponsel untuk merekam kejadian tersebut. Tindakan pertama apa yang paling tepat dan etis?",
        options: [
            {
                text: "A. Mengeluarkan ponsel juga untuk melakukan siaran langsung (live streaming) agar keluarga korban segera mengetahuinya.",
                isCorrect: false
            },
            {
                text: "B. Meminta warga menghentikan perekaman kamera, meminta bantuan memegangi payung/jaket untuk menutupi tubuh korban demi privasi, lalu mengecek respon kesadaran korban dan menelepon 112.",
                isCorrect: true
            },
            {
                text: "C. Langsung melakukan kompresi dada (RJP) sekuat tenaga tanpa memeriksa nafas atau respon korban karena waktu sangat berharga.",
                isCorrect: false
            }
        ],
        feedback: {
            correct: "Tepat Sekali! Melindungi privasi korban kecelakaan dari sorotan kamera sosial media adalah etika krusial. Sebelum melakukan tindakan medis apa pun, pastikan Anda juga menilai respon korban dan memanggil ambulans secara tenang.",
            wrong: "Kurang tepat. Menjadikan kondisi kritis korban sebagai konten melanggar etika dan privasi. Melakukan RJP tanpa mengecek respon juga membahayakan jika korban ternyata hanya pingsan biasa."
        }
    },
    {
        scenario: "SKENARIO 2: KORBAN TERSEDAK DI RESTORAN",
        question: "Seorang anak kecil tersedak permen di meja sebelah Anda di restoran. Dia mulai kesulitan bernapas dan memegangi lehernya. Anda berinisiatif memberikan Manuver Heimlich (merangkul perut dari belakang). Bagaimana etika komunikasi Anda?",
        options: [
            {
                text: "A. Langsung menyergap anak tersebut dari belakang tanpa berbicara agar sumbatan napas cepat keluar sebelum terlambat.",
                isCorrect: false
            },
            {
                text: "B. Meminta izin dengan jelas kepada orang tua anak yang ada di situ: 'Saya paham pertolongan pertama tersedak, bolehkah saya mendekap anak Anda dari belakang untuk membantu melontarkan makanannya?'",
                isCorrect: true
            },
            {
                text: "C. Berteriak meminta perhatian seluruh pengunjung kafe agar mereka melihat kepahlawanan Anda dalam menolong korban.",
                isCorrect: false
            }
        ],
        feedback: {
            correct: "Tepat Sekali! Jika korban sadar (atau anak di bawah umur yang didampingi wali), wajib meminta persetujuan (consent) sebelum menyentuh tubuhnya. Penjelasan singkat juga menghindarkan kesalahpahaman fisik.",
            wrong: "Kurang tepat. Menyergap seseorang dari belakang tanpa bicara bisa dianggap serangan fisik atau memicu ketakutan hebat bagi korban dan orang tuanya. Memamerkan tindakan juga melanggar fokus keselamatan korban."
        }
    },
    {
        scenario: "SKENARIO 3: PATAH TULANG TERBUKA",
        question: "Anda menemukan korban kecelakaan sepeda motor di pinggir jalan dengan patah tulang paha terbuka (tulang mencuat dan berdarah). Korban mengerang kesakitan luar biasa. Apa tindakan medis dan etika terbaik yang Anda lakukan?",
        options: [
            {
                text: "A. Berusaha menarik atau meluruskan kaki korban agar lurus kembali, lalu membungkusnya rapat-rapat.",
                isCorrect: false
            },
            {
                text: "B. Mengamankan area lalu lintas, meminta izin membantu, menutupi luka secara longgar dengan kain bersih tanpa menyentuh tulangnya, menjaga posisi kaki agar tidak bergeser, serta menemani korban bicara agar tetap sadar dan tenang.",
                isCorrect: true
            },
            {
                text: "C. Memaksa memberi minum air hangat sebanyak-banyaknya agar korban tidak kehausan menahan sakit, lalu mendesak warga memindahkan tubuh korban ke dalam mobil.",
                isCorrect: false
            }
        ],
        feedback: {
            correct: "Tepat Sekali! Jangan pernah meluruskan patah tulang karena berisiko merobek saraf dan pembuluh darah. Penanganan medis terbaik adalah imobilisasi (menjaga tulang tetap diam), dan etika terbaik adalah menemani serta menenangkan korban secara psikologis.",
            wrong: "Kurang tepat. Meluruskan tulang patah sendiri sangat berbahaya. Memberi minum juga dilarang karena jika korban memerlukan operasi darurat dengan bius total, perut harus dalam keadaan kosong."
        }
    },
    {
        scenario: "SKENARIO 4: LUKA BAKAR DAPUR",
        question: "Tangan rekan kerja Anda tersiram minyak goreng panas di dapur kantor. Kulitnya memerah, melepuh, dan dia menangis ketakutan. Tindakan apa yang Anda ambil?",
        options: [
            {
                text: "A. Mengguyur tangan terluka dengan air mengalir selama 15 menit, menolak mitos pasta gigi, menenangkan rasa takut rekan Anda dengan ucapan empati, dan menghargai privasi lukanya.",
                isCorrect: true
            },
            {
                text: "B. Mengoleskan pasta gigi tebal-tebal pada luka agar dingin, lalu memotret tangan melepuh tersebut untuk dibagikan ke grup kantor sebagai pengingat agar berhati-hati.",
                isCorrect: false
            },
            {
                text: "C. Mengambil jarum steril untuk memecahkan lepuhan kulit agar air di dalamnya keluar dan luka cepat kering.",
                isCorrect: false
            }
        ],
        feedback: {
            correct: "Tepat Sekali! Membasuh luka bakar dengan air mengalir biasa selama 15 menit adalah penanganan medis utama. Mengabaikan mitos pasta gigi mencegah kerusakan kulit bertambah parah, dan tidak membagikan foto luka adalah bentuk etika privasi sejati.",
            wrong: "Kurang tepat. Mengoleskan pasta gigi memerangkap panas dalam kulit dan memicu infeksi berat. Membagikan foto luka tanpa izin melanggar privasi, sedangkan memecahkan lepuhan membuka celah masuknya bakteri."
        }
    }
];

/* --- Global State Variables --- */
let activeGuideCategory = null;
let activeModalTab = 'medis';

let currentQuizIndex = 0;
let quizScore = 0;
let correctQuizCount = 0;
let answeredQuiz = false;

/* --- Initialization --- */
document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const tagButtons = document.querySelectorAll('.tag-btn');
    
    if (searchInput && searchBtn) {
        searchInput.addEventListener('input', () => filterGuides(searchInput.value));
        searchBtn.addEventListener('click', () => filterGuides(searchInput.value));
    }
    
    tagButtons.forEach(tag => {
        tag.addEventListener('click', (e) => {
            const searchTerm = e.target.getAttribute('data-search');
            if (searchInput) {
                searchInput.value = searchTerm;
                filterGuides(searchTerm);
            }
        });
    });

    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const moonIcon = themeToggleBtn.querySelector('.moon-icon');
        const sunIcon = themeToggleBtn.querySelector('.sun-icon');
        
        const savedTheme = localStorage.getItem('theme');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        // Apply theme on load
        if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
            document.body.classList.add('light-theme');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            document.body.classList.remove('light-theme');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
        
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            
            if (isLight) {
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        });
    }

    // P3K Checklist Logic
    initChecklist();

    // Flip Card Fix for iOS/Touch devices (Toggles class on click)
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent interference with internal text links
            if (e.target.tagName !== 'A') {
                this.classList.toggle('flipped');
            }
        });
    });
});

/* --- First Aid Catalog Search & Filter --- */
function filterGuides(query) {
    const cleanQuery = query.toLowerCase().trim();
    const guideCards = document.querySelectorAll('.guide-card');
    const guidesGrid = document.getElementById('guides-container');
    const noResultsDiv = document.getElementById('no-results');
    
    let visibleCount = 0;
    
    guideCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();
        
        if (title.includes(cleanQuery) || desc.includes(cleanQuery) || category.includes(cleanQuery)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    if (visibleCount === 0) {
        guidesGrid.classList.add('hidden');
        noResultsDiv.classList.remove('hidden');
    } else {
        guidesGrid.classList.remove('hidden');
        noResultsDiv.classList.add('hidden');
    }
}

/* --- Modular Guide Modal Controls --- */
function openGuideModal(category) {
    const data = guidesData[category];
    if (!data) return;
    
    activeGuideCategory = category;
    
    // Set Modal Content
    document.getElementById('modal-title').textContent = data.title;
    
    const badge = document.getElementById('modal-badge');
    badge.textContent = data.badge;
    badge.className = `modal-badge ${data.badgeClass}`;
    
    // Load Medis Steps
    const medisContainer = document.getElementById('modal-steps-medis');
    medisContainer.innerHTML = '';
    data.medis.forEach(step => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${step.title}</strong>${step.text}`;
        medisContainer.appendChild(li);
    });
    
    // Load Etika Steps
    const etikaContainer = document.getElementById('modal-steps-etika');
    etikaContainer.innerHTML = '';
    data.etika.forEach(step => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${step.title}</strong>${step.text}`;
        etikaContainer.appendChild(li);
    });
    
    // Set default active tab to 'medis'
    switchModalTab('medis');
    
    // Show Modal
    const modal = document.getElementById('guide-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Disable background scroll
}

function closeGuideModal() {
    const modal = document.getElementById('guide-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Enable background scroll
}

function switchModalTab(tab) {
    activeModalTab = tab;
    
    const btnMedis = document.getElementById('tab-btn-medis');
    const btnEtika = document.getElementById('tab-btn-etika');
    const contentMedis = document.getElementById('modal-tab-medis');
    const contentEtika = document.getElementById('modal-tab-etika');
    
    if (tab === 'medis') {
        btnMedis.classList.add('active');
        btnEtika.classList.remove('active');
        contentMedis.classList.remove('hidden');
        contentEtika.classList.add('hidden');
    } else {
        btnMedis.classList.remove('active');
        btnEtika.classList.add('active');
        contentMedis.classList.add('hidden');
        contentEtika.classList.remove('hidden');
    }
}

// Close Modal when clicking outside the modal-card
window.onclick = function(event) {
    const modal = document.getElementById('guide-modal');
    if (event.target === modal) {
        closeGuideModal();
    }
};

/* --- Emergency Case Simulator Quiz Logic --- */
function startSimulation() {
    currentQuizIndex = 0;
    quizScore = 0;
    correctQuizCount = 0;
    
    document.getElementById('sim-start-screen').classList.add('hidden');
    document.getElementById('sim-quiz-screen').classList.remove('hidden');
    document.getElementById('sim-result-screen').classList.add('hidden');
    
    showQuestion();
}

function showQuestion() {
    answeredQuiz = false;
    const currentQData = quizScenarios[currentQuizIndex];
    
    // Hide feedback box
    const feedbackBox = document.getElementById('quiz-feedback');
    feedbackBox.classList.add('hidden');
    feedbackBox.className = "quiz-feedback-box hidden";
    
    // Update progress
    document.getElementById('current-q').textContent = currentQuizIndex + 1;
    document.getElementById('total-q').textContent = quizScenarios.length;
    document.getElementById('current-score').textContent = quizScore;
    
    const progressPercent = ((currentQuizIndex + 1) / quizScenarios.length) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progressPercent}%`;
    
    // Set Question Text
    document.getElementById('question-scenario').textContent = currentQData.scenario;
    document.getElementById('question-text').textContent = currentQData.question;
    
    // Load Option Buttons
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';
    
    currentQData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => handleOptionClick(idx, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleOptionClick(optionIdx, buttonEl) {
    if (answeredQuiz) return; // Prevent multiple answers
    
    answeredQuiz = true;
    const currentQData = quizScenarios[currentQuizIndex];
    const selectedOption = currentQData.options[optionIdx];
    const optionButtons = document.querySelectorAll('.option-btn');
    const feedbackBox = document.getElementById('quiz-feedback');
    
    // Disable all options
    optionButtons.forEach(btn => btn.disabled = true);
    
    if (selectedOption.isCorrect) {
        buttonEl.classList.add('correct');
        quizScore += 25;
        correctQuizCount++;
        
        document.getElementById('feedback-icon').textContent = '✓';
        document.getElementById('feedback-title').textContent = 'Tepat Sekali!';
        feedbackBox.classList.add('correct-feed');
        document.getElementById('feedback-text').textContent = currentQData.feedback.correct;
    } else {
        buttonEl.classList.add('wrong');
        
        // Highlight correct option
        optionButtons.forEach((btn, idx) => {
            if (currentQData.options[idx].isCorrect) {
                btn.classList.add('correct');
            }
        });
        
        document.getElementById('feedback-icon').textContent = '✗';
        document.getElementById('feedback-title').textContent = 'Kurang Tepat';
        feedbackBox.classList.add('wrong-feed');
        document.getElementById('feedback-text').textContent = currentQData.feedback.wrong;
    }
    
    document.getElementById('current-score').textContent = quizScore;
    feedbackBox.classList.remove('hidden');
}

function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizScenarios.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('sim-quiz-screen').classList.add('hidden');
    document.getElementById('sim-result-screen').classList.remove('hidden');
    
    document.getElementById('final-score').textContent = quizScore;
    document.getElementById('correct-answers').textContent = `${correctQuizCount} / ${quizScenarios.length}`;
    
    // Determine title badge based on score
    const titleEl = document.getElementById('result-badge-title');
    const descEl = document.getElementById('result-description');
    
    if (quizScore === 100) {
        titleEl.textContent = "Pahlawan Tanggap & Beretika";
        descEl.textContent = "Luar biasa! Anda menguasai keahlian pertolongan pertama dasar dengan sempurna sekaligus memiliki kepekaan etika dan empati yang sangat tinggi terhadap kehormatan korban.";
    } else if (quizScore >= 75) {
        titleEl.textContent = "Penolong Empatis Terampil";
        descEl.textContent = "Sangat bagus! Tindakan Anda sudah terarah secara medis dan Anda memprioritaskan privasi korban. Sedikit pemolesan teori akan membuat Anda semakin sigap.";
    } else if (quizScore >= 50) {
        titleEl.textContent = "Penolong Medis Dasar";
        descEl.textContent = "Cukup baik. Anda memahami langkah penyelamatan fisik, namun ingatlah untuk lebih mengutamakan komunikasi tenang, persetujuan korban, dan perlindungan privasi di sekitar lokasi.";
    } else {
        titleEl.textContent = "Simpatisan Peduli";
        descEl.textContent = "Kecemasan dan mitos masih menghalangi tindakan tanggap darurat Anda yang efektif. Pelajari kembali katalog panduan medis dan etika di atas agar lebih siap membantu sesama.";
    }
}

function restartSimulation() {
    document.getElementById('sim-result-screen').classList.add('hidden');
    document.getElementById('sim-start-screen').classList.remove('hidden');
}

/* --- First Aid Kit Checklist Logic --- */
function initChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-item input');
    
    checkboxes.forEach(box => {
        box.addEventListener('change', updateChecklistProgress);
    });
    
    // Run initial progress check (should be 0)
    updateChecklistProgress();
}

function updateChecklistProgress() {
    const checkboxes = document.querySelectorAll('.checklist-item input');
    const total = checkboxes.length;
    let checkedCount = 0;
    
    checkboxes.forEach(box => {
        if (box.checked) {
            checkedCount++;
        }
    });
    
    document.getElementById('checklist-count').textContent = checkedCount;
    
    const progressPercent = (checkedCount / total) * 100;
    const progressFill = document.getElementById('checklist-progress');
    if (progressFill) {
        progressFill.style.width = `${progressPercent}%`;
    }
}
