export const TUJUAN_PRAKTIKUM = [
  "Mengidentifikasi bagian Neuron.",
  "Mengetahui alur perjalanan impuls pada rangsangan.",
  "Menjelaskan alur perjalanan impuls pada rangsangan.",
];

export const LANGKAH_PRAKTIKUM = [
  {
    step: 1,
    title: "Sensorik",
    deskripsi:
      "Reseptor pada kulit (tangan) menerima rangsangan panas dari benda panas. Impuls listrik dikirim melalui saraf sensorik menuju sumsum tulang belakang sebagai saraf pusat.",
  },
  {
    step: 2,
    title: "Penghubung",
    deskripsi:
      "Di dalam sumsum tulang belakang, impuls diteruskan oleh saraf penghubung (interneuron) dari saraf sensorik ke saraf motorik tanpa melalui otak terlebih dahulu.",
  },
  {
    step: 3,
    title: "Motorik",
    deskripsi:
      "Saraf motorik membawa perintah dari saraf pusat menuju efektor (otot lengan). Otot berkontraksi sehingga tangan refleks tertarik menjauh dari sumber panas.",
  },
];

export const SIM_PROMPTS = {
  sensorik:
    "Arahkan tangan ke permukaan kulit untuk melihat pergerakan saraf sensorik saat menghantarkan impuls ke saraf pusat.",
  penghubung:
    "Dorong impuls kearah saraf penghubung untuk melihat pergerakan impuls.",
  motorik:
    "Dorong impuls kearah saraf pusat untuk melihat pergerakan.",
};
