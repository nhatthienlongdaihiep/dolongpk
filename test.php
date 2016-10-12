<?php
session_start();

echo $_COOKIE['ci_session'].'<br/>';

echo $_SESSION['captcha'];

?>