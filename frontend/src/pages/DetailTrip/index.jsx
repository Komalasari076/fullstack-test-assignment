import { useNavigate, useParams } from "react-router-dom";
import { useTrip } from "../../context/TripProvider";

export default function DetailTrip() {
  const { id } = useParams();
  const { trips, deleteTrip } = useTrip();
  const navigate = useNavigate();

  const trip = trips.find((trip) => trip.id === parseInt(id));
  console.log(trip);

  if (!trip) {
    return <h1>Trip tidak di temukan</h1>;
  }

  function handledeleteTrip(id) {
    const confirm = window.confirm("Yakin mau hapus");

    if (confirm) {
      deleteTrip(id);
      navigate("/");
    }
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16 px-5 lg:px-20">
        <h1 className="text-3xl font-bold">{trip.title}</h1>
        <p className="text-gray-500 text-lg">{trip.country}</p>

        <img
          src={trip.image}
          alt={trip.title}
          className="bg-white w-full h-96 object-cover rounded-lg my-6"
        />

        <div className="flex justify-between mb-6">
          <div className="text-center">
            <p className="font-semibold">Accommodation</p>
            <p className="text-gray-500">Hotel 4 Nights</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Transportation</p>
            <p className="text-gray-500">Qatar Airways</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Meal</p>
            <p className="text-gray-500">Included as Itinerary</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Duration</p>
            <p className="text-gray-500">{trip.duration}</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Date Trip</p>
            <p className="text-gray-500">{trip.date}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-6">Description</h2>
        <p className="text-gray-600 leading-relaxed">{trip.description}</p>

        <p className="text-orange-500 font-bold text-2xl mt-4">
          IDR {trip.price.toLocaleString()} / Person
        </p>

        <button
          onClick={() => handledeleteTrip(trip.id)}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg cursor-pointer"
        >
          Delete Trip
        </button>
      </div>
    </div>
  );
}
