// Data yang akan digunakan untuk edit, tambah, ataupun hapus
const TRIPS = [
  {
    id: 1,
    title: "6D/4N Fun Tassie Vacation + Sydney",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/sydney_p4d1w2.jpg",
    price: 12000000,
    country: "Australia",
  },
  {
    id: 2,
    title: "5D/4N Amazing Japan Adventure",
    description:
      "Explore the vibrant city of Tokyo, the historical beauty of Kyoto, and the delicious local cuisine of Osaka.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/japan.jpg",
    price: 15000000,
    country: "Japan",
  },
  {
    id: 3,
    title: "4D/3N Romantic Paris Getaway",
    description:
      "Visit the Eiffel Tower, enjoy authentic French pastries, and stroll through the streets of Paris.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/paris.jpg",
    price: 17000000,
    country: "France",
  },
  {
    id: 4,
    title: "7D/6N Breathtaking Swiss Alps",
    description:
      "Experience the stunning beauty of the Swiss Alps, take scenic train rides, and enjoy local Swiss chocolates.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/swiss.jpg",
    price: 20000000,
    country: "Switzerland",
  },
  {
    id: 5,
    title: "3D/2N Bali Relaxation Retreat",
    description:
      "Enjoy the serene beaches of Bali, indulge in spa treatments, and explore the rich Balinese culture.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/bali.jpg",
    price: 5000000,
    country: "Indonesia",
  },
  {
    id: 6,
    title: "5D/4N Dubai Luxury Experience",
    description:
      "Visit the tallest building in the world, go on a desert safari, and experience the luxury of Dubai.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/dubai.jpg",
    price: 25000000,
    country: "UAE",
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
    const { title, description, image, price, country } = req.body;

    if (!title || !description || !image || !price || !country) {
      return res.status(400).json({
        status: "failed",
        massage: "Semua field harus diisi",
      });
    }

    const newTrip = {
      id: TRIPS.length + 1,
      title,
      description,
      image,
      price,
      country,
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
    const { title, description, image, price, country } = req.body;

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
      description: description || TRIPS[tripIndex].description,
      image: image || TRIPS[tripIndex].image,
      price: price || TRIPS[tripIndex].price,
      country: country || TRIPS[tripIndex].country,
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
