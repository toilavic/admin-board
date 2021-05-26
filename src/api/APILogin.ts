// import axios from 'axios'
// import constants from '../constant.json'



// interface userLoginRequired {
//     email: String,
//     password: String
// }

// type LoginFunction = (userObj: userLoginRequired) => userLoginInfo;

// function APILogin(fn: LoginFunction) {
//     return axios.post(constants.baseAddress + '/login', userLoginRequired)
//         .then(response => response)
//         .catch(error => error)
// }
// export default APILogin;

import axios, { AxiosResponse } from 'axios';

interface LoginType {
    username: String,
    password: String
}

interface userInfo {
    id: Number,
    name: String,
    email: String,
    permissionLevel: String
}

interface userLoginInfo {
    token: String,
    refreshToken: String,
    user: userInfo
}

const instance = axios.create({
	baseURL: "https://api.nome.fi:54321/v1/",
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	// get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	// put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	// delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Post = {
	// getPosts: (): Promise<PostType[]> => requests.get('posts'),
	// getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
	login: (post: LoginType): Promise<userLoginInfo> =>
		requests.post('login', post),
	// updatePost: (post: PostType, id: number): Promise<PostType> =>
	// 	requests.put(`posts/${id}`, post),
	// deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};