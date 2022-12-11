<?php

namespace App\Service;

class PrivateChatHelper
{
    /**
     * @param int $userId1
     * @param int $userId2
     * @return string
     */
    public function getPrivateChatTopic(int $userId1, int $userId2): string
    {
        if ($userId1 === $userId2) {
//            $userId2++;
            throw new \InvalidArgumentException("Les deux ID ne peuvent pas être identiques");
        }

        $order = [$userId1, $userId2];
        sort($order);

        return sprintf('%d.%d',$order[0], $order[1]);
    }

    /**
     * @param string $chatTopic
     * @return array
     */
    public function getUsersFromChatTopic(string $chatTopic): array
    {
        return explode('.', $chatTopic);
    }

    /**
     * @param int $userId
     * @param string $chatTopic
     * @return bool
     */
    public function isUserInThisTopic(int $userId, string $chatTopic): bool
    {
        return in_array($userId, $this->getUsersFromChatTopic($chatTopic));
    }
}