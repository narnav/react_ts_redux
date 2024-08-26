// A mock function to mimic making an async request for data
import axios from "axios"
import { Student } from "../models/Student"
const SERVER ="http://localhost:5000/students"
export function fetchData() {
  return axios<Student[]>(SERVER)
}
export function addData(stud:Student) {
    console.log(stud);
    
    return axios.post<Student>(SERVER,stud)
  }

  export function delData(id:String) {
    
    return axios.delete<Student>(SERVER +"/" +id)
  }
