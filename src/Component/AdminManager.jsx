import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

function AdminManager({ setPage }) {
  return (
    <div className="manager-container bg-white flex flex-start w-100 h-screen  pl-20  border-r-1">
      <div className="middle-box w-auto h-auto mt-50">
        {/* avatar and name and role */}
        <div className="admin-person mb-5 w-auto h-30 flex gap-4 items-center ">
          <div className="admin-img">
            <box-icon
              name="user-circle"
              style={{ width: "70px", height: "70px" }}
            ></box-icon>
          </div>
          <div className="admin-info">
            <h2 className="text-2xl font-bold">Noah Carnegie</h2>
            <p className="font-light">ADMINNISTRATOR</p>
          </div>
        </div>

        {/* banner*/}
        <div className=" mb-5 w-70 h-20 ">
          <Accordion className="bg-white">
            <AccordionItem
              className="w-full mb-1  py-2 px-8 rounded pl-10 "
              header={
                <div
                  className="flex gap-5 items-center  "
                  style={{ width: "100%" }}
                >
                  <box-icon
                    name="mobile-landscape"
                    color="#ff0000"
                    style={{ width: "35px", height: "35px" }}
                  ></box-icon>{" "}
                  <p className="text-lg font-bold  hover:text-xl hover:text-red-500">
                    Banner
                  </p>
                </div>
              }
            >
              {
                <div className="ml-10">
                  <ul>
                    <li>
                      <p
                        className="hover:font-bold hover:text-lg hover:text-red-500"
                        onClick={() => setPage("banner-create")}
                      >
                        Add Banner
                      </p>
                    </li>
                    <li>
                      <p className="hover:font-bold hover:text-lg hover:text-red-500">
                        Find Banner
                      </p>
                    </li>
                  </ul>
                </div>
              }
            </AccordionItem>
            <AccordionItem
              className="w-full mb-1  py-2 px-8 rounded pl-10 "
              header={
                <div
                  className="flex gap-5 items-center  "
                  style={{ width: "100%" }}
                >
                  <box-icon
                    name="category"
                    color="#ff0000"
                    style={{ width: "35px", height: "35px" }}
                  ></box-icon>{" "}
                  <p className="text-lg font-bold  hover:text-xl hover:text-red-500">
                    Category
                  </p>
                </div>
              }
            >
              {
                <div className="ml-10">
                  <ul>
                    <li>
                      <p
                        className="hover:font-bold hover:text-lg hover:text-red-500"
                        onClick={() => setPage("category-create")}
                      >
                        Add category
                      </p>
                    </li>
                    <li>
                      <p className="hover:font-bold hover:text-lg hover:text-red-500">
                        Find category
                      </p>
                    </li>
                  </ul>
                </div>
              }
            </AccordionItem>
            <AccordionItem
              className="w-full mb-1  py-2 px-8 rounded pl-10 "
              header={
                <div
                  className="flex gap-5 items-center  "
                  style={{ width: "100%" }}
                >
                  <box-icon
                    name="sitemap"
                    color="#ff0000"
                    style={{ width: "35px", height: "35px" }}
                  ></box-icon>{" "}
                  <p className="text-lg font-bold  hover:text-xl hover:text-red-500">
                    Item
                  </p>
                </div>
              }
            >
              {
                <div className="ml-10">
                  <ul>
                    <li>
                      <p className="hover:font-bold hover:text-lg hover:text-red-500">
                        Add Item
                      </p>
                    </li>
                    <li>
                      <p className="hover:font-bold hover:text-lg hover:text-red-500">
                        Find Item
                      </p>
                    </li>
                  </ul>
                </div>
              }
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default AdminManager;
