<?php
namespace Tarang\Pdfviewer\Controller;


/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2017
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
 * PDFViewerController
 */
class PDFViewerController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{

    /**
     * pDFViewerRepository
     *
     * @var \Tarang\Pdfviewer\Domain\Repository\PDFViewerRepository
     * @inject
     */
    protected $pDFViewerRepository = NULL;
    
    /**
     * action list
     *
     * @return void
     */
    public function listAction()
    {
        $baseUrl = $GLOBALS['TSFE']->baseUrl;
        $array = $this->settings['irre'];       
        
        $pDFViewers = array();
        $i = 0;
        
        foreach($array as $key=> $value){
            if($i == 0){
                $class = 'active';
            }else{
                $class = '';
            }
            $detailpage = $value['settings']['subSection']['pdf'];
            //$url_params = array();                    
            //$url_params['tx_seminars_pi1[showUid]'] = $id;
            $url = $this->configurationManager->getContentObject()->getTypoLink_URL($detailpage);
            
            $pDFViewers[$i]['id'] = $i;
            $pDFViewers[$i]['class'] = $class;
            $pDFViewers[$i]['title'] = $value['settings']['subSection']['title'];
            $pDFViewers[$i]['bgimage'] = $value['settings']['subSection']['bgimage'];  
            $pDFViewers[$i]['pdf'] = $detailpage;    
            $pDFViewers[$i]['url'] = $url;
            
            $i++;
        }
        //$pDFViewers = $this->pDFViewerRepository->findAll();
        $this->view->assign('pDFViewers', $pDFViewers);
    }

}