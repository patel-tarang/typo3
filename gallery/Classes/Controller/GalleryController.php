<?php
namespace Tarun\Gallery\Controller;


/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2015 Tarun <pitsolution1@gmail.com>
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
 * GalleryController
 */
class GalleryController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

	/**
	 * galleryRepository
	 *
	 * @var \Tarun\Gallery\Domain\Repository\GalleryRepository
	 * @inject
	 */
	protected $galleryRepository = NULL;

	/**
	 * action list
	 *
	 * @return void
	 */
	public function listAction() {
		$this->cObj = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('tslib_cObj');
		$this->FullURL = \TYPO3\CMS\Core\Utility\GeneralUtility::getIndpEnv('TYPO3_SITE_URL');
		
		$array = $this->settings['irre'];
		
		//$galleries = $this->galleryRepository->findAll();
		$gid = $_GET['tx_gallery']['uid'];
		if((!isset($gid)) && ($gid == "")){
			$i = 0;
			$galleries = array();
			foreach($array as $key=> $value){
				
				$galleries[$i]['title'] = $value['settings']['subSection']['albumtitle'];
				$galleries[$i]['subtitle'] = $value['settings']['subSection']['subtitle'];
				
				$lconf = array();			
				$lconf['parameter'] = $GLOBALS['TSFE']->id;        
				$lconf['additionalParams'] = '&tx_gallery[uid]='.$key;
				
				$url = $this->FullURL.$this->cObj->typoLink_URL($lconf);
			
				$imageObj['img'] = 'IMAGE';
				$imageObj['img.']['file'] = 'uploads/tx_gallery/'.$value['settings']['subSection']['thumbimage'];
				$imageObj['img.']['file.']['width'] = '260';
				$imageObj['img.']['file.']['height'] = '173';
				$imageObj['img.']['file.']['params'] = '-quality 100';
				$image_path = $this->cObj->IMG_RESOURCE($imageObj['img.']);
				
				$galleries[$i]['thumbimage_path'] = $image_path;
				$galleries[$i]['url'] = $url;
				$i++;
			}
		}else{
			
			$detail = $array[$gid]['settings']['subSection']['irre'];
			$slider = array();
			$i = 0;
			if(count($detail) > 0){
				foreach($detail as $key=>$data){
					$titles = $data['subSection']['title'];
					$image = $data['subSection']['image'];
					
					$imageObj1['img'] = 'IMAGE';
					$imageObj1['img.']['file'] = 'uploads/tx_gallery/'.$image;
					$imageObj1['img.']['file.']['width'] = '1349';
					$imageObj1['img.']['file.']['height'] = '726';
					$imageObj1['img.']['file.']['params'] = '-quality 100';
					$bigimage_path = $this->cObj->IMG_RESOURCE($imageObj1['img.']);
					
					$imageObj2['img'] = 'IMAGE';
					$imageObj2['img.']['file'] = 'uploads/tx_gallery/'.$image;
					$imageObj2['img.']['file.']['width'] = '154';
					$imageObj2['img.']['file.']['height'] = '83';
					$imageObj2['img.']['file.']['params'] = '-quality 100';
					$thumbimage_path = $this->cObj->IMG_RESOURCE($imageObj2['img.']);

					$lconf = array();			
					$lconf['parameter'] = $GLOBALS['TSFE']->id;        
					#$lconf['additionalParams'] = '&tx_gallery[uid]='.$key;
					
					$url = $this->FullURL.$this->cObj->typoLink_URL($lconf);
					$slider[$i]['title'] = $titles;
					$slider[$i]['thumb'] = $thumbimage_path;
					$slider[$i]['big'] = $bigimage_path;
					$slider[$i]['back'] = $url;
					$i++;
				}
			}
			
		}
			
		$this->view->assign('gid', $gid);
		$this->view->assign('sliders', $slider);
		$this->view->assign('sliders1', $slider);
		$this->view->assign('galleries', $galleries);
	}

}