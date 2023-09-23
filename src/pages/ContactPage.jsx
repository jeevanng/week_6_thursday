// import { Navigate } from "react-router-dom";
import RedirectHomeButton from "../components/RedirectHomeButton"


export default function ContactPage(props){
	return(
		<div>
			<h1>Contact Us</h1>

            {/* <Navigate to="/" /> */}
            <RedirectHomeButton />
		</div>
	)
}