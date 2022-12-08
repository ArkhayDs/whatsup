<?php

namespace App\Service;

use App\Entity\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTHelper
{
    private string $mercureSecret;

    /**
     * @param string $mercureSecret
     */
    public function __construct(string $mercureSecret)
    {
        $this->mercureSecret = $mercureSecret;
    }

    /**
     * @return string
     */
    public function createJWT(User $user): string
    {
        return JWT::encode([
            'mercure' =>
                [
                    'publish' => ['*'],
                    'subscribe' => ['https://example.com/my-private-topic']
                ]
                ,[
                    'payload' => [
                        'username' => $user->getUsername(),
                        'id' => $user->getId()
                    ]
                ]
            ],
            $this->mercureSecret,
            'HS256'
        );
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