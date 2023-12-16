import { html } from "../../../node_modules/lit-html/lit-html.js";


export const editTemplate = (fact, submitHandler) => html `

<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
      <h2>Edit Fact</h2>
      <form class="edit-form" @submit=${(e) => submitHandler(e, fact._id)}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value=${fact.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${fact.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="10"
      cols="50"
      .value=${fact.description}
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="10"
      cols="50"
      .value=${fact.moreInfo}
    ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  </section>
`