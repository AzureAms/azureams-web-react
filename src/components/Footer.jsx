import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="font-raleway p-6">
            <ul>
                <li className="flex items-center">
                    <img className="w-7 h-7 mr-4" src="./assets/logo.png" alt="azureams logo"/>
                    <p className="font-bold text-xl">AzureAms Programming Club</p>
                </li>
                <li className="flex items-center mt-6">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faEnvelope}/>
                    <a href="mailto:azureamsprogrammingclub@gmail.com">azureamsprogrammingclub@gmail.com</a>
                </li>
                <li className="flex items-center mt-4">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faFacebook}/>
                    <a href="https://www.facebook.com/azureamsprogramming" target="_blank" rel="noopener noreferrer">AzureAms Programming Club</a>
                </li>
                <li className="flex items-center mt-4">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faPhone}/>
                    <p>Phone</p>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;