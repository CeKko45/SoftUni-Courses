import { html } from "../../../node_modules/lit-html/lit-html.js";

export const navTemplate = (isUserLoggedIn, logoutHandler) => html`
 <!-- Navigation -->
 <a id="logo" href="/"
 ><img id="logo-img" src="./images/logo.png" alt=""
/></a>

<nav>
 <div>
   <a href="/dashboard">Fun Facts</a>
 </div>
${isUserLoggedIn
        ? html`
 <!-- Logged-in users -->
 <div class="user">
   <a href="/facts">Add Fact</a>
   <a href="javascript:void(0)" @click=${logoutHandler}>Logout</a>
 </div>`
        : html`
 <!-- Guest users -->
 <div class="guest">
   <a href="/login">Login</a>
   <a href="/register">Register</a>
   
 </div>`
    }
</nav>
`