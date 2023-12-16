import { html } from "../../../node_modules/lit-html/lit-html.js";

export const factTemplate = (fact, shouldShow) => html `
<div class="fact">
      <img src=${fact.imageUrl} alt="example1" />
      <h3 class="category">${fact.category}</h3>
      <p class="description">${fact.description}</p>
      ${shouldShow
    ? html `
          <a class="details-btn" href=${`/details/${fact._id}`}>More Info</a>`
: ""}
    </div>`;