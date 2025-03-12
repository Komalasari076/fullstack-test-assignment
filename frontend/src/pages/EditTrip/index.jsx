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
    country: "",
    accommodation: "",
    transportation: "",
    eat: "",
    durationDay: "",
    durationNight: "",
    date: "",
    price: "",
    quota: "",
    description: "",
    image: "",
  });

  const trip = trips.find((trip) => trip.id === parseInt(id));
  console.log(trip);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const confirm = window.confirm("Are you sure you want to update this trip?")
    if (confirm) {
      await editTrip(id, updateFormData);
    }

    navigate("/");
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-9/10 mx-auto py-12 px-5 lg:px-48">
        <h2 className="text-2xl font-semibold mb-6">Edit Trip</h2>
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
              value={updateFormData.country}
              onChange={(e) => setUpdateFormData({...updateFormData, country: e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            >
              <option value="">Select Country</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Japan">Japan</option>
              <option value="UAE">UAE</option>
              <option value="France">France</option>
              <option value="Australia">Australia</option>
              <option value="Switzerland">Switzerland</option>
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
              placeholder={trip.accommodation}
              value={updateFormData.accommodation}
              onChange={(e) => setUpdateFormData({...updateFormData, accommodation : e.target.value})}
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
              placeholder={trip.transportation}
              value={updateFormData.transportation}
              onChange={(e) => setUpdateFormData({...updateFormData, transportation : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Eat */}
          <div>
            <label className="block text-md font-medium mb-2">Eat</label>
            <input
              type="text"
              name="eat"
              placeholder={trip.eat}
              value={updateFormData.eat}
              onChange={(e) => setUpdateFormData({...updateFormData, eat : e.target.value})}
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
                  placeholder={trip.durationDay}
                  value={updateFormData.durationDay}
                  onChange={(e) => setUpdateFormData({...updateFormData, durationDay : Number(e.target.value)})}
                  className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
                />
                <label className="block text-md font-medium mb-2">Day</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="durationNight"
                  placeholder={trip.durationNight}
                  value={updateFormData.durationNight}
                  onChange={(e) => setUpdateFormData({...updateFormData, durationNight : Number(e.target.value)})}
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
              placeholder={trip.date}
              value={updateFormData.date}
              onChange={(e) => setUpdateFormData({...updateFormData, date : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-md font-medium mb-2">Price</label>
            <input
              type="text"
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
              placeholder={trip.quota}
              value={updateFormData.quota}
              onChange={(e) => setUpdateFormData({...updateFormData, quota : e.target.value})}
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
