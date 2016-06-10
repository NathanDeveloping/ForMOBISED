<?php

namespace forMOBISED\views;

/**
 * Class HomeView
 *
 * Affichage de la page d'accueil
 *
 * @package geoOTELo\views
 */
class HomeView
{

    const HOME = 1;

    /**
     * methode de rendu
     * @param $numAffichage
     *          type d'affichage
     */
    public function render($numAffichage)
    {
        $html = "";
        switch ($numAffichage) {
            case HomeView::HOME :
                $html = $this->accueil();
                break;
        }
        echo $html;
    }

    /**
     * affichage principal de l'accueil
     * @return string
     *          code HTML à afficher
     */
    public function accueil()
    {
        $HTML = <<<END
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>GeoOTELo</title>
    <link href="styles/style.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="styles/jquery-ui.min.css">
    <link rel="stylesheet" href="styles/bootstrap.min.css">
    <link rel="stylesheet" href="styles/bootstrap-theme.min.css">
    <link rel="stylesheet" href="styles/bootstrap-select.min.css">
</head>

<body>

<header>
    <nav id="nav" class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">forMOBISED</a>
            </div>
            <div class="pull-right">
                <ul class="nav navbar-nav">
                </ul>
            </div>
        </div>
    </nav>
</header>

<div class="container" id="formulaire">
    <div class="panel panel-default part row">
      <div class="panel-heading">KIND OF ANALYSIS</div>
      <div class="panel-body span7 center">
            <form class="form-inline">
            <div class="form-group">
                <div class="row">
                    <div class="col-xs-6">
                        <label for="type">Type :</label>
                        <select class="selectpicker"  id="type" title="Type..." data-width="100%">
                            <option>sediment</option>
                            <option>hydrology</option>
                            <option>spm</option>
                            <option>water</option>
                        </select>
                     </div>
                    <div class="col-xs-6">
                        <label for="group">Group of measures :</label>
                        <select class="selectpicker" id="group" title="Group of measures..." data-width="100%" disabled>
                        </select>
                    </div>
                </div>
            </div>
      </div>
    </div>
    
    <div class="panel panel-default part row">
      <div class="panel-heading">INTRO</div>
      <div class="panel-body">
            <form class="form-horizontal">
            
            <div class="form-group">
                <label class="col-sm-4 control-label" for="title">Title :</label>
                <div class="col-sm-8">
                    <input type="text" id="title" class="form-control">
                </div>
             </div>
             
             <div class="form-group">
                <label class="col-sm-4 control-label" for="description">Description :</label>
                <div class="col-sm-8">
                    <input type="text" id="description" class="form-control">
                </div>
             </div>
             
             </form>
             
             <div class="panel panel-default" id="fileCreators">
                <div class="panel-heading">File creator(s)</div>
                <div class="panel-body">
                 <form class="form-horizontal formFileCreators">
                    <div class="form-group" id="fileCreatorFormGroup1">
                    
                        <div class="row">
                            <div class="col-xs-3">
                                <label class="control-label" id="nameLabel" for="name">Name :</label>
                                <input type="text" id="name" class="form-control name">
                            </div>
                        
                            <div class="col-xs-3">
                                <label class="control-label" for="firstname">Firstname :</label>
                                <input type="text" id="firstname" class="form-control firstname">
                            </div>
     
                            <div class="col-xs-4">
                                <label class="control-label" for="email">Email :</label>
                                <input type="text" id="email" class="form-control email">
                            </div>
                            
                            <button type="button" class="btn btn-danger deleteButton deleteCreatorButton" id="deleteCreator1"><span class="glyphicon glyphicon-remove"></span></button>
                            
                        </div>
                     </div>
                </form>
                <button class="btn navbar-btn btn-success btn-block col-xs-4" id="addCreator"><span class="glyphicon glyphicon-plus"></span></button>
               </div>
               </div>
               <div class="panel panel-default" id="operators">
                <div class="panel-heading">Operator(s) - optional</div>
                <div class="panel-body">
                 <form class="form-horizontal formOperators">
                    <div class="form-group" id="operatorFormGroup1">
                        <div class="row">
                            <div class="col-xs-3">
                                <label class="control-label" id="nameLabel" for="operatorName">Name :</label>
                                <input type="text" id="nameOperator" class="form-control nameOperator">
                            </div>
                        
                            <div class="col-xs-3">
                                <label class="control-label" for="operatorFirstname">Firstname :</label>
                                <input type="text" id="firstnameOperator" class="form-control firstnameOperator">
                            </div>
     
                            <div class="col-xs-4">
                                <label class="control-label" for="operatorEmail">Email :</label>
                                <input type="text" id="emailOperator" class="form-control emailOperator">
                            </div>
                            
                            <button type="button" class="btn btn-danger deleteButton deleteOperatorButton" id="deleteOperator1"><span class="glyphicon glyphicon-remove"></span></button>
  
                        </div>
                     </div>
                </form>
                <button class="btn navbar-btn btn-success btn-block col-xs-4" id="addOperator"><span class="glyphicon glyphicon-plus"></span></button>
               </div>
             
    </div>
     <form class="form-horizontal formLanguageInstitution">
                    <div class="form-group">
                        <label class="col-sm-4 control-label" for="projectName">Project name :</label>
                        <div class="col-sm-8">
                            <input type="text" id="projectName" class="form-control">
                       </div>
                    </div>
                    
                    <div class="form-group formGroupSamplingDate">
                        <label class="col-sm-4 control-label" for="projectName">Sampling date(s) :</label>
                        <div class="col-sm-3">
                            <input id="samplingdate" type="date" name="samplingdate" class="samplingDate">
                       </div>
                       <p class="col-sm-5" id="errorSamplingDate">date incorrecte</p>
                    </div>
                    
                    <div class="col-sm-4 placementDiv">
                    </div>
                    <button type="button" class="btn navbar-btn btn-success col-xs-1" id="addSamplingDate"><span class="glyphicon glyphicon-plus"></span></button>
                    <div  class="col-sm-7 placementDiv">
                    </div>
                   <div class="form-group">
                        <label class="col-sm-4 control-label" for="language">Language :</label>
                        <div class="col-sm-8">
                            <select class="selectpicker"  id="language" title="Language..." data-width="100%">
                                <option>Français</option>
                                <option>English</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group formGroupInstitution">
                        <label class="col-sm-4 control-label" for="institution">Institution(s) :</label>
                        <div class="col-sm-8">
                            <input type="text" id="institution" class="form-control institution">
                       </div>
                    </div>
                    
                    <div class="col-xs-4 placementDiv">
                    </div>
                    <button type="button" class="btn navbar-btn btn-success btn-block col-xs-1" id="addInstitution"><span class="glyphicon glyphicon-plus"></span></button>
                    <div  class="col-sm-7 placementDiv">
                    </div>
                    
                    <div class="form-group formGroupScientificField">
                        <label class="col-sm-4 control-label" for="scientificField">Scientific Field(s) :</label>
                        <div class="col-sm-8">
                            <input type="text" id="scientificField" class="form-control scientificField">
                       </div>
                    </div>
                    
                    <div class="col-xs-4 placementDiv">
                    </div>
                    <button type="button" class="btn btn-success col-xs-1" id="addScientificField"><span class="glyphicon glyphicon-plus"></span></button>
                    <div  class="col-sm-7 placementDiv">
                    </div>
                    
                    <div class="form-group formGroupStation">
                        <label class="col-sm-4 control-label" for="station">Station(s) :</label>
                        <div class="col-sm-8">
                            <select class="selectpicker"  id="station" title="Station..." data-width="100%" multiple>
                                <option>AUB : <i>AUBOUE</i></option>
                                <option>WOI : <i>AUBOUE WOIGOT</i></option>
                                <option>BARB : <i>HOMERCOURT BARBUSSE</i></option>
                                <option>HOMUPCOR2014 : <i>HOMECOURT DAM UPSTREAM CORING 2014 MARCH</i></option>
                                <option>HOMUP : <i>HOMECOURT DAM UPSTREAM</i></option>
                                <option>HOMDW : <i>HOMECOURT DAM DOWNSTREAM</i></option>
                                <option>JOAB : <i>JOEUF ABATTOIR</i></option>
                                <option>JOHA : <i>JOEUF-HAROPRE</i></option>
                                <option>JOSAN : <i>JOEUF SAINTE ANNE</i></option>
                                <option>BRO : <i>JOEUF BROUCHETIERE</i></option>
                                <option>JOMED : <i>JOEUF MEDIATHEQUE</i></option>
                                <option>JOMEDDW : <i>JOEUF MEDIATHEQUE DOWNSTREAM</i></option>
                                <option>JOEP : <i>JOEUF EUROPIPE</i></option>
                                <option>JOWWTP : <i>JOEUF WASTEWATER TREATMENT PLANT</i></option>
                                <option>BETHUPB : <i>BETH DAM UPSTREAM B</i></option>
                                <option>BETHUPCOR2014 : <i>BETH DAM UPSTREAM 2014 CORING</i></option>
                                <option>BETHUPCOR2013 : <i>BETH DAM UPSTREAM 2013 CORING</i></option>
                                <option>BETHUP : <i>BETH DAM UPSTREAM</i></option>
                                <option>BETHDW : <i>BETH DAM DOWNSTREAM</i></option>
                                <option>RICH : <i>RICHEMONT A31 BRIDGE</i></option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group formGroupSampleKind">
                        <label class="col-sm-4 control-label" for="sampleKind">Sample kind(s) :</label>
                        <div class="col-sm-6">
                            <input type="text" id="sampleKind" class="form-control sampleKind" placeholder="name">
                       </div>
                       <div class="col-sm-2">
                            <input type="text" id="sampleKindAbbreviation" class="form-control sampleKindAbbreviation" placeholder="abbreviation">
                       </div>
                    </div>
                    
                    <div class="col-xs-4 placementDiv">
                    </div>
                    <button type="button" class="btn btn-success col-xs-1" id="addSampleKind"><span class="glyphicon glyphicon-plus"></span></button>
                    <div  class="col-sm-7 placementDiv">
                    </div>
                   </div>
                    
                    <div class="panel panel-default" id="measurement">
                        <div class="panel-heading">Measurement(s)</div>
                            <div class="panel-body">
                                <form class="form-horizontal formMeasurements">
                                    <div class="form-group measurementFormGroup" id="measurementFormGroup1">
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <label class="control-label" id="natureLabel" for="nature">Nature :</label>
                                                <input type="text" id="nature" class="form-control nature">
                                            </div>
                        
                                            <div class="col-xs-3">
                                                <label class="control-label" for="abbreviation">Abbreviation :</label>
                                                <input type="text" id="abbreviation" class="form-control abbreviation">
                                            </div>
     
                                            <div class="col-xs-4">
                                                <label class="control-label" for="unit">Unit :</label>
                                                <input type="text" id="unit" class="form-control unit">
                                            </div>
                            
                                            <button type="button" class="btn btn-danger deleteButton deleteMeasurementButton" id="deleteMeasurement1"><span class="glyphicon glyphicon-remove"></span></button>
                                          
                                        </div>
                                    </div>
                                </form>
                                <button class="btn navbar-btn btn-success addButton" id="addMeasurement"><span class="glyphicon glyphicon-plus"></span></button>
                            </div>
                        </div>
                        
                        <div class="panel panel-default" id="methodology">
                            <div class="panel-heading">Methodology</div>
                                <div class="panel-body" id="methodologyBody">
                                    <form class="form-horizontal formMethodology">
                                        <div class="form-group methodologyFormGroup" id="methodologyFormGroup1">
                        
                                            <div class="row">
                                                <div class="col-xs-5" id="settingCol">
                                                    <label class="control-label" id="settingLabel" for="">Setting :</label>
                                                    <input type="text" id="setting" class="form-control setting">
                                                </div>
                            
                                                <div class="col-xs-5">
                                                    <label class="control-label" for="settingMethodology">Setting's methodology :</label>
                                                    <input type="text" id="settingMethodology" class="form-control settingMethodology">
                                                </div>
         
                                                <button type="button" class="btn btn-danger deleteButton deleteSettingButton" id="deleteSetting1"><span class="glyphicon glyphicon-remove"></span></button>
                                              
                                            </div>
                                        </div>
                                    </form>
                                    <button class="btn navbar-btn btn-success addButton" id="addSetting"><span class="glyphicon glyphicon-plus"></span></button>
                                </div>
                            </div>
                    </div>
                    
                    </div>
                    
                    
            </form>
</div>
</div>
</div>

<div class="container" id="success">
    <div class="panel panel-default part row">
        <div class="panel-heading">DATA</div>
            <div class="panel-body span7 center">
            <p>Les méta-données ont été enregistrées. Veuillez insérer le fichier tabulaire de données.</p>
            </div>
        </div>
    </div>
</div>

<button class="btn btn-success btn-block" id="valider"><span class="glyphicon glyphicon-ok"></span> Valider</button>
<footer>
</footer>

</body>

<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>


</html>
END;
        return $HTML;
    }
}