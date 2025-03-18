import React, { useEffect, useState } from "react";
import axios from "axios";

// @REVIEW - Checkout the reviews in ItemForm and examples
function CategoryForm() {
  const [Recomendation, setRecomendation] = useState("");
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  //tag
  const [topic, setTopic] = useState("");
  //category_id
  const [categoryid, setCategoryID] = useState("");
  //image
  const [image, setImage] = useState(null);
  //title
  const [title, setTitle] = useState("");
  const [tags, setTag] = useState([]);
  const pushItem = () => {
    if (Recomendation === "") {
      console.log("Ignore");
    } else if (tags.includes(Recomendation)) {
      console.log("Ignore");
    } else {
      setTag((prev) => [...prev, Recomendation]);
    }
  };
  const checkandDelete = (e) => {
    setTag((prev) => prev.filter((tag) => tag !== e));
  };

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
      "http://localhost:3000/api/category/create",

      {
        category_id: categoryid,
        tag: topic,
        title: title,
        image_path: ImageURL,
        recommendations: tags,
      },
    );

    console.log(response.data);
  };

  const PostCategory = async () => {
    if (topic === "") {
      setError("please fill in tag field");
    } else if (categoryid === "") {
      setError("please fill in category_id field");
    } else if (image === null) {
      setError("please upload image field");
    } else if (title === "") {
      setError("please fill in title field");
    } else if (Recomendation.length <= 0) {
      setError("Recomendation are missing");
    } else {
      try {
        handleSubmission();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log(submit);
    if (submit) {
      PostCategory();
    }
    setSubmit(false);
  }, [submit]);

  return (
    <div className="bannerForm w-400 h-screen flex justify-center items-center">
      <div className="form-box h-auto bg-blue " style={{ width: "60%" }}>
        <h2 className="mb-5 text-center text-3xl font-bold">Category Create</h2>
        <form className="grid grid-cols-2 gap-4">
          {/* topic input */}
          <div className="tag">
            <label
              htmlFor="tag"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Tag
            </label>
            <input
              type="text"
              placeholder="eg:Women"
              alt="tag"
              name="tag"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
          </div>
          {/* Category_id input */}
          <div className="category-id  ">
            <label
              htmlFor="categoryid"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Category_id
            </label>
            <input
              type="text"
              placeholder="eg:01"
              alt="categoryid"
              name="categoryid"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={(e) => {
                setCategoryID(e.target.value);
              }}
            />
          </div>
          {/* imge input */}
          <div className="imge">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Image
            </label>
            <input
              type="file"
              placeholder="eg:item, magazine"
              alt="type"
              name="type"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          {/* Recomendation input */}
          <div className="description  col-span-2 ">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Recomendation
            </label>
            <div className="des-input flex items-center flex-wrap gap-2 mb-3">
              <input
                type="text"
                placeholder="eg: Description for advertising"
                alt="description"
                name="description"
                className="border-2 h-10 rounded-md px-2 flex-9"
                onChange={(e) => setRecomendation(e.target.value)}
              />
              <span
                type="color"
                id="description"
                name="description"
                className="ml-5 font-bold text-4xl flex-1"
                onClick={() => pushItem()}
              >
                {" "}
                +
              </span>
            </div>
            {tags != null ? (
              tags.map((tag, idx) => (
                <div className="Tag flex gap-2" key={idx}>
                  <span onClick={() => checkandDelete(tag)}>-</span>
                  <p>{tag}</p>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
          <div className="banner-btn col-span-2 h-10 flex justify-center mt-10">
            <div
              className="submit p-2 bg-red-500 px-20 rounded-md border-1 text-white font-bold hover:bg-red-300"
              onClick={() => setSubmit(true)}
            >
              <p>Add</p>
            </div>
          </div>
          {error !== "" ? (
            <div className="banner-btn col-span-2 h-10 flex justify-center mt-10">
              <div className="submit p-2  px-20   text-red-500 font-bold hover:bg-red-300">
                <p>{error}</p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
