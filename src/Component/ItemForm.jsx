import React, { useState } from "react";
import axios from "axios";

function ItemForm() {
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("");
  const [category_id, setCategoryID] = useState("");
  const [topic, setTopic] = useState("");
  const [size, setSize] = useState("");
  const [ids, setIDs] = useState([]);
  const [stock, setStock] = useState("");
  const [id, setid] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [Fabric, setFabric] = useState("");
  const [Washing, setWashing] = useState("");
  const [material, setMaterial] = useState("");
  const [itemId, setItemID] = useState("");
  const [featureImage, setFeatureImage] = useState(null);
  const [featureDescription, setFeatureDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [colors, setColors] = useState([]);
  const [colorName, setClname] = useState("");
  const [code, setClcode] = useState("");
  const [colorImg, setClimg] = useState("");
  const [ItemImage, setItemimg] = useState(null);
  const [Image, setImage] = useState(null);
  const [Images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [ImageLinks, setURL] = useState([]);
  const [price, setPrice] = useState("");
  const pushSize = () => {
    if (size === "") {
      console.log("ignore");
    } else if (sizes.includes(size)) {
      console.log("ignore");
    } else {
      setSizes(prev => [...prev, size]);
    }
  };
  const pushImage = () => {
    if (Image === null) {
      console.log("ignore");
    } else if (Images.includes(Image)) {
      console.log("ignore");
    } else {
      postImagePath();
    }
  };
  const pushID = () => {
    if (id === "") {
      console.log("ignore");
    } else if (ids.includes(id)) {
      console.log("ignore");
    } else {
      setIDs(prev => [...prev, id]);
    }
  };

  const PostItem = async () => {
    if (itemId === "") {
      setError("please fill in Id field");
    } else if (category === "") {
      setError("please fill in category type field");
    } else if (category_id === "") {
      setError("please fill in category_id field");
    } else if (topic === "") {
      setError("please fill in topic field");
    } else if (title === "") {
      setError("please fill in title field");
    } else if (size === "") {
      setError("please fill in size field");
    } else if (sizes.length === 0) {
      setError("please press + to add sizes");
    } else if (stock === "") {
      setError("please fill in stock field");
    } else if (colorName === "") {
      setError("please fill in color name field");
    } else if (code === "") {
      setError("please fill in code field");
    } else if (colorImg === null) {
      setError("please upload image for color");
    } else if (ItemImage === null) {
      setError("please upload the Item image for color");
    } else if (colors.length === 0) {
      setError("please press + to add color");
    } else if (Image === null) {
      setError("please upload images of item");
    } else if (Images.length === 0) {
      setError("please press + to add image");
    } else if (material === "") {
      setError("please pick a material");
    } else if (featureDescription === "") {
      setError("please fill in feature description field");
    } else if (featureImage === null) {
      setError("please upload Feature Image");
    } else if (features.length === 0) {
      setError("please press + to add feature");
    } else if (rating === "") {
      setError("please fill in rating field");
    } else if (Fabric === "") {
      setError("please fill in Fabric Detail field");
    } else if (Washing === "") {
      setError("please fill in washing Instruction field");
    } else if (id === "") {
      setError("please add product_id");
    } else if (ids.length === 0) {
      setError("please press + to add product_id");
    } else {
      try {
        handleSubmission();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const findColor = e => {
    const duplicateObject = colors.filter(
      color =>
        color.colorName === e ||
        color.code === e ||
        color.colorImg === e ||
        color.ItemImage === e
    );

    return duplicateObject[0];
  };
  const postColorImage = async () => {
    const formData = new FormData();
    formData.append("file", ItemImage);
    formData.append("upload_preset", import.meta.env.VITE_CLOUD_DATABASE);
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    const ImagePosting = await axios.post(
      "https://api.cloudinary.com/v1_1/dptvqmded/image/upload",
      formData
    );
    const result = ImagePosting.data.url;

    if (result !== "") {
      setColors(prev => [
        ...prev,
        {
          colorName: colorName,
          code: code,
          colorImg: colorImg,
          ItemImage: result,
        },
      ]);
    }

    console.log("colors: ", colors);
  };

  const postImagePath = async () => {
    const formData = new FormData();
    formData.append("file", Image);
    formData.append("upload_preset", import.meta.env.VITE_CLOUD_DATABASE);
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    const ImagePosting = await axios.post(
      "https://api.cloudinary.com/v1_1/dptvqmded/image/upload",
      formData
    );
    const result = ImagePosting.data.url;

    if (result !== "") {
      setImages(prev => [...prev, result]);
    }

    console.log("colors: ", colors);
  };
  const postFeatureImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", featureImage);
      formData.append("upload_preset", import.meta.env.VITE_CLOUD_DATABASE);
      formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

      const ImagePosting = await axios.post(
        "https://api.cloudinary.com/v1_1/dptvqmded/image/upload",
        formData
      );

      const result = ImagePosting.data.url;
      if (result) {
        setFeatures(prev => [
          ...prev,
          {
            featureDescription: featureDescription,
            featureImage: result,
          },
        ]);
      }

      console.log("features:", features);
    } catch (error) {
      console.log(error);
    }
  };
  const pushColor = () => {
    console.log(
      "colorName: ",
      colorName,
      "code: ",
      code,
      "colorImg: ",
      colorImg,
      "ItemImage: ",
      ItemImage
    );

    if (colorName === "") {
      console.log("ignore");
    }
    if (colorImg === "") {
      console.log("ignore");
    }
    if (code === "") {
      console.log("ignore");
    }
    if (ItemImage === null) {
      console.log("ignore");
    } else if (colors.includes(findColor(colorName))) {
      console.log("ignore");
    } else if (colors.includes(findColor(code))) {
      console.log("ignore");
    } else if (colors.includes(findColor(colorImg))) {
      console.log("ignore");
    } else if (colors.includes(findColor(ItemImage))) {
      console.log("ignore");
    } else {
      postColorImage();
    }
  };
  const findFeature = e => {
    const duplicateObject = features.filter(
      feature => feature.featureImage === e || feature.featureDescription === e
    );
    console.log(duplicateObject);
    return duplicateObject[0];
  };
  const pushFeature = async () => {
    if (featureDescription === "") {
      console.log("ignore");
    } else if (featureImage === null) {
      console.log("ignore");
    } else if (features.includes(findFeature(featureImage))) {
      console.log("ignore");
    } else if (features.includes(findFeature(featureDescription))) {
      console.log("ignore");
    } else {
      postFeatureImage();
    }
  };
  const handleSubmission = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/item/create",

        {
          item_id: itemId,
          category: category,
          topic: topic,
          title: title,
          sizes: sizes,
          stock: stock,
          colors: colors,
          image_paths: Images,
          material: material,
          feature_details: features,
          rating: rating,
          fabric_detail: Fabric,
          washing_instruction: Washing,
          category_id: category_id,
          price: price,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bannerForm w-400 h-screen flex justify-center items-center">
      <div className="form-box h-auto bg-blue " style={{ width: "60%" }}>
        <h2 className="mb-5 text-center text-3xl font-bold">Items Create</h2>
        <form className="grid grid-cols-3 gap-4">
          {/* id input */}
          <div className="id">
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Id
            </label>
            <input
              type="text"
              placeholder="eg: 0478152"
              alt="id"
              name="id"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setItemID(e.target.value)}
            />
          </div>
          {/* Category input */}
          <div className="category  ">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Category
            </label>
            <input
              type="text"
              placeholder="eg: t-shirt"
              alt="category"
              name="category"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setCategory(e.target.value)}
            />
          </div>
          {/* category_id input */}
          <div className="Topic">
            <label
              htmlFor="topic"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Category_id
            </label>
            <input
              type="text"
              placeholder="eg: 01"
              alt="category_id"
              name="topic"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setCategoryID(e.target.value)}
            />
          </div>
          {/* imge input */}
          <div className="Topic">
            <label
              htmlFor="topic"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Topic
            </label>
            <input
              type="text"
              placeholder="eg: Women"
              alt="topic"
              name="topic"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setTopic(e.target.value)}
            />
          </div>
          {/* title input */}
          <div className="title col-span-2 ">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-bold text-xl text-gray-900 "
            >
              Title
            </label>
            <input
              type="text"
              placeholder="eg: UTs songoku are coming"
              alt="title"
              name="title"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          {/* size input */}
          <div className="size  ">
            <label
              htmlFor="size"
              className="block mb-2 text-sm font-bold text-xl text-gray-900 "
            >
              Size
            </label>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="eg: S,XS,M"
                alt="size"
                name="size"
                className="h-10 w-full border-2 rounded-md px-2"
                onChange={e => setSize(e.target.value)}
              />
              <span className="text-4xl font-bold " onClick={() => pushSize()}>
                +
              </span>
            </div>
            <div className="ml-4">
              {sizes !== null ? (
                sizes.map((size, index) => (
                  <div className="flex gap-2 items-center" key={index}>
                    <span
                      className="text-2xl"
                      onClick={() =>
                        setSizes(prev => prev.filter(list => list !== size))
                      }
                    >
                      {" "}
                      -
                    </span>
                    <p className="font-bold">{size}</p>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
          {/* Price input */}
          <div className="price ">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-bold text-xl text-gray-900 "
            >
              Price
            </label>
            <input
              type="text"
              placeholder="eg: 59.59"
              alt="price"
              name="price"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          {/* Stock input */}
          <div className="stock ">
            <label
              htmlFor="stock"
              className="block mb-2 text-sm font-bold text-xl text-gray-900 "
            >
              Stock
            </label>
            <input
              type="text"
              placeholder="eg: 200"
              alt="stock"
              name="stock"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setStock(e.target.value)}
            />
          </div>

          {/* Color input*/}
          <div className="color col-span-3 ">
            <div className="flex gap-4 items-center">
              <div>
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-bold text-xl text-gray-900 "
                >
                  Color name
                </label>
                <input
                  type="text"
                  placeholder="eg: Red, Blue"
                  alt="color"
                  name="color"
                  className="h-10 w-full border-2 rounded-md px-2"
                  onChange={e => setClname(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-bold text-xl text-gray-900 "
                >
                  Code
                </label>
                <input
                  type="text"
                  placeholder="eg: 01, 35"
                  alt="color"
                  name="color"
                  className="h-10 w-full border-2 rounded-md px-2"
                  onChange={e => setClcode(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-bold text-xl text-gray-900 "
                >
                  Color Hex
                </label>
                <input
                  type="type"
                  placeholder="eg: #fff"
                  alt="color"
                  name="color"
                  className="h-10 w-full border-2 rounded-md px-2"
                  onChange={e => setClimg(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-bold text-xl text-gray-900 "
                >
                  Item Image
                </label>
                <input
                  type="file"
                  placeholder="eg: S,XS,M"
                  alt="color"
                  name="color"
                  className="h-10 w-full border-2 rounded-md px-2"
                  onChange={e => setItemimg(e.target.files[0])}
                />
              </div>
              <span className="text-4xl font-bold " onClick={() => pushColor()}>
                +
              </span>
            </div>
            <div className="ml-4">
              {colors.length > 0 ? (
                colors.map((color, index) => (
                  <div>
                    {color.colorName !== "" ? (
                      <div className="flex gap-2 items-center" key={index}>
                        <span
                          className="text-2xl"
                          onClick={() =>
                            setColors(prev =>
                              prev.filter(list => list !== color)
                            )
                          }
                        >
                          {" "}
                          -
                        </span>
                        <p>
                          {color.colorName} : {color.code} | {color.colorImg} |{" "}
                          {color.ItemImage}{" "}
                        </p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>

          {/* image input */}
          <div className="image col-span-2 ">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-bold text-xl text-gray-900 "
            >
              Image
            </label>
            <div className="flex gap-4 items-center">
              <input
                type="file"
                placeholder="eg: S,XS,M"
                alt="image"
                name="image"
                className="h-10 w-full border-2 rounded-md px-2"
                onChange={e => setImage(e.target.files[0])}
              />
              <span className="text-4xl font-bold " onClick={() => pushImage()}>
                +
              </span>
            </div>
            <div className="ml-4">
              {Images !== null ? (
                Images.map((image, index) => (
                  <div className="flex gap-2 items-center" key={index}>
                    <span
                      className="text-2xl"
                      onClick={() =>
                        setImages(prev => prev.filter(list => list !== image))
                      }
                    >
                      {" "}
                      -
                    </span>
                    <p className="font-bold">{image}</p>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
          {/* Material input */}
          <div className="material  ">
            <label
              htmlFor="material"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Material
            </label>
            <select
              name="material"
              id=""
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setMaterial(e.target.value)}
            >
              <option value="">--Please choose material--</option>
              <option value="airism">Airism</option>
              <option value="cotton">Cotton</option>
              <option value="dry-ex">Dry-ex</option>
            </select>
          </div>
          {/* Feature */}
          <div className="color col-span-3 ">
            <div className="flex gap-4 items-center ">
              <div className="flex-1">
                <label
                  htmlFor="feature"
                  className="block mb-2 text-sm font-bold text-xl text-gray-900 "
                >
                  Feature Description
                </label>
                <input
                  type="text"
                  placeholder="Feature Description"
                  alt="feature"
                  name="feature"
                  className="h-10 w-full border-2 rounded-md px-2"
                  onChange={e => setFeatureDescription(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="feature"
                  className="block mb-2 text-sm font-bold text-xl text-gray-900 "
                >
                  Feature Image
                </label>
                <input
                  type="file"
                  alt="feature"
                  name="feature"
                  className="h-10 w-full border-2 rounded-md px-2"
                  onChange={e => setFeatureImage(e.target.files[0])}
                />
              </div>
              <span
                className="text-4xl font-bold "
                onClick={() => pushFeature()}
              >
                +
              </span>
            </div>
            <div className="ml-4">
              {features.length > 0 ? (
                features.map((feature, index) => (
                  <div>
                    {feature.featureDescription !== "" ? (
                      <div className="flex gap-2 items-center" key={index}>
                        <span
                          className="text-2xl"
                          onClick={() =>
                            setFeatures(prev =>
                              prev.filter(list => list !== feature)
                            )
                          }
                        >
                          {" "}
                          -
                        </span>
                        <p>
                          {feature.featureDescription} : {feature.featureImage}{" "}
                        </p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
          {/* Rating input */}
          <div className="rating">
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Rating
            </label>
            <input
              type="text"
              placeholder="eg: 4/5"
              alt="rating"
              name="rating"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setRating(e.target.value)}
            />
          </div>
          {/* Fabric_Detail input */}
          <div className="fabric ">
            <label
              htmlFor="fabric"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Fabric Detail
            </label>
            <input
              type="text"
              placeholder="eg: Cotton 100%"
              alt="fabric"
              name="fabric"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setFabric(e.target.value)}
            />
          </div>
          {/* Washing Instruction input */}
          <div className="washing">
            <label
              htmlFor="washing"
              className="block mb-2 text-sm font-bold text-xl text-gray-900"
            >
              Washing Instruction
            </label>
            <input
              type="text"
              placeholder="eg: with Cold water only"
              alt="washing"
              name="washing"
              className="h-10 w-full border-2 rounded-md px-2"
              onChange={e => setWashing(e.target.value)}
            />
          </div>

          {/* Product_id input */}
          <div className="size col-span-3 ">
            <label
              htmlFor="product_id"
              className="block mb-2 text-sm font-bold text-xl text-gray-900 "
            >
              Product_id
            </label>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="eg: 41567,47600"
                alt="product_id"
                name="product_id"
                className="h-10 w-full border-2 rounded-md px-2"
                onChange={e => setid(e.target.value)}
              />
              <span className="text-4xl font-bold " onClick={() => pushID()}>
                +
              </span>
            </div>
            <div className="ml-4">
              {ids !== null ? (
                ids.map((id, index) => (
                  <div className="flex gap-2 items-center" key={index}>
                    <span
                      className="text-2xl"
                      onClick={() =>
                        setIDs(prev => prev.filter(list => list !== id))
                      }
                    >
                      {" "}
                      -
                    </span>
                    <p className="font-bold">{id}</p>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="text-red-400 font-bold ">
            <p>{error}</p>
          </div>
          {/* button */}
          <div className="banner-btn col-span-3 h-10 flex justify-center mt-10">
            <div
              className="submit p-2 bg-red-500 px-20 rounded-md border-1 text-white font-bold hover:bg-red-300"
              onClick={() => PostItem()}
            >
              <p>Add</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemForm;
