import { Ref, ref } from "vue"
class AuthService {
    private jwt: Ref<string>
    private error: Ref<string>

    constructor() {
        this.jwt = ref<string>('')
        this.error= ref<string>('');
        
    }

    getJwt() {
        return this.jwt
        }
    getError() {
        return this.error
    }

    async login(email:string,password:string): Promise<boolean> {
        try{
            const res = await  fetch('https: //hfp69ilv.directus.app/auth/login', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }) 
            })

                const response = await res.json()

                if('errors' in response) {
                    this.error.value = 'login failed'
                    return false
                }
                this.jwt.value = response.data.access_token
                return true

        
    
            }
            catch(error){
            this.error.value = 'login failed'
            return false
        }
    }
}

export default AuthService