interface userInfo {
    token: string,
    refreshToken: string,
    user: userDetails
}

interface userDetails {
    id: number,
    name: string,
    email: string,
    permissionLevel: string
}

export default userInfo;