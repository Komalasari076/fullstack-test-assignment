import React from "react";
import { useTrip } from "../../context/TripProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { trips, loading, addTrip, deleteTrip } = useTrip();

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16">
        <div className="flex justify-between mb-10">
          <h1 className="text-2xl font-bold">Income Trip</h1>
          <button className="bg-yellow-600 rounded-md p-2 px-6 font-semibold text-white">
            Add Trip
          </button>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-lg p-4">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="bg-gray-100 w-full h-64 object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                  12/15
                </span>
              </div>

              {/* Content Section */}
              <div className="mt-3">
                <h3 className="text-md font-semibold text-gray-900 cursor-pointer">
                  <Link to={`/detail-trip/${trip.id}`}>{trip.title}</Link>
                </h3>
                <div className="flex justify-between mt-2">
                  <p className="text-yellow-500 font-bold text-sm mt-1">
                    {trip.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{trip.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
