import React, { useState } from "react";

function ItemForm() {
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState("");
  const [ids, setIDs] = useState([]);
  const [id, setid] = useState("");
  const [featureImage, setFeatureImage] = useState(null);
  const [featureDescription, setFeatureDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [colors, setColors] = useState([]);
  const [colorName, setClname] = useState("");
  const [code, setClcode] = useState("");
  const [colorImg, setClimg] = useState(null);
  const [ItemImage, setItemimg] = useState(null);
  const [Image, setImage] = useState(null);
  const [Images, setImages] = useState([]);
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
      setImages(prev => [...prev, Image]);
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

  const findColor = e => {
    const duplicateObject = colors.filter(
      color =>
        color.colorName === e ||
        color.code === e ||
        color.colorImg === e ||
        color.ItemImage === e
    );
    console.log(duplicateObject);
    return duplicateObject[0];
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
    if (colorImg === null) {
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
      setColors(prev => [
        ...prev,
        {
          colorName: colorName,
          code: code,
          colorImg: colorImg,
          ItemImage: ItemImage,
        },
      ]);
    }
  };
  const findFeature = e => {
    const duplicateObject = features.filter(
      feature => feature.featureImage === e || feature.featureDescription === e
    );
    console.log(duplicateObject);
    return duplicateObject[0];
  };
  const pushFeature = () => {
    if (featureDescription === "") {
      console.log("ignore");
    } else if (featureImage === null) {
      console.log("ignore");
    } else if (features.includes(findFeature(featureImage))) {
      console.log("ignore");
    } else if (features.includes(findFeature(featureDescription))) {
      console.log("ignore");
    } else {
      setFeatures(prev => [
        ...prev,
        {
          featureDescription: featureDescription,
          featureImage: featureImage,
        },
      ]);
    }
  };

  return (
    <div className="bannerForm w-400 h-screen flex justify-center items-center">
      <div className="form-box h-auto bg-blue " style={{ width: "60%" }}>
        <h2 className="mb-5 text-center text-3xl font-bold">Category Create</h2>
        <form className="grid grid-cols-3 gap-4">
          {/* topic input */}
          <div className="tag">
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
            />
          </div>
          {/* Category_id input */}
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
            />
          </div>
          {/* title input */}
          <div className="title col-span-3 ">
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
            />
          </div>
          {/* size input */}
          <div className="size col-span-2 ">
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
                  Color Image
                </label>
                <input
                  type="file"
                  placeholder="eg: S,XS,M"
                  alt="color"
                  name="color"
                  className="h-10 w-full border-2 rounded-md px-2"
                  onChange={e => setClimg(e.target.files[0])}
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
                          {color.colorName} : {color.code} |{" "}
                          {color.colorImg.name} | {color.ItemImage.name}{" "}
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
                    <p className="font-bold">{image.name}</p>
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
            >
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
                          {feature.featureDescription} :{" "}
                          {feature.featureImage.name}{" "}
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

          {/* button */}
          <div className="banner-btn col-span-3 h-10 flex justify-center mt-10">
            <div className="submit p-2 bg-red-500 px-20 rounded-md border-1 text-white font-bold hover:bg-red-300">
              <p>Add</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemForm;
