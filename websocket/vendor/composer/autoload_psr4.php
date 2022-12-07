<?php

// autoload_psr4.php @generated by Composer

$vendorDir = dirname(__DIR__);
$baseDir = dirname($vendorDir);

return array(
    'Websocket\\' => array($baseDir . '/src'),
    'Thruway\\Transport\\' => array($vendorDir . '/thruway/pawl-transport/src', $vendorDir . '/thruway/ratchet-transport/src'),
    'Thruway\\' => array($vendorDir . '/voryx/thruway-common/src', $vendorDir . '/thruway/client/src', $vendorDir . '/voryx/thruway/src'),
    'Symfony\\Polyfill\\Mbstring\\' => array($vendorDir . '/symfony/polyfill-mbstring'),
    'Symfony\\Component\\Routing\\' => array($vendorDir . '/symfony/routing'),
    'Symfony\\Component\\HttpFoundation\\' => array($vendorDir . '/symfony/http-foundation'),
    'React\\Stream\\' => array($vendorDir . '/react/stream/src'),
    'React\\Socket\\' => array($vendorDir . '/react/socket/src'),
    'React\\Promise\\Timer\\' => array($vendorDir . '/react/promise-timer/src'),
    'React\\Promise\\' => array($vendorDir . '/react/promise/src'),
    'React\\EventLoop\\' => array($vendorDir . '/react/event-loop/src'),
    'React\\Dns\\' => array($vendorDir . '/react/dns/src'),
    'React\\Cache\\' => array($vendorDir . '/react/cache/src'),
    'Ratchet\\RFC6455\\' => array($vendorDir . '/ratchet/rfc6455/src'),
    'Ratchet\\Client\\' => array($vendorDir . '/ratchet/pawl/src'),
    'Ratchet\\' => array($vendorDir . '/cboden/ratchet/src/Ratchet'),
    'Psr\\Log\\' => array($vendorDir . '/psr/log/src'),
    'Psr\\Http\\Message\\' => array($vendorDir . '/psr/http-message/src'),
    'GuzzleHttp\\Psr7\\' => array($vendorDir . '/guzzlehttp/psr7/src'),
    'Firebase\\JWT\\' => array($vendorDir . '/firebase/php-jwt/src'),
);
