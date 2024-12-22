import React from "react";
import { Link } from "react-router-dom";

const AddClass = () => {
  return (
    <div className="content-wrapper">
      <div class="ml-3">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Add Users</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Class</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="card card-default">
              <form
                method="post"
                enctype="multipart/form-data"
                class="needs-validation"
                novalidate
              >
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <label
                        for="default-input"
                        class="block mb-2 text-sm font-medium text-gray-300"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        class="bg-input border border-gray-300 text-white text-sm rounded-lg  block w-full p-2"
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <label
                        for="default-input"
                        class="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="bg-input border border-gray-300 text-white text-sm rounded-lg  block w-full p-2"
                        placeholder="Enter Last Name"
                      />
                    </div>

                    <div class="col-md-3 mt-3">
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Select an option
                      </label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Link to="/class">
                    <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-lg ml-3 mb-3">
                      Back
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg mr-3 mb-3"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddClass;
