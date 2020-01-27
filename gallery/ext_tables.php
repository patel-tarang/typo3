<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
	$_EXTKEY,
	'Gallery',
	'Gallery'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Gallery');

$extensionName = strtolower(\TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase($_EXTKEY));
$pluginName = strtolower($_EXTKEY);
$pluginSignature = $extensionName.'_'.$pluginName; 

$TCA['tt_content']['types']['list']['subtypes_excludelist'][$pluginSignature] = 'layout,select_key,pages'; 
$TCA['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue($pluginSignature, 'FILE:EXT:'.$_EXTKEY . '/Configuration/Flexform/flexform.xml'); 


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_gallery_domain_model_gallery', 'EXT:gallery/Resources/Private/Language/locallang_csh_tx_gallery_domain_model_gallery.xlf');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_gallery_domain_model_gallery');
$GLOBALS['TCA']['tx_gallery_domain_model_gallery'] = array(
	'ctrl' => array(
		'title'	=> 'LLL:EXT:gallery/Resources/Private/Language/locallang_db.xlf:tx_gallery_domain_model_gallery',
		'label' => 'uid',
		'tstamp' => 'tstamp',
		'crdate' => 'crdate',
		'cruser_id' => 'cruser_id',
		'dividers2tabs' => TRUE,

		'versioningWS' => 2,
		'versioning_followPages' => TRUE,

		'languageField' => 'sys_language_uid',
		'transOrigPointerField' => 'l10n_parent',
		'transOrigDiffSourceField' => 'l10n_diffsource',
		'delete' => 'deleted',
		'enablecolumns' => array(
			'disabled' => 'hidden',
			'starttime' => 'starttime',
			'endtime' => 'endtime',
		),
		'searchFields' => '',
		'dynamicConfigFile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY) . 'Configuration/TCA/Gallery.php',
		'iconfile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Icons/tx_gallery_domain_model_gallery.gif'
	),
);
