/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const INNER_BLOCKS_TEMPLATE = [
	["empower-pro-blocks/scheduler", {}],
	["empower-pro-blocks/scheduler", {}],
	["empower-pro-blocks/scheduler", {}],
];

const ALLOWED_BLOCKS = ["empower-pro-blocks/scheduler"];

function ScheduleEdit({ attributes, setAttributes, className }) {
	const { columns } = attributes;

	const controls = (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings")} initialOpen={true}>
					<SelectControl
						label={__("Columns")}
						value={columns}
						options={[
							{ value: "", label: __("3") },
							{ value: "4", label: __("4") },
						]}
						onChange={(value) => setAttributes({ columns: value })}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames(
		className,
		"wp-block-schedule-wrapper",
		columns ? "schedule-columns-" + columns : {}
	);

	return (
		<>
			{controls}
			<div className={classes}>
				<div className="wp-block-schedule__inner-wrap">
					<InnerBlocks
						templateLock={false}
						template={INNER_BLOCKS_TEMPLATE}
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</div>
			</div>
		</>
	);
}

export default ScheduleEdit;
