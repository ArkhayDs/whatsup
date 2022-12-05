<?php

namespace App\Controller;

use App\Entity\User;
use App\Security\JWTAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Firebase\JWT\JWT;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

class UserController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function login(string $appSecret): JsonResponse
    {
        /** @var $user ?User */
        $user = $this->getUser();

        if (null === $user) {
            return $this->json([
                'message' => 'missing credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $jwt = JWT::encode([
            'username' => $user->getUsername(),
            'id' => $user->getId()
        ],
            $appSecret,
            'HS256');

        return $this->json([
            'success' => 'Connexion réussie, bonjour ' . $user->getUsername() . '!',
            'jwt' => $jwt
        ]);
    }

    #[Route('/register', name: 'app_register', methods: 'POST')]
    public function register(Request                        $request,
                             EntityManagerInterface         $entityManager,
                             UserPasswordHasherInterface    $hasher,
                             UserAuthenticatorInterface     $authenticator,
                             JWTAuthenticator               $JWTAuthenticator,
                             string                         $appSecret): JsonResponse
    {
        if (!empty($request->request->get('password'))
            && !empty($request->request->get('password2'))
            && $request->request->get('password') === $request->request->get('password2')
//                && $this->isCsrfTokenValid('register_form', $request->request->get('csrf'))
        ) {

            $user = new User();
            $user->setUsername($request->request->get('username'))
                ->setPassword($hasher->hashPassword($user, $request->request->get('password')));

            $entityManager->persist($user);
            $entityManager->flush();

            $authenticator->authenticateUser(
                $user,
                $JWTAuthenticator,
                $request
            );

            $jwt = JWT::encode([
                'username' => $user->getUsername(),
                'id' => $user->getId()
            ],
                $appSecret,
                'HS256');

            return $this->json([
                'message' => 'Inscription réussie, bienvenue ' . $user->getUsername() . '!',
                'jwt' => $jwt,
                'status' => 'success'
            ]);
        }
        return $this->json([
            'message' => 'Echec de l\'inscription, les mots de passes ne correspondent pas !',
            'status' => 'error'
        ]);
    }

    #[Route('/test', name: 'app_test')]
    #[IsGranted('ROLE_USER')]
    public function test(Request $request): JsonResponse
    {
        return $this->json([
            'headers' => getallheaders()["Authorization"]
        ]);
    }

    #[Route('/new-user/{username}-{password}', name: 'app_create_user')]
    public function createUser(string                      $username,
                               string                      $password,
                               UserPasswordHasherInterface $hasher,
                               EntityManagerInterface      $entityManager): JsonResponse
    {
        $user = new User();
        $user->setUsername($username)
            ->setPassword($hasher->hashPassword($user, $password));

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json([
            'message' => 'New user created',
            'username' => $username,
            'password' => $password
        ]);
    }
}