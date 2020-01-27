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
 * ext_emconf file for dkd_microsite_wissweit
 *
 * @package    TYPO3
 * @subpackage tx_dkdmicrositewissweit
 * @author     Tabea Oertel <tabea.oertel@dkd.de>
 */

$EM_CONF[$_EXTKEY] = array(
    'title' => 'Microsite WissWeit',
    'description' => 'Microsite WissWeit',
    'category' => 'misc',
    'author' => 'Tabea Oertel',
    'author_email' => 'tabea.oertel@dkd.de',
    'state' => 'beta',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'author_company' => 'dkd Internet Service GmbH',
    'version' => '1.0.0',
    'constraints' => array(
        'depends' => array(
            'dkd_fuas' => ''
        ),
        'conflicts' => array(
        ),
        'suggests' => array(
        )
    )
);
