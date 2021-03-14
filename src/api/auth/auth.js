import axios from "axios";
import {API} from "../../backend";
axios.defaults.withCredentials = true;
export const signup = async (user)=>{
    const res = await axios.post(`${API}/signup`,user);
    return res;
    
}

export const signin = async (user)=>{
    const res = await axios.post(`${API}/signin`,user);
    return res;
}

export const IsSignned = async ()=>{
    const res = await axios.get(`${API}/isSignned`);
    return res;
}

export const signout = async ()=>{
    const res = await axios.get(`${API}/signout`);
    return res;

}

export const userprofile = async ()=>{
    const res = await axios.get(`${API}/userprofile`);
    return res;
}

