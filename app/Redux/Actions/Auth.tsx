import {
  LOAD_USER,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  LOGOUT_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
} from "../Constant"
import axios from "axios"
import { log } from "react-native-reanimated"

const baseUrl = "http://ec2-13-53-66-52.eu-north-1.compute.amazonaws.com:8000/api/"

export const RegisterUser =
  (
    firstname: string,
    email: string,
    password: string,
    account_type: string,
    brand_name: string,
    mobile_number: string,
    city: string,
    address: string,
    profile_picture: string,
    preferred_genre: string,
    price_per_gig: string,
    music_genres_all: string,
    account_types_all: string,
    website_link: string,
    spotify_link: string,
    social_media_link: string,
    live_performance_per_month: string,
    average_musician_exposure: string,
    social_media_followers: string,
    specific_user_rating: string,
    peak_season: string,
    venue_type_all: string,
    venue_capacity: string,
    venue_name: string,
    organization_name: string,
  ) =>
  async (dispatch: any) => {
    dispatch({ type: REGISTER_USER_REQUEST })
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    // try {
    await axios
      .post(
        `${baseUrl}auth/signup/`,
        {
          firstname,
          email,
          password,
          account_type,
          brand_name,
          mobile_number,
          city,
          address,
          profile_picture,
          preferred_genre,
          price_per_gig,
          music_genres_all,
          account_types_all,
          website_link,
          spotify_link,
          social_media_link,
          live_performance_per_month,
          average_musician_exposure,
          social_media_followers,
          specific_user_rating,
          peak_season,
          venue_type_all,
          venue_capacity,
          venue_name,
          organization_name,
        },
        config,
      )
      .then((result) => {
        dispatch({
          type: REGISTER_USER,
          payload: result.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_USER_FAIL,
          payload: err?.response?.data,
        })
      })
  }

export const LoginUser = (email: String, password: String) => async (dispatch: any) => {

  // await axios.post(
  //   `${baseUrl}auth/login/`,
  //   {
  //     email,
  //     password,
  //   },
  //   {
  //     withCredentials: true,
  //     // credentials: "include",
  //     headers: { "Content-Type": "application/json" },
  //   },
  // )
  // // .then((result) => {
  //   dispatch({
  //     type: LOGIN_USER,
  //     payload: result.data
  //   });
  // })
  // .catch((err) => {
  //   dispatch({
  //     type: LOGIN_USER_FAIL,
  //     payload: err?.response?.data
  //   });
  // });
  try {
      dispatch({ type: LOGIN_USER_REQUEST })

    const data = await axios.post(`${baseUrl}auth/login/`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
      
      headers: { "Content-Type": "application/json" },
    },
  )
    console.log(data.data,"]]]]]]]][[[[[[[[[[[[")
    dispatch({
      type: LOGIN_USER,
      payload: data.data,
    })
  } catch (err) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: err?.response?.data,
    })
  
  }
}

export const LoadUser = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST })

    const { data } = await axios.get(
      `${baseUrl}auth/user/${id}`,

      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      },
    )
    dispatch({
      type: LOAD_USER,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error?.response?.data?.message,
    })

  }
}
