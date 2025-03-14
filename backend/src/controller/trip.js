// Data yang akan digunakan untuk edit, tambah, ataupun hapus
const TRIPS = [
  {
    id: 1,
    title: "6D/4N Fun Tassie Vacation + Sydney",
    country: "Australia",
    accommodation: "Hotel 4 Stars",
    transportation: "Qantas Airways",
    eat: "Included",
    durationDay: 6,
    durationNight: 4,
    date: "2025-06-15",
    price: 12000000,
    quota: "18/20",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/sydney_p4d1w2.jpg",
  },
  {
    id: 2,
    title: "7D/6N Breathtaking Swiss Alps",
    country: "Switzerland",
    accommodation: "Luxury Resort",
    transportation: "Swiss Air Lines",
    eat: "Included",
    durationDay: 7,
    durationNight: 6,
    date: "2025-09-20",
    price: 20000000,
    quota: "10/12",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    image:
      "https://img.okezone.com/content/2022/06/10/408/2609462/5-keuntungan-tinggal-di-swiss-destinasi-impian-pelancong-dunia-BVbt4GTRwB.jpg",
  },
  {
    id: 3,
    title: "3D/2N Bali Relaxation Retreat",
    country: "Indonesia",
    accommodation: "Beachfront Villa",
    transportation: "Garuda Indonesia",
    eat: "Included",
    durationDay: 3,
    durationNight: 2,
    date: "2025-05-01",
    price: 5000000,
    quota: "20/25",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    image:
      "https://www.pelago.com/img/destinations/bali/0619-0941_bali-xlarge.webp",
  },
  {
    id: 4,
    title: "5D/4N Amazing Japan Adventure",
    country: "Japan",
    accommodation: "Hotel 5 Stars",
    transportation: "Japan Airlines",
    eat: "Included",
    durationDay: 5,
    durationNight: 4,
    date: "2025-07-10",
    price: 15000000,
    quota: "10/15",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    image:
      "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
  },
  {
    id: 5,
    title: "4D/3N Romantic Paris Getaway",
    country: "France",
    accommodation: "Hotel 5 Stars",
    transportation: "Air France",
    eat: "Included",
    durationDay: 4,
    durationNight: 3,
    date: "2025-08-05",
    price: 17000000,
    quota: "8/10",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    image:
      "https://ik.imagekit.io/tvlk/blog/2024/04/shutterstock_667548661.jpg",
  },
  {
    id: 6,
    title: "5D/4N Dubai Luxury Experience",
    country: "UAE",
    accommodation: "Luxury Hotel",
    transportation: "Emirates",
    eat: "Included",
    durationDay: 5,
    durationNight: 4,
    date: "2025-11-11",
    price: 25000000,
    quota: "2/8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    image:
      "https://asset.mansionglobal.com/editorial/dubai-the-hottest-luxury-market-in-the-world-is-getting-a-fresh-influx-of-sparkling-new-builds/assets/NIaw0AnN6P/vela-viento-4-3500x1969.jpg",
  },
];

exports.getTrips = async (req, res) => {
  try {
    const data = TRIPS;

    res.status(200).json({
      status: "success",
      massage: "Berhasil mendapatkan data Trip",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

exports.detailTrip = async (req, res) => {
  try {
    const { id } = req.params; // ambil id dari url, id masing berbentuk string
    const trip = TRIPS.find((trip) => trip.id === parseInt(id));

    if (!trip) {
      return res.status(404).json({
        status: "failed",
        massage: "Trip not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: trip,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

exports.addTrip = async (req, res) => {
  try {
    const {
      title,
      country,
      accommodation,
      transportation,
      eat,
      durationDay,
      durationNight,
      date,
      price,
      quota,
      description,
      image,
    } = req.body;

    if (
      !title ||
      !country ||
      !accommodation ||
      !transportation ||
      !eat ||
      !durationDay ||
      !durationNight ||
      !date ||
      !price ||
      !quota ||
      !description ||
      !image
    ) {
      return res.status(400).json({
        status: "failed",
        message: "Semua field harus diisi",
      });
    }

    const newTrip = {
      id: TRIPS.length + 1,
      title,
      country,
      accommodation,
      transportation,
      eat,
      durationDay,
      durationNight,
      date,
      price,
      quota,
      description,
      image,
    };

    TRIPS.push(newTrip);

    res.status(201).json({
      status: "success",
      message: "Trip berhasil ditambahkan",
      data: newTrip,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

exports.editTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      country,
      accommodation,
      transportation,
      eat,
      durationDay,
      durationNight,
      date,
      price,
      quota,
      description,
      image,
    } = req.body;

    const tripIndex = TRIPS.findIndex((trip) => trip.id === parseInt(id));

    // jika tidak ada
    if (tripIndex === -1) {
      return res.status(404).json({
        status: "failed",
        message: `Trip dengan id ${id} tidak ditemukan`,
      });
    }

    TRIPS[tripIndex] = {
      ...TRIPS[tripIndex],
      title: title || TRIPS[tripIndex].title,
      country: country || TRIPS[tripIndex].country,
      accommodation: accommodation || TRIPS[tripIndex].accommodation,
      transportation: transportation || TRIPS[tripIndex].transportation,
      eat: eat || TRIPS[tripIndex].eat,
      durationDay: durationDay || TRIPS[tripIndex].durationDay,
      durationNight: durationNight || TRIPS[tripIndex].durationNight,
      date: date || TRIPS[tripIndex].date,
      price: price || TRIPS[tripIndex].price,
      quota: quota || TRIPS[tripIndex].quota,
      description: description || TRIPS[tripIndex].description,
      image: image || TRIPS[tripIndex].image,
    };

    res.status(200).json({
      status: "success",
      message: `Trip dengan id ${id} berhasil diperbarui`,
      data: TRIPS[tripIndex],
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const tripIndex = TRIPS.findIndex((trip) => trip.id === parseInt(id));

    // jika tidak ada
    if (tripIndex === -1) {
      return res.status(404).json({
        status: "failed",
        message: `Trip dengan id ${id} tidak ditemukan`,
      });
    }

    const deleteTrip = TRIPS[tripIndex];
    TRIPS.splice(tripIndex, 1);

    res.status(200).json({
      status: "success",
      message: `Trip dengan id ${id} berhasil dihapus`,
      data: deleteTrip,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Internal Server error",
    });
  }
};
