import { html } from "../../../node_modules/lit-html/lit-html.js";
import { factTemplate } from "../shared/factTemplate.js";

export const dashboardTemplate = (facts) => html `
  <!-- Dashboard page -->
  <h2>Fun Facts</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${facts.length > 0
    ? html `
    <ul class="card-wrapper">
        ${ facts.map(s => factTemplate(s, true)) }
  </ul >`
  : html `
  <h2>No Fun Facts yet.</h2>
  `}  
  </section>`;