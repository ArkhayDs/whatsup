<?php

namespace App\Controller;

use App\Entity\Chat;
use App\Entity\User;
use App\Entity\Message;
use App\Repository\ChatRepository;
use App\Service\PrivateChatHelper;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController
{
    /**
     * @var HubInterface
     */
    private HubInterface $hub;

    /**
     * @param HubInterface $hub
     */
    public function __construct(HubInterface $hub)
    {
        $this->hub = $hub;
    }


    /**
     * @throws NonUniqueResultException
     */
    #[Route('/chat/{topic}', name: 'app_chat_messages', methods: 'GET')]
    #[IsGranted('ROLE_USER')]
    public function getChatMessages(ChatRepository      $chatRepository,
                                    PrivateChatHelper   $chatHelper,
                                    string              $topic): JsonResponse
    {
        /** @var $user User */
        $user = $this->getUser();

        if (!$chatHelper->isUserInThisTopic($user->getId(), $topic)) {
            return $this->json([
                'status' => 0,
                'error' => "This user doesn't belong to this topic"
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return $this->json([
            'chat' => $chatRepository->getAllMessagesOrderByDate($topic)
        ],200, [], ['groups' => ['usable']]);
    }

    /**
     * @param Request $request
     * @param ChatRepository $chatRepository
     * @param EntityManagerInterface $entityManager
     * @param PrivateChatHelper $chatHelper
     * @return JsonResponse
     */
    #[Route('/chat/persist-message', name: 'app_chat_persist_message', methods: 'POST')]
    #[IsGranted('ROLE_USER')]
    public function persistMessage(Request                  $request,
                                   ChatRepository           $chatRepository,
                                   EntityManagerInterface   $entityManager,
                                   PrivateChatHelper        $chatHelper): JsonResponse
    {
        /** @var $user User */
        $user = $this->getUser();
        $chat = $chatRepository->findOneBy(['topic' => $request->request->get('topic')]);

        if (!$chat) {
            $chat = new Chat();
            $chat->setTopic($request->request->get('topic'));
            $chat->setCreatedAt(new \DateTime());
            $entityManager->persist($chat);
        }

        try {
            if (!$chatHelper->isUserInThisTopic($user->getId(), $request->request->get('topic'))) {
                return $this->json([
                    'status' => 0,
                    'error' => "The user cannot be found in the topic"
                ], Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            $message = new Message();
            $message->setAuthor($user)
                ->setChat($chat)
                ->setCreatedAt(new \DateTime())
                ->setContent($request->request->get('content'));

            $entityManager->persist($message);
            $entityManager->flush();

            return $this->json([
                'status' => 1,
            ], Response::HTTP_CREATED);
        } catch (Exception $exception) {
            return $this->json([
                'status' => 0,
                'error' => $exception->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * @param User $otheruser
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    #[Route('/chat/send-message/{otheruser}', name: 'app_chat_send_message', methods: 'POST')]
    #[IsGranted('ROLE_USER')]
    public function sendMessageMercure(User $otheruser,Request $request): JsonResponse
    {
        /** @var $user User */
        $user = $this->getUser();

        $update = new Update(
            [
                "https://example.com/chat",
                "https://example.com/user/{$otheruser->getId()}/?topic=" . urlencode('https://example.com/chat')
            ],
            json_encode([
                'content' => $request->request->get('content'),
                'author' => ['username' => $user->getUsername(), 'id' => $user->getId()]
            ]),
            true
        );

        $this->hub->publish($update);

        return $this->json([
           'message' => "message envoyé !"
        ]);
    }
}