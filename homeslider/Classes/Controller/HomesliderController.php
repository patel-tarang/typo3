<?php
namespace Tarang\Homeslider\Controller;


/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2015
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * HomesliderController
 */
class HomesliderController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{

    /**
     * homesliderRepository
     *
     * @var \Tarang\Homeslider\Domain\Repository\HomesliderRepository
     * @inject
     */
    protected $homesliderRepository = NULL;
    
    /**
     * action list
     *
     * @return void
     */
    public function listAction()
    {
		$baseUrl = $GLOBALS['TSFE']->baseUrl;
		$array = $this->settings['irre'];		
		$homesliders = array();
		$homesliders1 = array();
		$i = 0;
		
		foreach($array as $key=> $value){
			if($i == 0){
				$class = 'active';
			}else{
				$class = '';
			}
			$detailpage = $value['settings']['subSection']['pages'];
			//$url_params = array();                    
			//$url_params['tx_seminars_pi1[showUid]'] = $id;
			$url = $this->configurationManager->getContentObject()->getTypoLink_URL($detailpage);
			
			$homesliders[$i]['id'] = $i;
			$homesliders[$i]['class'] = $class;
			$homesliders[$i]['title'] = $value['settings']['subSection']['title'];
			$homesliders[$i]['bgimage'] = $value['settings']['subSection']['bgimage'];		
			$homesliders[$i]['url'] = $url;
			
			$i++;
		}
		
		
        //$homesliders = $this->homesliderRepository->findAll();
        $this->view->assign('homesliders', $homesliders);
		$this->view->assign('homeslidersid', $homesliders);
		$this->view->assign('homeslidersids', $homesliders);
		$this->view->assign('homeslidermobiles', $homesliders);
    }

}