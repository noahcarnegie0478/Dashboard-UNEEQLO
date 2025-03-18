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
              // @REVIEW - Please either use className, or inline styling but not both of them. See https://tailwindcss.com/docs/styling-with-utility-classes#using-arbitrary-values on how to use custom value in tailwind
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
              // @REVIEW - Avoid passing React component like this
              // Also, please create a separate function component like
              // const Header = () => {
              //  return (
              // <div
              //   className="flex gap-5 items-center  "
              //   style={{ width: "100%" }}
              // >
              //   <box-icon
              //     name="mobile-landscape"
              //     color="#ff0000"
              //     style={{ width: "35px", height: "35px" }}
              //   ></box-icon>{" "}
              //   <p className="text-lg font-bold  hover:text-xl hover:text-red-500">
              //     Banner
              //   </p>
              // </div>
              // )
              // }
              //
              // And then in the code
              // <AccordionItem header={<Header/>} />
              //
              // Try to make reusable, and each component should only serve a purpose
              // See https://reactarchitecture.org/architecture/atomic-design/#:~:text=This%20architectural%20pattern%20is%20derived,complexity%20to%20more%20complex%20ones. on how to organise ans structure React components
              //
              header={
                <div
                  className="flex gap-5 items-center  "
                  style={{ width: "100%" }}
                >
                  <box-icon
                    name="mobile-landscape"
                    // @REVIEW - Please either use className, or inline styling but not both of them. See https://tailwindcss.com/docs/styling-with-utility-classes#using-arbitrary-values on how to use custom value in tailwind
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
                        // @REVIEW - Avoid declaring and calling function in component. Create a separate function instead
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
                        // @REVIEW - Avoid declaring and calling function in component. Create a separate function instead
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
                      <p
                        className="hover:font-bold hover:text-lg hover:text-red-500"
                        onClick={() => setPage("item-create")}
                      >
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
