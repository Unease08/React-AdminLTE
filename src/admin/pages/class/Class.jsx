import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Class = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Class</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="">Home</a>
                </li>
                <li className="breadcrumb-item active">Users</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="flex justify-end">
                    <Link to="/add-class">
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Add Class
                      </button>
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>S.N</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>John Doe</td>
                          <td>john@example.com</td>
                          <td>123 Street</td>
                          <td>
                            <div class="flex items-center">
                              <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                              Online
                            </div>
                          </td>
                          <td>2024-12-22</td>
                          <td>
                            <div className="flex gap-2">
                              <button className="flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1.5">
                                <MdOutlineRemoveRedEye className="text-md" />
                                <span>View</span>
                              </button>
                              <button className="flex items-center gap-1 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5">
                                <FaEdit className="text-md" />
                                <span>Edit</span>
                              </button>
                              <button className="flex items-center gap-1 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1.5">
                                <MdDeleteForever className="text-md" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class;
