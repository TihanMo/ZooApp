import { GoogleLogin } from '@react-oauth/google';

export default function Login() {

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}