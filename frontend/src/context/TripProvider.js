import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios ";

const TripContext = createContext();

const URL = "http://localhost:3001/trips";

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setTrips([...trips, response.data]);
    } catch (error) {
      console.error("error get data", error);
    }
    setLoading(false);
  };

  const addTrip = async (trip) => {
    try {
      const response = await axios.post(URL, trip);
      setTrips([...trips, response.data]);
    } catch {
      console.error("error add data", error);
    }
  };

  const editTrip = async (id, updateTrip) => {
    try {
      const response = await axios.put(`${URL}/${id}`, updateTrip);
      setTrips(trips.map((trip) => (trip.id === id ? response.data : trip)));
    } catch (error) {
      console.error("error update data", error);
    }
  };

  const deleteTrip = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setTrips(trips.filter((trip) => trip.id !== id));
    } catch (error) {
      console.error("error delete data", error);
    }
  };

  return (
    <TripContext.Provider
      value={{ trips, loading, getTrips, addTrip, editTrip, deleteTrip }}
    >
      {children}
    </TripContext.Provider>
  );
};

// costum hook
export const useTrip = () => useContext(TripContext);
