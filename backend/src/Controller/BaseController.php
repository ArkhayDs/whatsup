<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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

}