<?php
/**
 * Empower Pro Blocks.
 *
 * This file adds an admin page for help links..
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

?>
	<div class="wrap about-wrap full-width-layout">

		<style>
			.wp-badge {
				background: #fff url("<?php echo EMPOWER_PRO_BLOCKS_URL; /* WPCS: XSS OK. */ ?>/lib/admin/webpm-logo.png") no-repeat !important;
				background-position: center 20px !important;
				background-size: 100px 100px !important;
				color: #333;
				height: auto;
				width: 140px;
				padding: 130px 20px 20px 20px;
				line-height: 1;
				text-decoration: none;
				box-sizing: border-box;
			}
			.wp-badge:hover,
			.wp-badge:focus {
				color: #4491ff;
				opacity: 0.93;
			}
			.webpm-author {
				height: 48px;
				width: 48px;
				float: left;
				margin-bottom: 0;
				margin-right: 15px;
			}
			.webpm-author img {
				margin-top: 0.6em;
				border-radius: 99em;
			}
			.webpm-about-text {
				overflow: hidden;
				margin-bottom: 1em !important;
			}
			.about-logo {
				margin: 0;
			}
			.webpm-cols a .dashicons {
				margin-left: 5px;
				text-decoration: none;
				position: relative;
				top: -1px;
			}
			@media only screen and (min-width: 600px ) {
				.webpm-cols {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-template-rows: 1fr;
					grid-gap: 0px 60px;
				}
			}
		</style>

		<h1>
		<?php
			/* Translators: this string is the currenty theme version number. */
			printf( esc_html__( 'Empower Pro Blocks Child Theme - Version&nbsp;%s', 'empower-pro-blocks' ), esc_html( EMPOWER_PRO_BLOCKS_VERSION ) );
		?>
		</h1>

		<p class="webpm-author about-author"><img class="" src="<?php echo esc_url( EMPOWER_PRO_BLOCKS_URL ); ?>/lib/admin/author.jpg" /></p>

		<?php /* Translators: this string is a link to the theme authors page. */ ?>
		<p class="webpm-about-text about-text"><?php printf( esc_html__( 'Thank you for using a %1$s child theme developed by %2$s! We are dedicated to making premium coded themes with beautiful designs that are easy to use and fast to install.', 'empower-pro-blocks' ), '<a href="https://webplantmedia.com/go/genesis-features/" target="_blank">' . esc_html__( 'Genesis', 'empower-pro-blocks' ) . '</a>', '<a href="https://webplantmedia.com" target="_blank">' . esc_html__( 'Web Plant Media', 'empower-pro-blocks' ) . '</a>' ); ?></p>
		<p class="about-logo"><a href="https://webplantmedia.com" target="_blank" class="wp-badge" style="font-size:8px;letter-spacing:1.5px;text-transform:uppercase;"><?php esc_html_e( 'Web•Plant•Media', 'empower-pro-blocks' ); ?></a></p>

		<div style="margin-bottom:40px;">

			<h2 style="font-size:1.4em;font-weight:600;text-align:left;">
			<?php
				printf(
					/* translators: %s: smiling face with smiling eyes emoji */
					esc_html__( 'Getting Started with the Empower Pro Blocks Theme %1$s%2$s%3$s', 'empower-pro-blocks' ),
					'&#x1F468',
					'&#x200D',
					'&#x1F4BB'
				);
				?>
			</h2>

			<?php $empower_pro_blocks_services = empower_pro_blocks_dashboard_get_articles(); ?>

			<div class="webpm-cols under-the-hood two-col">

				<?php foreach ( $empower_pro_blocks_services as $empower_pro_blocks_service ) : ?>

					<div class="col">

						<h3 style="margin:1.33em 0;font-size:1em;line-height:inherit;color:#23282d;">
							<a target="_blank" href="<?php echo esc_url( $empower_pro_blocks_service['link'] ); ?>"><?php echo $empower_pro_blocks_service['title']; /* WPCS: XSS OK. already escaped */ ?><i class="dashicons dashicons-external"></i></a>
						</h3>
						<p><?php echo $empower_pro_blocks_service['description']; /* WPCS: XSS OK. HTML output. */ ?></p>

					</div>

				<?php endforeach; ?>

			</div>

		</div>

		<hr />

		<div style="margin-bottom:40px;">

			<h2 style="font-size:1.4em;font-weight:600;text-align:left;">
				<?php
					printf(
						/* translators: %s: smiling face with smiling eyes emoji */
						esc_html__( 'Premium Genesis Child Theme with Support %s', 'empower-pro-blocks' ),
						'&#x1F60A'
					);
					?>
			</h2>

			<?php $empower_pro_blocks_services = empower_pro_blocks_dashboard_get_services(); ?>

			<div class="webpm-cols under-the-hood two-col">

				<?php foreach ( $empower_pro_blocks_services as $empower_pro_blocks_service ) : ?>

					<div class="col">

						<h3 style="margin:1.33em 0;font-size:1em;line-height:inherit;color:#23282d;">
							<a target="_blank" href="<?php echo esc_url( $empower_pro_blocks_service['link'] ); ?>"><?php echo $empower_pro_blocks_service['title']; /* WPCS: XSS OK. already escaped */ ?><i class="dashicons dashicons-external"></i></a>
						</h3>
						<p><?php echo $empower_pro_blocks_service['description']; /* WPCS: XSS OK. HTML output. */ ?></p>

					</div>

				<?php endforeach; ?>

			</div>

		</div>

		<hr />

		<div style="margin-bottom:40px;">

			<h2 style="font-size:1.4em;font-weight:600;text-align:left;"><?php echo esc_html__( 'Help Articles by WordPress Experts', 'empower-pro-blocks' ); ?></h2>

			<div class="under-the-hood two-col">

				<div class="col">

					<?php empower_pro_blocks_dashboard_static_feed(); ?>

				</div>

			</div>

		</div>

	</div>
<?php

return;
