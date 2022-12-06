<?php

namespace App\Service;

use App\Entity\User;
use Firebase\JWT\JWT;

class JWTHelper
{
    private string $appSecret;

    public function __construct(string $appSecret)
    {
        $this->appSecret = $appSecret;
    }

    public function createJWT(User $user): string
    {
        return JWT::encode([
            'username' => $user->getUsername(),
            'id' => $user->getId()
        ],
            $this->appSecret,
            'HS256');
    }
}