export interface userInfoObject {
    Username: string;
    Name: string;
    Address: string;
}

export interface currentUser {
    isLoggedIn: boolean;
    userInfo: Object;
    fetchCurrentUser: Function;
}