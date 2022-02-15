import React from "react";

function ImageOption({
  head,
  body,
  face,
  limbs,
  eyes,
  background,
  item,
  selectContent,
  name,
  index,
}) {
  return (
    <img
      className={`snap-center h-32 w-32 object-contain mr-2 mb-5 border-4 rounded-md bg-white ${
        [head, body, face, background, limbs, eyes].includes(item)
          ? "border-red-500"
          : "border-black"
      } cursor-pointer`}
      onClick={() => selectContent(name, item)}
      src={item}
      alt={index}
    />
  );
}

export default ImageOption;
