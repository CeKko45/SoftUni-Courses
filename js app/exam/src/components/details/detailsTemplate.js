import { html } from "../../../node_modules/lit-html/lit-html.js";


export const detailsTemplate = (fact, isOwner, deleteHandler) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${fact.imageUrl} alt="example1" />
      <p id="details-category">${fact.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">
            ${fact.description}
            </p>
             <p id ="more-info">
              ${fact.moreInfo}
                  </p>
        </div>

        <h3>Likes:<span id="likes">0</span></h3>

        ${isOwner
        ? html`
        <div id="action-buttons">
      <a href=${`/edit/${fact._id}`} id="edit-btn">Edit</a>
      <a href="javascript:void(0)" id="delete-btn" @click=${(e) => deleteHandler(fact._id)}>Delete</a>`
        : ""
    } `
