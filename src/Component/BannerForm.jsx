import React from "react";

function BannerForm() {
  return (
    <div className="bannerForm w-400 h-screen flex justify-center items-center">
      <div className="form-box h-auto bg-blue " style={{ width: "60%" }}>
        <h2 className="mb-5 text-center text-3xl font-bold">Banner Create</h2>
        <form className="grid grid-cols-2 gap-4">
          {/* topic input */}
          <div className="topic  ">
            <label
              htmlFor="topic"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Topic
            </label>
            <input
              type="text"
              placeholder="eg:Women"
              alt="topic"
              name="topic"
              className="h-10 w-full border-2 rounded-md px-2"
            />
          </div>
          {/* order input */}
          <div className="order  ">
            <label
              htmlFor="order"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Order N0.
            </label>
            <input
              type="text"
              placeholder="eg:01"
              alt="order"
              name="order"
              className="h-10 w-full border-2 rounded-md px-2"
            />
          </div>
          {/* type input */}
          <div className="type  ">
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Type
            </label>
            <input
              type="text"
              placeholder="eg:item, magazine"
              alt="type"
              name="type"
              className="h-10 w-full border-2 rounded-md px-2"
            />
          </div>
          {/* title input */}
          <div className="title  ">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="eg: UTs songoku are coming"
              alt="title"
              name="title"
              className="h-10 w-full border-2 rounded-md px-2"
            />
          </div>
          {/* Description input */}
          <div className="description  col-span-2 ">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Description
            </label>
            <div className="des-input flex items-center flex-wrap gap-2">
              <input
                type="text"
                placeholder="eg: Description for advertising"
                alt="description"
                name="description"
                className="border-2 h-10 rounded-md px-2 flex-4"
              />
              <input
                type="color"
                id="description"
                name="description"
                className="h-12 rounded flex-1"
              />
            </div>
          </div>
          {/* sub-description input */}
          <div className="subdescription  col-span-2 ">
            <label
              htmlFor="subdescription"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Sub-Description
            </label>
            <div className="des-input flex items-center flex-wrap gap-2">
              <input
                type="text"
                placeholder="eg: Description for advertising in more detail"
                alt="subdescription"
                name="subdescription"
                className="border-2 h-10 rounded-md px-2 flex-4"
              />
              <input
                type="color"
                id="subdescription"
                name="subdescription"
                className="h-12 rounded flex-1"
              />
            </div>
          </div>
          {/* price input */}
          <div className="topic  ">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Price
            </label>
            <input
              type="text"
              placeholder="eg:$59.99"
              alt="price"
              name="price"
              className="h-10 w-full border-2 rounded-md px-2"
            />
          </div>
          {/* URL input */}
          <div className="order  ">
            <label
              htmlFor="url"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              URL
            </label>
            <input
              type="text"
              placeholder="path of heading page"
              alt="url"
              name="url"
              className="h-10 w-full border-2 rounded-md px-2"
            />
          </div>
          {/* image input */}
          <div className="description  col-span-2 ">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Image
            </label>
            <input
              type="file"
              alt="img"
              name="img"
              className="border-2 w-full h-10 rounded-md px-2  "
            />
          </div>
          {/* first-date input */}
          <div className="topic  ">
            <label
              htmlFor="topic"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              First Date
            </label>
            <input
              type="date"
              placeholder="eg:Women"
              alt="first-date"
              name="first-date"
              className="h-10 w-full border-2 rounded-md px-2"
            />
          </div>
          {/* end-date input */}
          <div className="order  ">
            <label
              htmlFor="order"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              End Date
            </label>
            <input
              type="date"
              placeholder="eg:01"
              alt="end-date"
              name="end-date"
              className="h-10 w-full border-2 rounded-md px-2"
            />
          </div>
          <div className="banner-btn col-span-2 h-10 flex justify-center mt-10">
            <div className="submit p-2 bg-red-500 px-20 rounded-md border-1 text-white font-bold hover:bg-red-300">
              <p>Add</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BannerForm;
