import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const SocialLogin = () => {

    const navigate = useNavigate();
    const { googleLogin, githubLogin } = useAuth();

    const handleSocialLogin = (media) => {
        media()
            .then( () => {
                toast.success('User Logged in Successful');
                navigate('/')
            })
            .catch( err => {
                toast.error(err.message)
            })
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">Google</button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn btn-neutral btn-sm">Github</button>

            </div>
        </>
    );
};

export default SocialLogin;