export const IMAGE_BACKGROUND_TYPE = "image";
export const VIDEO_BACKGROUND_TYPE = "video";
export function backgroundImageStyles(url) {
	return url ? { backgroundImage: `url(${url})` } : {};
}

export function dimRatioToClass(ratio) {
	if (ratio === 0) {
		return "has-background-dim-value-0";
	}

	return !ratio
		? null
		: "has-background-dim-value-" + 10 * Math.round(ratio / 10);
}

export function attributesFromMedia(setAttributes) {
	return (media) => {
		if (!media || !media.url) {
			setAttributes({ url: undefined, id: undefined });
			return;
		}
		let mediaType;
		// for media selections originated from a file upload.
		if (media.media_type) {
			if (media.media_type === IMAGE_BACKGROUND_TYPE) {
				mediaType = IMAGE_BACKGROUND_TYPE;
			} else {
				// only images and videos are accepted so if the media_type is not an image we can assume it is a video.
				// Videos contain the media type of 'file' in the object returned from the rest api.
				mediaType = VIDEO_BACKGROUND_TYPE;
			}
		} else {
			// for media selections originated from existing files in the media library.
			if (
				media.type !== IMAGE_BACKGROUND_TYPE &&
				media.type !== VIDEO_BACKGROUND_TYPE
			) {
				return;
			}
			mediaType = media.type;
		}

		setAttributes({
			url: media.url,
			id: media.id,
			backgroundType: mediaType,
			...(mediaType === VIDEO_BACKGROUND_TYPE ? { focalPoint: undefined } : {}),
		});
	};
}

export function attributesFromMedia2(setAttributes) {
	return (media) => {
		if (!media || !media.url) {
			setAttributes({ url2: undefined, id2: undefined });
			return;
		}

		setAttributes({
			url2: media.url,
			id2: media.id,
		});
	};
}

export function attributesFromMedia3(setAttributes) {
	return (media) => {
		if (!media || !media.url) {
			setAttributes({ url3: undefined, id3: undefined });
			return;
		}

		setAttributes({
			url3: media.url,
			id3: media.id,
		});
	};
}

export function attributesFromMedia4(setAttributes) {
	return (media) => {
		if (!media || !media.url) {
			setAttributes({ button2IconId: undefined, button2IconUrl: undefined });
			return;
		}

		setAttributes({
			button2IconUrl: media.url,
			button2IconId: media.id,
		});
	};
}
export function attributesFromMedia5(setAttributes) {
	return (media) => {
		if (!media || !media.url) {
			setAttributes({ button3IconId: undefined, button3IconUrl: undefined });
			return;
		}

		setAttributes({
			button3IconUrl: media.url,
			button3IconId: media.id,
		});
	};
}
export function attributesFromMedia6(setAttributes) {
	return (media) => {
		if (!media || !media.url) {
			setAttributes({ button4IconId: undefined, button4IconUrl: undefined });
			return;
		}

		setAttributes({
			button4IconUrl: media.url,
			button4IconId: media.id,
		});
	};
}
