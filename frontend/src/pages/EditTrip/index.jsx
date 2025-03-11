import React from "react";
import { useState } from "react";
import { useTrip } from "../../context/TripProvider";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTrip() {
  const { id } = useParams();
  const { trips, editTrip } = useTrip({});
  const navigate = useNavigate();
  const [updateFormData, setUpdateFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    country: "",
  });

  const trip = trips.find((trip) => trip.id === parseInt(id));
  console.log(trip);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editTrip(id, updateFormData);
    navigate("/");
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-9/10 mx-auto py-12 px-5 lg:px-48">
        <h2 className="text-2xl font-semibold mb-6">Add Trip</h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Title */}
          <div>
            <label className="block text-md font-medium mb-2">Title Trip</label>
            <input
              type="text"
              name="title"
              placeholder={trip.title}
              value={updateFormData.title}
              onChange={(e) => setUpdateFormData({ ...updateFormData, title: e.target.value })}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-md font-medium mb-2">Country</label>
            <select
              name="country"
              placeholder={trip.country}
              value={updateFormData.country}
              onChange={(e) => setUpdateFormData({...updateFormData, country: e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            >
              <option value=""></option>
              <option value="indonesia">Indonesia</option>
              <option value="japan">Japan</option>
              <option value="usa">USA</option>
            </select>
          </div>

          {/* Accommodation */}
          <div>
            <label className="block text-md font-medium mb-2">
              Accommodation
            </label>
            <input
              type="text"
              name="accommodation"
              value={updateFormData.accommodation}
              // onChange={(e) => setUpdateFormData({...updateFormData, name : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Transportation */}
          <div>
            <label className="block text-md font-medium mb-2">
              Transportation
            </label>
            <input
              type="text"
              name="transportation"
              value={updateFormData.transportation}
              // onChange={(e) => setUpdateFormData({...updateFormData, name : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Eat */}
          <div>
            <label className="block text-md font-medium mb-2">Eat</label>
            <input
              type="text"
              name="eat"
              value={updateFormData.eat}
              // onChange={(e) => setUpdateFormData({...updateFormData, name : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-md font-medium mb-2">Duration</label>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="durationDay"
                  value={updateFormData.durationDay}
                  // onChange={(e) => setUpdateFormData({...updateFormData, name : e.target.value})}
                  className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
                />
                <label className="block text-md font-medium mb-2">Day</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="durationNight"
                  value={updateFormData.durationNight}
                  // onChange={(e) => setUpdateFormData({...updateFormData, name : e.target.value})}
                  className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
                />
                <label className="block text-md font-medium mb-2">Night</label>
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-md font-medium mb-2">Date Trip</label>
            <input
              type="date"
              name="date"
              value={updateFormData.date}
              // onChange={(e) => setUpdateFormData({...updateFormData, name : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-md font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              placeholder={trip.price}
              value={updateFormData.price}
              onChange={(e) => setUpdateFormData({...updateFormData, price: Number(e.target.value)})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Quota */}
          <div>
            <label className="block text-md font-medium mb-2">Quota</label>
            <input
              type="number"
              name="quota"
              value={updateFormData.quota}
              // onChange={(e) => setUpdateFormData({...updateFormData, name : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-md font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder={trip.description}
              value={updateFormData.description}
              onChange={(e) => setUpdateFormData({...updateFormData, description: e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
              rows="3"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-md font-medium mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder={trip.image}
              value={updateFormData.image}
              onChange={(e) => setUpdateFormData({ ...updateFormData, image: e.target.value })}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 mt-6 rounded-md hover:bg-yellow-600"
          >
            update Trip
          </button>
        </form>
      </div>
    </div>
  );
}
