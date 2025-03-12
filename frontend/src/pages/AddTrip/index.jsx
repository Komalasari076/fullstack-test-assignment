import React from "react";
import { useState } from "react";
import { useTrip } from "../../context/TripProvider";
import { useNavigate } from "react-router-dom";

const AddTrip = () => {
  const { addTrip } = useTrip({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTrip(formData);
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
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-md font-medium mb-2">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
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
              value={formData.accommodation}
              onChange={(e) => setFormData({...formData, accommodation : e.target.value})}
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
              value={formData.transportation}
              onChange={(e) => setFormData({...formData, transportation : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Eat */}
          <div>
            <label className="block text-md font-medium mb-2">Eat</label>
            <input
              type="text"
              name="eat"
              value={formData.eat}
              onChange={(e) => setFormData({...formData, eat : e.target.value})}
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
                  value={formData.durationDay}
                  onChange={(e) => setFormData({...formData, durationDay : Number(e.target.value)})}
                  className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
                />
                <label className="block text-md font-medium mb-2">Day</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="durationNight"
                  value={formData.durationNight}
                  onChange={(e) => setFormData({...formData, durationNight : Number(e.target.value)})}
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
              value={formData.date}
              onChange={(e) => setFormData({...formData, date : e.target.value})}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-md font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Quota */}
          <div>
            <label className="block text-md font-medium mb-2">Quota</label>
            <input
              type="number"
              name="quota"
              value={formData.quota}
              onChange={(e) => setFormData({...formData, quota : e.target.value})}
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
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
          >
            Add Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTrip;
