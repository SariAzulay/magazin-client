import axios from 'axios'
import store from '../redux/store'

// const user_name=store.getState().user.user_name
const user_name = "sara"

let HTTP = axios.create({
    baseURL: "http://localhost:4000/api/admin"
    , headers: {
        'content-type': 'application/json',
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3cVFUaEptMEpkZ2NkUWh0OGxnSFkyUnRSMTQyIiwiZW1haWwiOiJzYXJha29yYkBsZWFkZXIuY29kZXMiLCJpYXQiOjE2MjQ5NjUxNzN9.34-XI4v_n2EjMlXTlZAc1cXgiL1R-p0piYzD6JaqO_c'

    }
});

export const HttpView = axios.create({
    baseURL: "http://localhost:4000/api/PUBLIC"
    , headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'

    }
});

export const HttpFile = axios.create({
    baseURL: `http://files.codes/api/${user_name}`
    , headers: {
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3cVFUaEptMEpkZ2NkUWh0OGxnSFkyUnRSMTQyIiwiZW1haWwiOiJzYXJha29yYkBsZWFkZXIuY29kZXMiLCJpYXQiOjE2MjQ5NjUxNzN9.34-XI4v_n2EjMlXTlZAc1cXgiL1R-p0piYzD6JaqO_c'

    }
});