import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// OpenWeather API Key (Replace with your own key)
const API_KEY = "8052731c36a205db9f94b87199c4d7d7";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
//siway13743@payposs.com

// Async thunk to fetch weather data
export const fetchWeather = createAsyncThunk(
    "tasks/fetchWeather",
    async (city, thunkAPI) => {
        try {
            const api = `${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
            console.log(api);
            const response = await axios.get(api);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Error fetching weather data");
        }
    }
);

const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Load from localStorage
    weather: null,
    loading: false,
    error: null,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Persist tasks
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Update localStorage
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
            localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Persist changes
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { addTask, deleteTask, toggleTaskCompletion, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
