<?php
/**
 * Created by PhpStorm.
 * User: ressources21
 * Date: 29/04/2016
 * Time: 10:25
 */
include "vendor/autoload.php";
use Slim\Slim;
use forMOBISED\controllers\HomeController;

$app = new Slim();

$app->get('/', function() {
    $c = new HomeController();
    $c->accueil();
});

$app->run();
