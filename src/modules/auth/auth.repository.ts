import api from "../../lib/api"

export const authRepository = {
    async singup(name: string, email: string, password: string) {
        const result = await api.post("/auth/signup", { 
            name, 
            email, 
            password 
        });
        const { user, token } = result.data;
        return { user, token };
    }
}