<?php

namespace App\Service;

use App\Entity\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTHelper
{
    private string $mercureSecret;
    private string $appSecret;

    public function __construct(string $mercureSecret, string $appSecret)
    {
        $this->mercureSecret = $mercureSecret;
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

    public function createMercureJWT(User $user): string
    {
        return JWT::encode([
            'mercure' =>
                [
                    'publish' => ['*'],
                    'subscribe' => ["https://example.com/user/{$user->getId()}/{?topic}"]
                ]
        ],
            $this->mercureSecret,
            'HS256');
    }

    /**
     * @param string $jwt
     * @return bool
     */
    public function isJwtValid(string $jwt): bool
    {
        try {
            return (bool)JWT::decode($jwt, new Key($this->mercureSecret, 'HS256'));
        } catch (\Exception $e) {
            return false;
        }
    }
}