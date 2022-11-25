<?php

namespace App\Service;

use Exception;
use Symfony\Component\HttpFoundation\Cookie;

class CookieHelper
{
    /**
     * @throws Exception
     */
    public function buildCookie(string $content, string $name, string $duration): string
    {
        return Cookie::create(
            $name,
            $content,
            new \DateTime($duration),
            '',
            'localhost',
            false,
            false,
            false,
            Cookie::SAMESITE_STRICT
        );
    }
}