<?php

namespace App\Factory;

use App\Entity\Message;
use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use App\Service\PrivateChatHelper;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @extends ModelFactory<Message>
 *
 * @method static Message|Proxy createOne(array $attributes = [])
 * @method static Message[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Message[]|Proxy[] createSequence(array|callable $sequence)
 * @method static Message|Proxy find(object|array|mixed $criteria)
 * @method static Message|Proxy findOrCreate(array $attributes)
 * @method static Message|Proxy first(string $sortedField = 'id')
 * @method static Message|Proxy last(string $sortedField = 'id')
 * @method static Message|Proxy random(array $attributes = [])
 * @method static Message|Proxy randomOrCreate(array $attributes = [])
 * @method static Message[]|Proxy[] all()
 * @method static Message[]|Proxy[] findBy(array $attributes)
 * @method static Message[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static Message[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static MessageRepository|RepositoryProxy repository()
 * @method Message|Proxy create(array|callable $attributes = [])
 */
final class MessageFactory extends ModelFactory
{
    private PrivateChatHelper $chatHelper;
    private UserRepository $userRepository;

    public function __construct(PrivateChatHelper $chatHelper, UserRepository $userRepository)
    {
        parent::__construct();
        $this->chatHelper = $chatHelper;
        $this->userRepository = $userRepository;
    }

    protected function getDefaults(): array
    {
        return [
            'content' => self::faker()->text(),
            'chat' => ChatFactory::random(),
            'author' => UserFactory::random(),
            'createdAt' => self::faker()->dateTimeBetween('-10 days')
        ];
    }

    protected function initialize(): self
    {
        // see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
        return $this
            // ->afterInstantiate(function(Message $message): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Message::class;
    }
}
