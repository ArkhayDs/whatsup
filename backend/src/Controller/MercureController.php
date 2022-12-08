<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Annotation\Route;

class MercureController extends AbstractController
{

    #[Route('/mercure-publish', name: 'app_mercure_publish')]
    public function publish(HubInterface $hub): JsonResponse
    {
        $update = new Update(
            ["https://example.com/my-private-topic"],
            json_encode(["message"=>"Hello Monde from Symfony !"])
        );

        $hub->publish($update);

        return $this->json(["message" => "Data published"]);
    }
}