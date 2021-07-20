import React from "react";
import ImageGallery from "react-image-gallery";

require("../static/index.scss");
require("../../node_modules/react-image-gallery/styles/css/image-gallery.css");

export default function Gallery() {
	const images = [
		{
			original:
				"https://rukminim1.flixcart.com/flap/1688/280/image/aef0c26c1b8d2f6d.jpg?q=50",
			originalTitle: "",
			originalAlt: "",
			description: "",
		},
		{
			original:
				"https://rukminim1.flixcart.com/flap/1688/280/image/3dccee4120da4a7d.jpg?q=50",
			originalTitle: "",
			originalAlt: "",
			description: "",
		},
		{
			original:
				"https://rukminim1.flixcart.com/flap/1688/280/image/22c4ebf1edf769b7.jpg?q=50",
			originalTitle: "",
			originalAlt: "",
			description: "",
		},
	];
	images.forEach(
		(img) => (img["originalClass"] = "myGalleryImages flex  h-44 md:h-64"),
	);

	return (
		<div className='z-0'>
			<ImageGallery
				items={images}
				showThumbnails={false}
				showFullscreenButton={false}
				lazyLoad={true}
				useBrowserFullscreen={false}
				showBullets={true}
				autoPlay={true}
				slideDuration={500}
				slideInterval={7000}
			/>
		</div>
	);
}
