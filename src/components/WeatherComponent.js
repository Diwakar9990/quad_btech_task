import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/taskSlice";

const WeatherComponent = () => {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const { weather, loading, error } = useSelector(state => state.tasks);

    const handleFetchWeather = () => {
        if (city.trim() !== "") {
            dispatch(fetchWeather(city));
        }
    };

    return (
        <div className="m-3">
            <h3 className="mb-8 text-2xl lg:text-6xl md:text-5xl font-semibold text-[#489c4b]">Check Weather for Outdoor Tasks</h3>
            <div className="flex gap-2 mt-4">
                <input
                    className="p-2 border-2 rounded-xl a-2 border-[#80808030] text-xl sm:min-w-96"
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="text-nowrap w-28 rounded-xl font-semibold bg-[#539e5629] text-[#539e56]" onClick={handleFetchWeather}>Get Weather</button>
            </div>
            {loading && <p className="m-2 font-semibold text-[#489c4b] text-lg md:text-xl lg:text-2xl">Loading...</p>}
            {error && <p className="m-2 font-semibold text-[#489c4b] text-lg md:text-xl lg:text-2xl" style={{ color: "red" }}>{error.message}</p>}
            {weather && (
                <div className="m-2 font-semibold text-[#489c4b] text-lg md:text-xl lg:text-2xl">
                    <h4>City: {weather.name}, {weather.sys.country}</h4>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;
