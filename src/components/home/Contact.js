import React from "react"
import Title from "../globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/amt2.vistaprint@gmail.com" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Alan Walker"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="5"
                className="form-control"
                placeholder="Your description here..."
              />
            </div>
            <button
              type="submit"
              className="btn btn-yellow  btn-block text-capitalize mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
