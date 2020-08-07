export function dimRatioToClass( ratio ) {
	if ( ratio === 0 ) {
		return 'has-background-dim-value-0';
	}

	return ! ratio
		? null
		: 'has-background-dim-value-' + 10 * Math.round( ratio / 10 );
}
