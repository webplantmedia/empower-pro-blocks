/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { columns } = attributes;

	const classes = classnames(
		"wp-block-schedule-wrapper",
		columns ? "schedule-columns-" + columns : {}
	);

	return (
		<div className={classes}>
			<div className="wp-block-schedule__inner-wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
