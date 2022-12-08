<?php

namespace App\Service;

use App\Entity\User;
use Exception;
use Symfony\Component\HttpFoundation\Cookie;

/**
 *
 */
class CookieHelper
{
    private JWTHelper $JWTHelper;

    /**
     * @param JWTHelper $JWTHelper
     */
    public function __construct(JWTHelper $JWTHelper)
    {
        $this->JWTHelper = $JWTHelper;
    }

    /**
     * @throws Exception
     */
    public function buildCookie(User $user): string
    {
        return Cookie::create(
            'mercureAuthorization',
            $this->JWTHelper->createJWT($user),
            new \DateTime("10 minutes"),
            '/.well-known/mercure',
            'localhost',
            true,
            true,
            false,
            Cookie::SAMESITE_STRICT
        );
    }
}