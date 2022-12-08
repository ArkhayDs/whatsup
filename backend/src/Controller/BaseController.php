<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\CookieHelper;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Annotation\Route;

class BaseController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    #[isGranted('ROLE_USER')]
    public function index(UserRepository $userRepository): JsonResponse
    {
        /** @var $user ?User */
        $user = $this->getUser();

        return $this->json([
            'users' => $userRepository->findAll()
        ], 200, [], ['groups' => 'usable']);
//        return $this->json([
//            'users' => $userRepository->findAllButMe($user)
//        ], 200, [], ['groups' => 'usable']);
    }

//    /**
//     * @throws Exception
//     */
//    #[Route('/mercure-login', name: 'app_mercure_login')]
//    public function getCookie(CookieHelper $cookieHelper): JsonResponse
//    {
//        return $this->json(
//            ["message" => "You're all set"],
//            200,
//            ['set-cookie' => $cookieHelper->buildCookie()]
//        );
//    }
}