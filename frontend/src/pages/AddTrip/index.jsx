import React from "react";
import { useState } from "react";
import { useTrip } from "../../context/TripProvider";
import { useNavigate } from "react-router-dom";

const AddTrip = () => {
  const { addTrip } = useTrip({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    country: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTrip(formData);
    console.log("data", formData);
    navigate("/");
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add Trip</h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Title Trip</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Country</option>
              <option value="indonesia">Indonesia</option>
              <option value="japan">Japan</option>
              <option value="usa">USA</option>
            </select>
          </div>

          {/* Accommodation */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Accommodation
            </label>
            <input
              type="text"
              name="accommodation"
              value={formData.accommodation}
              // onChange={(e) => setFormData({...formData, name : e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Transportation */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Transportation
            </label>
            <input
              type="text"
              name="transportation"
              value={formData.transportation}
              // onChange={(e) => setFormData({...formData, name : e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Eat */}
          <div>
            <label className="block text-sm font-medium mb-2">Eat</label>
            <input
              type="text"
              name="eat"
              value={formData.eat}
              // onChange={(e) => setFormData({...formData, name : e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="durationDay"
                  value={formData.durationDay}
                  // onChange={(e) => setFormData({...formData, name : e.target.value})}
                  className="w-full p-2 border rounded-md"
                />
                <label className="block text-sm font-medium mb-2">Day</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="durationNight"
                  value={formData.durationNight}
                  // onChange={(e) => setFormData({...formData, name : e.target.value})}
                  className="w-full p-2 border rounded-md"
                />
                <label className="block text-sm font-medium mb-2">Night</label>
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-2">Date Trip</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              // onChange={(e) => setFormData({...formData, name : e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Quota */}
          <div>
            <label className="block text-sm font-medium mb-2">Quota</label>
            <input
              type="number"
              name="quota"
              value={formData.quota}
              // onChange={(e) => setFormData({...formData, name : e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full p-2 border rounded-md"
              rows="3"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
          >
            Add Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTrip;
