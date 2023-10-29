import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Signin(props){
  const issignin = props.issignin;
  const setissignin = props.setissignin;
  const navigate = useNavigate();
  function clickhandler(){
    setissignin(false);
    navigate("/");
  }
  
  return(
<div className="sign-in-page-div">
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>

<div className="signin-content-div">
<div className="content-putting">
<p>Sign In</p>
</div>
<div className="email-content-putting">
<input
required
className="email-signin-input"
type="email"
placeholder="Email or phone number"
/>
<br/>
<br/>
<input
required
className="email-signin-input"
type="password"
placeholder="Password"
/>
</div>
<div className="signin-button-content-putting">
<button>Sign In</button>
<div className="button-below-text">
<span>Remember me</span>
<span>Need Help ?</span>
</div>
</div>
<div className="text-content-putting">
New to Netflix ? <Link to="/" onClick={clickhandler}><span className="sign-up-text"> Sign up now.</span></Link>
<br/>
<br/>
This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="learmore">Learn more.</span>
</div>
</div>
<div className="footer-div">
<div className="footer-div-content">
<div className="footer-div-part-1">
<p>Questions? Call 000-800-919-1694</p>
</div>
<div className="footer-div-part-2">
<div>
<span className="span1">FAQ</span>
<span className="span2">Help Centre</span>
<span className="span3">Terms of Use</span>
<span className="span4">Privacy</span>
</div>
<br/>
<div>
<span className="span5">Cookie Preferences</span>
<span className="span6">Corporate Information</span>
</div>
</div>
<div className="footer-div-part-3">
 <select className="footer-select">
                    <option value="English">English</option>
                    <option value="हिन्दी">हिन्दी</option>
                  </select>
</div>

</div>
</div>
</div>
  );
}

export default Signin;