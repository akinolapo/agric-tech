Certainly! Here's an example of a component that displays an image on the left and text on the right. On mobile devices, the two columns stack vertically:

```jsx
import React from 'react';

const ImageTextComponent = () => {
  return (
    <div className="bg-green-500 text-black">
      <div className="container mx-auto flex flex-col-reverse items-center justify-center py-4 px-5 sm:px-32 md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/path/to/image.png"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Title</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar massa vel orci efficitur, et volutpat erat tincidunt. Mauris elementum lacus nec ex consequat, vitae viverra sem commodo.</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
```

In this code, I've used Tailwind CSS classes to style the component. The component's background color is set to green (`bg-green-500`) and the text color to black (`text-black`). On larger screens (`md` breakpoint and above), the image and text are displayed side by side using flexbox (`flex-row`), with the image taking half of the width (`md:w-1/2`) and the text taking the other half. On smaller screens, the columns stack vertically (`flex-col-reverse`) due to the flex direction change. The image is set to occupy the full width of its container (`w-full`), and the title and text have respective font sizes (`text-3xl` and `text-lg`). Feel free to adjust the classes and styles according to your needs.