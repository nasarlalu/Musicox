export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "d6e86064c46649939f1ea9d7cec6e06d";
// const clientSecret = '66be02dfd9134d6ea062aeee13c71e89';

// const mtok = "BQCUicmE8hP9hm4KVVbqd_soCkd1A81LwSYlhauTK0bEyg1UUeTjcuZb_mBJcEQ5ulZ3o16t4KKjILEjk18cy-YIBQGIVO0fLI3EJVZpZbX3ZXNqrEOnQIQY27yf38eQWh1f8DRD0Qk8pfbDXR1GWocEHaFk4egOy06FLy2FPVqD2Ttm6AT8SlKDL3lVss_musRQmvS7K0phm5HCouvi1A"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;