import React, { useState } from "react";
import axios from "axios";

// @REVIEW - Checkout the reviews in ItemForm and examples
function BannerForm() {
  const [image, setImage] = useState(null);
  const [topic, setTopic] = useState("");
  const [order_no, setOrder] = useState("");
  const [type_of_banner, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sub_description, setSubdescription] = useState("");
  const [description_color, setDescriptionColor] = useState("");
  const [price, setPrice] = useState("");
  const [url, setURL] = useState("");
  const [first_date, setFirstDate] = useState(new Date());
  const [end_date, setEndDate] = useState(new Date());
  const [error, setError] = useState("");

  const [sub_description_color, setSupDescriptionColor] = useState("");
  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", import.meta.env.VITE_CLOUD_DATABASE);
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    const ImagePosting = await axios.post(
      "https://api.cloudinary.com/v1_1/dptvqmded/image/upload",
      formData,
    );
    const ImageURL = await ImagePosting.data.url;

    const response = await axios.post(
      "http://localhost:3000/api/banner/create",

      {
        topic: topic,
        order_no: order_no,
        type_of_banner: type_of_banner,
        title: title,
        description: description,
        sub_description: sub_description,
        description_color: description_color,
        sub_description_color: sub_description_color,
        price: price,
        url: url,
        image: ImageURL,
        first_date: first_date,
        end_date: end_date,
      },
    );

    console.log(response.data);
  };

  const PostBanner = async () => {
    if (topic === "") {
      setError("please fill in topic field");
    } else if (type_of_banner === "") {
      setError("please fill in banner type field");
    } else if (title === "") {
      setError("please fill in title field");
    } else if (description === "") {
      setError("please fill in description field");
    } else if (sub_description === "") {
      setError("please fill in sub-description field");
    } else if (description_color === "") {
      setError("please fill in description color field");
    } else if (sub_description_color === "") {
      setError("please fill in sub-description color field");
    } else if (price === "") {
      setError("please fill in price field");
    } else if (url === "") {
      setError("please fill in url field");
    } else if (image === null) {
      setError("please upload the image");
    } else if (first_date === "") {
      setError("please choose the date");
    } else if (end_date === "") {
      setError("please choose the date");
    } else {
      try {
        handleSubmission();
      } catch (error) {
        console.log(error);
      }
    }
  };

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
              onChange={(e) => setTopic(e.target.value)}
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
              onChange={(e) => setOrder(e.target.value)}
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
              onChange={(e) => setType(e.target.value)}
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
              onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="color"
                id="description"
                name="description"
                className="h-12 rounded flex-1"
                onChange={(e) => setDescriptionColor(e.target.value)}
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
                onChange={(e) => setSubdescription(e.target.value)}
              />
              <input
                type="color"
                id="subdescription"
                name="subdescription"
                className="h-12 rounded flex-1"
                onChange={(e) => setSupDescriptionColor(e.target.value)}
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
              onChange={(e) => setPrice(e.target.value)}
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
              onChange={(e) => setURL(e.target.value)}
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
              onChange={(e) => setImage(e.target.files[0])}
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
              onChange={(e) => setFirstDate(new Date(e.target.value))}
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
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </div>
          <div className="banner-btn col-span-2 h-10 flex justify-center mt-10">
            <div
              className="submit p-2 bg-red-500 px-20 rounded-md border-1 text-white font-bold hover:bg-red-300"
              onClick={() => PostBanner()}
            >
              <p>Add</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BannerForm;

// {

//   "topic": "Women",
//   "order_no": "01",
//   "type_of_banner": "item",
//   "title": "Pleated Jeans new colours",
//   "description": "White and Yellow has now comeback for summer",
//   "sub_description": "If you buy at store before today, you will get 10% of with any bill over $50",
//   "description_color": "#ff000",
//   "sub_description_color": "#00000",
//   "price": 7,
//   "url": "google.com",
//   "image": "httlp",
//   "first_date": "2025-03-14T14:00:00.000Z",
//   "end_date": "2025-04-14T14:00:00.000Z",

// }
