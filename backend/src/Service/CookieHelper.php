<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Cookie;

class CookieHelper
{
    private JWTHelper $JWTHelper;

    public function __construct(JWTHelper $JWTHelper)
    {
        $this->JWTHelper = $JWTHelper;
    }

    public function buildCookie(User $user): string
    {
        return Cookie::create(
            'JWTCookie',
            $this->JWTHelper->createJWT($user),
            new \DateTime("30 minutes"),
            '/whatsup/',
            'localhost',
            true,
            true,
            false,
            Cookie::SAMESITE_STRICT
        );
    }
}