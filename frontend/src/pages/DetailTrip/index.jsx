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
      <div className="max-w-9/10 mx-auto py-12 px-5 lg:px-20">
        <h1 className="text-3xl font-bold">{trip.title}</h1>
        <p className="text-gray-500 text-lg">{trip.country}</p>

        <img
          src={trip.image}
          alt={trip.title}
          className="bg-white w-full h-96 object-cover rounded-lg mt-6 mb-12"
        />

        <div className="flex justify-between mb-12">
          <div>
            <p className="text-gray-500 text-sm ">Accommodation</p>
            <p className="font-semibold">Hotel 4 Nights</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Transportation</p>
            <p className="font-semibold">Qatar Airways</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Meal</p>
            <p className="font-semibold">Included as Itinerary</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Duration</p>
            <p className="font-semibold">4 Day 4 Ninght</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Date Trip</p>
            <p className="font-semibold">26 Agust 2024</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600 leading-relaxed">{trip.description}{trip.description}</p>
        </div>

        <p className="font-bold text-2xl mt-4">
          <span className="text-amber-500">IDR {trip.price.toLocaleString()}</span> / Person
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
