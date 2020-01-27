<?php
/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

/**
 * ext_localconf file for dkd_microsite_wissweit
 *
 * @package    TYPO3
 * @subpackage tx_dkdmicrositewissweit
 * @author     Tabea Oertel <tabea.oertel@dkd.de>
 */

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

// Define dkd_microsite_wissweit RTE preset
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['dkd_microsite_wissweit_default'] = 'EXT:dkd_microsite_wissweit/Configuration/RTE/Default.yaml';
