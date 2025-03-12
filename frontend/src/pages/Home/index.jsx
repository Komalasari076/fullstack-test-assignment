import React from "react";
import { useTrip } from "../../context/TripProvider";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const { trips, loading } = useTrip();

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="bg-gray-100">
      <div className="max-w-9/10 mx-auto py-12">
        <header className="flex justify-between mb-10">
          <h1 className="text-3xl font-bold">Income Trip</h1>
          <Link to={"/add-trip"}><button className="bg-amber-500 rounded-md p-2 px-6 font-semibold text-white cursor-pointer transition-transform duration-300 hover:scale-94">Add Trip</button></Link>
        </header>

        <main className="grid grid-cols-3 gap-10">
          {trips.map((trip) => (
            <Link to={`/detail-trip/${trip.id}`}>
              <div key={trip.id} className="bg-white rounded-xl shadow-lg p-3 transition-transform duration-300 hover:scale-96">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="bg-gray-100 w-full h-64 object-cover rounded-lg"
                    
                  />
                  <span className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow">{trip.quota}</span>
                  <span className="absolute top-2 right-16 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow hover:text-amber-600">
                    <Link to={`/edit-trip/${trip.id}`}><i class="fa-solid fa-pen"></i></Link>
                  </span>
                </div>

                {/* Content Section */}
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-900 cursor-pointer">{trip.title}</h3>
                  <div className="flex justify-between mt-2">
                    <p className="text-amber-500 font-bold text-sm mt-1">IDR. {trip.price ? trip.price.toLocaleString() : ""}</p>
                    <p className="text-gray-500 text-sm mt-1">{trip.country}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
