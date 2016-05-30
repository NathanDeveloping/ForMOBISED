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

<div class="container">
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
                                <input type="text" id="name" class="form-control">
                            </div>
                        
                            <div class="col-xs-3">
                                <label class="control-label" for="firstname">Firstname :</label>
                                <input type="text" id="firstname" class="form-control">
                            </div>
     
                            <div class="col-xs-4">
                                <label class="control-label" for="email">Email :</label>
                                <input type="text" id="email" class="form-control">
                            </div>
                            
                            <button type="button" class="btn btn-danger deleteButton deleteCreatorButton" id="deleteCreator1"><span class="glyphicon glyphicon-remove"></span></button>
                            
                        </div>
                     </div>
                </form>
                <button class="btn navbar-btn btn-success btn-block col-xs-4" id="addCreator"><span class="glyphicon glyphicon-plus"></span></button>
               </div>
               </div>
               <div class="panel panel-default" id="operators">
                <div class="panel-heading">Operator(s)</div>
                <div class="panel-body">
                 <form class="form-horizontal formOperators">
                    <div class="form-group" id="operatorFormGroup1">
                        <div class="row">
                            <div class="col-xs-3">
                                <label class="control-label" id="nameLabel" for="nameOperator">Name :</label>
                                <input type="text" id="nameOperator" class="form-control">
                            </div>
                        
                            <div class="col-xs-3">
                                <label class="control-label" for="firstnameOperator">Firstname :</label>
                                <input type="text" id="firstnameOperator" class="form-control">
                            </div>
     
                            <div class="col-xs-4">
                                <label class="control-label" for="emailOperator">Email :</label>
                                <input type="text" id="emailOperator" class="form-control">
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
                        <label class="col-sm-4 control-label" for="title">Language :</label>
                        <div class="col-sm-8">
                            <select class="selectpicker"  id="language" title="Language..." data-width="100%">
                                <option>Français</option>
                                <option>English</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="col-sm-4 control-label" for="institution">Institution(s) :</label>
                        <div class="col-sm-8">
                            <input type="text" id="institution" class="form-control">
                       </div>
                    </div>
                    
                    <button type="button" class="btn navbar-btn btn-success btn-block col-xs-4" id="addInstitution"><span class="glyphicon glyphicon-plus"></span></button>
    </form>
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