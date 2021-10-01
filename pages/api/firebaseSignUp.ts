import { app } from "./firbaseInit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
type emailPassword = {
    email: string;
    password: string;
};
export function withEmailAndPassword(credentials: emailPassword) {
    createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
    );
}
