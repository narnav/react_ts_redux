// A mock function to mimic making an async request for data
import axios from "axios"
import { Car } from "../../models/Car"
const SERVER ="http://localhost:5000/cars"

export function fetchData() {
  return axios<Car[]>(SERVER)
}


