export class TokenHandler {

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    setUserId(userId: any) {
        localStorage.setItem('userid', userId);
    }

    getUserId(): string | null {
        return localStorage.getItem('userid');
    }

    removeUserId() {
        localStorage.removeItem('userid');
    }
}