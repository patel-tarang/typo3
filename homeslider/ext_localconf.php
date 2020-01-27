<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'Tarang.' . $_EXTKEY,
	'Homeslider',
	array(
		'Homeslider' => 'list',
		
	),
	// non-cacheable actions
	array(
		'Homeslider' => '',
		
	)
);
